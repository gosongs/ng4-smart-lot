import { Component, OnInit } from '@angular/core';
import { Filter, Data, Batch } from './list.interface';
import { MachineService } from '../machine.service';
import { NotifyService } from '../../../services/notify.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [MachineService, NotifyService]
})
export class ListComponent implements OnInit {
  batchs: Batch[]; // 批次列表
  filters: Filter; // 存储搜索参数
  data: Data[] = []; // 表格数据
  dataLoading = false; // 表格加载状态
  page = 1; // 页码
  pageSize = 10; // 每页显示条数
  total = 100; // 数据总数
  addModalVisible = false;
  editModalVisible = false;
  qrModalVisible = false;
  currentRow: any;

  constructor(private service: MachineService, private notify: NotifyService) {
  }

  ngOnInit() {
    this.batchs = [];

    this.resetSearch();
    this.getBatchList(); // 获取批次号
    this.refreshData(); // 刷新表格数据
  }

  getBatchList() {
    this.service.batchList()
      .then(res => {
        if (res.code === 1) {
          this.batchs = res.data.list;
        } else {
          this.notify.error(res.msg);
        }
      })
      .catch(error => {
        this.notify.error(error);
      });
  }

  // 重置表单
  resetSearch() {
    this.filters = {
      imei: '',
      mid: '',
      sim: '',
      batch: '',
      status: ''
    };
  }

  refreshData(reset = false) {
    if (reset) {
      this.page = 1;
    }
    this.dataLoading = true;
    // 拼装数据, 发起请求
    this.service.machineList({ ...this.filters, index: (this.page - 1) * this.pageSize, total: this.pageSize })
      .then(res => {
        this.dataLoading = false;
        if (res.code === 1) {
          this.total = res.data.count;
          this.data = res.data.list;
        } else {
          this.notify.error(res.msg);
        }
      })
      .catch(error => {
        this.notify.error(error);
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
      })
      .catch(error => {
        this.notify.error(error);
      });
  }
}
