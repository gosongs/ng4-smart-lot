import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MachineService } from '../../machine.service';
import { NotifyService } from '../../../../services/notify.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
  providers: [MachineService, NotifyService]
})
export class EditModalComponent implements OnInit, OnChanges {
  @Input() visible: boolean;
  @Input() currentRow: any;
  @Output() onCancel = new EventEmitter<boolean>();
  @Output() refreshData = new EventEmitter<boolean>();
  editForm: FormGroup;
  loading = false;
  imei: string;

  constructor(private fb: FormBuilder, private service: MachineService, private notify: NotifyService) {
    this.imei = '';
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      sim: [null, [Validators.required]],
      batch: [null, [Validators.required]],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.visible !== undefined) {
      // 检测 visible, 如果变化, 则调用getQR
      const { previousValue, currentValue } = changes.visible;
      if (previousValue !== undefined && previousValue !== currentValue) {
        const { imei, sim, batch } = this.currentRow;

        // form 重新赋值
        this.imei = imei;
        this.editForm.controls['sim'].setValue(sim);
        this.editForm.controls['batch'].setValue(batch);
      }
    }
  }

  resetForm() {
    this.editForm.reset();
  }

  cancel() {
    this.onCancel.emit();
  }

  ok() {
    // 校验表单
    for (const key in this.editForm.controls) {
      this.editForm.controls[key].markAsDirty();
    }
    if (this.editForm.valid) {
      this.loading = true;
      const {imei, id} = this.currentRow;
      this.service.machineAdd({...this.editForm.value, imei, id })
        .then(res => {
          this.loading = false; // 关闭loading
          if (res.code === 1) {
            this.refreshData.emit(); // 刷新表格数据
            this.resetForm(); // 重置表单
            this.cancel(); // 关闭表单
          } else {
            this.notify.error(res.msg);
          }
        })
        .catch(error => {
          this.notify.error(error);
        });
    }
  }

  getFormControl(name) {
    return this.editForm.controls[name];
  }

}
