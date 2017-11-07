import { Injectable, Injector } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export abstract class BaseHttpService {
  private headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
  private http: Http;
  private host = '';

  constructor(private baseInjector: Injector) {
    this.http = this.baseInjector.get(Http);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  protected post(url: string, params?: any): Promise<any> {
    return this.http.post(this.host + url, params, { headers: this.headers })
      .toPromise()
      .then(response => {
        const res = response.json();
        if (res.code === 1) {
          return res;
        } else {
          return this.handleError(res.msg);
        }
      })
      .catch(this.handleError);
  }

  protected get(url: string, params?: any): Promise<any> {
    return this.http.get(this.host + url, {
      search: params
    })
      .toPromise()
      .then(response => {
        const res = response.json();
        if (res.code === 1) {
          return res;
        } else {
          return this.handleError(res.message);
        }
      })
      .catch(this.handleError);
  }
}
