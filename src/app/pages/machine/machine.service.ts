import { Injectable, Injector } from '@angular/core';
import { BaseHttpService } from '../../services/base-http-service.service';

@Injectable()
export class MachineService extends BaseHttpService {

  constructor(private injector: Injector) {
    super(injector);
  }

  machineList(filter) {
    return this.post('/api/v1/machine/getlist', filter)
      .then(res => res);
  }

  machineAdd(params) {
    return this.post('api/v1/machine/add', params)
      .then(res => res);
  }

  machineDel(params) {
    return this.post('api/v1/machine/delete', params)
      .then(res => res);
  }

  machineQR(params) {
    const { id } = params;
    return this.post('api/v1/machine/QRBase64', { id })
      .then(res => res);
  }

  batchList(params?: any) {
    return this.post('api/v1/batch/getlist', params)
      .then(res => res);
  }

}
