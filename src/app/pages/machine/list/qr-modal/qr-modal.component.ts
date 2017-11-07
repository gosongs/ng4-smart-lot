import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { MachineService } from '../../machine.service';
import { NotifyService } from '../../../../services/notify.service';

@Component({
  selector: 'app-qr-modal',
  templateUrl: './qr-modal.component.html',
  styleUrls: ['./qr-modal.component.scss'],
  providers: [MachineService, NotifyService]
})
export class QrModalComponent implements OnInit, OnChanges {
  @Input() visible: boolean;
  @Input() currentRow: any;
  @Output() onCancel = new EventEmitter<boolean>();
  loading = false;
  qrSrc: string;

  constructor(private service: MachineService, private notify: NotifyService) {
    this.qrSrc = '';
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    // 检测 visible, 如果变化, 则调用getQR
    if (changes.visible !== undefined) {
      const { previousValue, currentValue } = changes.visible;
      if (previousValue !== undefined && previousValue !== currentValue) {
        this.getQR();
      }
    }
  }

  cancel() {
    this.onCancel.emit();
  }

  getQR() {
    const { id } = this.currentRow;
    this.service.machineQR({ id })
      .then(res => {
        if (res.code === 1) {
          this.qrSrc = 'data:image/png;base64,' + res.data;
        } else {
          this.notify.error(res.msg);
        }
      })
      .catch(error => {
        this.notify.error(error);
      })
  }
}
