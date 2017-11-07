import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MachineService } from '../../machine.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
  providers: [MachineService]
})
export class AddModalComponent implements OnInit {
  @Input() visible: boolean;
  @Output() onCancel = new EventEmitter<boolean>();
  @Output() refreshData = new EventEmitter<boolean>();
  addForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private service: MachineService, private notify: NzNotificationService) {
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
    this.service.machineAdd(this.addForm.value)
      .then(res => {
        if (res.code !== 1) {
          this.notify.create('error', '出错了', res.msg);
        } else {
          this.refreshData.emit();
        }
        this.resetForm();
        this.cancel();
      });
  }

  getFormControl(name) {
    return this.addForm.controls[name];
  }

}
