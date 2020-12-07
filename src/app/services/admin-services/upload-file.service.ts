import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

/* Клас для завантаження та відвантаження фото */
export class UploadFileService {

  constructor(private http: HttpClient) { }

  /* на сховище */
  pushFileToStorage(file: File, id?, key?): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    if(id){
      formdata.append('id', id);
    }
    if(key){
      formdata.append('key', key);
    }else{
      formdata.append('key', '0');
    }

    const req = new HttpRequest('POST', `${environment.url}api/files/upload`, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }


  getFiles(): Observable<any> {
    return this.http.get(`${environment.url}api/files/all`);
  }

  /* з сховища */
  getFile(name): Observable<any> {
    return this.http.get(`${environment.url}api/files/${name}`);
  }
}
