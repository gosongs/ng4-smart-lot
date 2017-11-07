import { Injectable, Injector } from '@angular/core';
import { BaseHttpService } from '../../services/base-http-service.service';

@Injectable()
export class MachineService extends BaseHttpService {

  constructor(private injector: Injector) {
    super(injector);
  }

  machineList(filter: any) {
    return this.post('/api/v1/machine/getlist', filter)
      .then(res => res);
  }

  machineAdd(params: any) {
    return this.post('api/v1/machine/add', params)
      .then(res => res);
  }

  machineQR(params: any) {
    const { id } = params;
    return this.post('api/v1/machine/QRBase64', { id })
      .then(res => res);
  }

}
