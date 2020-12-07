import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Raw } from '../../models/admin-models/model.raw';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable()
export class RawService {
  private rawUrl = `${environment.url}api/raw`;
  constructor(private http: HttpClient) {}
  postData(raw: Raw) {
    const body = {
      id: raw.id,
      is_publish: raw.is_publish,

      ua_name: raw.ua_name,
      eng_name: raw.eng_name,
      rus_name: raw.rus_name,

      ua_description: raw.ua_description,
      eng_description: raw.eng_description,
      rus_description: raw.rus_description,

      raw_icon: raw.raw_icon,

      raw_photo1: raw.raw_photo1,
      raw_photo2: raw.raw_photo2,
      raw_photo3: raw.raw_photo3,
      raw_photo4: raw.raw_photo4,
      raw_photo5: raw.raw_photo5,
      raw_photo6: raw.raw_photo6,

      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
    return this.http.post(environment.url, body);
  }

  /*
TAKE:
page: номер сторінки(для пагінації)
pageSize : скільки елементів на сторінку
status : останні додані (сортування) ("last")
lang: мова( ua-українська, eng-англійська , eng- англійська) (all-для адмін панелі)
isPublish: приймає 0 або 1 (0-опубліковані , 1- які не попадуть на сторінку користувачеві), змінити можна в адмін панелі,якщо не вказувати
по-замовчуванню опрацьовується -0

RETURN обєкт -(data):
id, name ,description,icon,photo1,photo2,photo3,photo4,photo5,photo6
*/

  getData(page: number, pageSize: number, status: string,lang: string, isPublish?: number) {
    const querry = `${this.rawUrl}?page=${page}&pageSize=${pageSize}&status=${status}&lang=${lang}&is_publish=${isPublish}`;
    return this.http.get(querry).pipe(map((data) => data));
  }

  /*створення запису*/
  createRaw(raw: Raw) {
    return this.http.post(this.rawUrl, raw, httpOptions).pipe(map((data) => data));
  }

  /*оновлення (редагування) запису */
  updateRaw(id: number, raw: Raw) {
    return this.http.put(this.rawUrl + '/update/' + id, raw);
  }

  /*видалення запису по id (адмін панель) */
  deleteRaw(id: number) {
    return this.http.delete(this.rawUrl + '/' + id);
  }

  /* метод для моделі в якій є блок "Сировина для  обробки" в ній
є назва та іконка сировини. метод приймає 3-ри id та вказівник мови(lang).
повертає відповідно до вказівника, назву на певній мові,id та фото іконки */

  getRawForModel(id1: number,id2: number,id3: number, lang: string,) {
    return this.http.get(this.rawUrl + '/model' + `?id1=${id1}&id2=${id2}&id3=${id3}&lang=${lang}`);
  }

  //тест
  getAll() {
    return this.http.get(this.rawUrl + '/takeAll');
  }
}
