import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MachineService } from '../../machine.service';
import { NotifyService } from '../../../../services/notify.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
  providers: [MachineService, NotifyService]
})
export class AddModalComponent implements OnInit {
  @Input() visible: boolean;
  @Output() onCancel = new EventEmitter<boolean>();
  @Output() refreshData = new EventEmitter<boolean>();
  addForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private service: MachineService, private notify: NotifyService) {
  }

  ngOnInit() {
    this.addForm = this.fb.group({
      imei: [null, [Validators.required]],
      sim: [null, [Validators.required]],
      batch: [null, [Validators.required]],
    });
  }

  resetForm() {
    this.addForm.reset();
  }

  cancel() {
    this.onCancel.emit();
  }

  ok() {
    for (const key in this.addForm.controls) {
      this.addForm.controls[key].markAsDirty();
    }
    if (this.addForm.valid) {
      this.loading = true;
      this.service.machineAdd(this.addForm.value)
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
    return this.addForm.controls[name];
  }

}
