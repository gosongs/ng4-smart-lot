import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Filter, Data } from './list.interface';
import { MachineService } from '../machine.service';
import { NotifyService } from '../../../services/notify.service';
import set = Reflect.set;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [MachineService, NotifyService]
})
export class ListComponent implements OnInit {
  searchForm: FormGroup;
  filters: Filter[];
  data: Data[] = [];
  dataLoading = false;
  page = 1; // 页码
  pageSize = 10; // 每页显示条数
  total = 100;
  addModalVisible = false;
  editModalVisible = false;
  qrModalVisible = false;
  currentRow: any;

  constructor(private fb: FormBuilder, private service: MachineService, private notify: NotifyService) {
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
    this.service.machineList({ ...this.searchForm.value, index: (this.page - 1) * this.pageSize, total: this.pageSize })
      .then(res => {
        this.dataLoading = false;
        if (res.code !== 1) {
          this.notify.error(res.msg);
        } else {
          this.total = res.data.count;
          this.data = res.data.list;
        }
      });
  }

  showQR(row: any) {
    this.currentRow = row;
    this.qrModalVisible = true;
  }

  showEdit(row: any) {
    this.currentRow = row;
    this.editModalVisible = true;
  }

  delConfirm(row) {
    const { id } = row;
    this.service.machineDel({ id })
      .then(res => {
        if (res.code === 1) {
          this.refreshData();
        } else {
          this.notify.error(res.msg);
        }
      });
  }
}
