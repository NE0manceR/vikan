
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ReversFormSmall } from '../../models/admin-models/model.reversFormSmall';
import { ReversFormBig } from '../../models/admin-models/model.reversFormBig';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MailSendService {

  private smallFormUrl = `${environment.url}api/smallform`;
  private bigFormUrl = `${environment.url}api/bigform`;

  constructor(private http: HttpClient) { }

  createServiceForm(smallForm: ReversFormSmall) {
    return this.http.post(this.smallFormUrl, smallForm, httpOptions).pipe(map(data => data));
  }

  createBigServiceForm(form: ReversFormBig) {
    return this.http.post(this.bigFormUrl, form, httpOptions).pipe(map(data => data));
  }
}