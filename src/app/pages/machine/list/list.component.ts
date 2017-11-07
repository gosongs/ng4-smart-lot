import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Filter, Data } from './list.interface';
import { MachineService } from '../machine.service';
import { NzNotificationService } from 'ng-zorro-antd';
import set = Reflect.set;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [MachineService, NzNotificationService]
})
export class ListComponent implements OnInit {
  searchForm: FormGroup;
  filters: Filter[];
  data: Data[] = [];
  dataLoading = false;
  page = 1;
  pageSize = 10;
  total = 100;
  addModalVisible = false;
  qrModalVisible = false;
  currentRow: any;

  constructor(private fb: FormBuilder, private service: MachineService, private notify: NzNotificationService) {
  }

  ngOnInit() {
    this.searchForm = this.fb.group({});
    this.filters = [
      {
        label: 'IMEI',
        value: 'imei',
        placeholder: '请输入IMEI'
      },
      {
        label: '设备编号',
        value: 'mid',
        placeholder: '请输入设备编号'
      },
      {
        label: 'SIM卡号',
        value: 'sim',
        placeholder: '请输入SIM卡号'
      },
      {
        label: '批次号',
        value: 'batch',
        placeholder: '请输入批次号'
      }
    ];

    this.filters.map(item => {
      this.searchForm.addControl(item.value, new FormControl());
    });

    this.refreshData();
  }

  resetForm() {
    this.searchForm.reset();
  }

  refreshData(reset = false) {
    if (reset) {
      this.page = 1;
    }
    this.dataLoading = true;
    // 拼装数据, 发起请求
    this.service.machineList({ ...this.searchForm.value, total: this.pageSize })
      .then(res => {
        this.dataLoading = false;
        if (res.code !== 1) {
          this.notify.create('error', '出错了', res.msg);
        } else {
          this.total = res.data.count;
          this.data = res.data.list;
        }
      });
  }

  showQR(row: any) {
    this.currentRow = row;
    this.qrModalVisible = true;
    // this.service.machineQR(row)
    //   .then(res => {
    //     console.log(res);
    //     if (res.code !== 1) {
    //       this.notify.create('error', '出错了', res.msg);
    //     } else {
    //       // this.qr = res.data.count;
    //       // this.data = res.data.list;
    //     }
    //   });
  }
}
