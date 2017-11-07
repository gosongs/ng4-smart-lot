import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qr-modal',
  templateUrl: './qr-modal.component.html',
  styleUrls: ['./qr-modal.component.scss']
})
export class QrModalComponent implements OnInit {
  @Input() visible: boolean;
  @Input() currentRow: any;
  @Output() onCancel = new EventEmitter<boolean>();
  loading = false;

  constructor() {
  }

  ngOnInit() {
  }

  cancel() {

  }

}
