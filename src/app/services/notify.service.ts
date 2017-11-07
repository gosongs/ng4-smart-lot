import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Injectable()
export class NotifyService {

  constructor(private notify: NzNotificationService) {
  }

  success(msg?: string) {
    this.fireNotify('success', '成功', msg || '操作成功');
  }

  error(msg?: string) {
    this.fireNotify('error', '错误', msg || '操作失败, 请重试!');
  }

  warn(msg?: string) {
    this.fireNotify('warn', '警告', msg);
  }

  info(msg?: string) {
    this.fireNotify('info', '信息', msg);
  }

  private fireNotify(type: string, title: string, msg: string) {
    this.notify.create(type, title, msg);
  }
}
