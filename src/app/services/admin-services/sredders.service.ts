import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from '../../../environments/environment';
import { CategorySredders } from '../../models/admin-models/model.sredders';
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable()
export class SreddersService {
  private sreddersUrl = `${environment.url}api/shredders`;
  constructor(private http: HttpClient) {}
  postData(sredders: CategorySredders) {
    const body = {
      is_publish: sredders.is_publish,
      ua_name: sredders.ua_name,
      eng_name: sredders.eng_name,
      rus_name: sredders.rus_name,
      createdAt: sredders.createdAt,
      updatedAt: sredders.updatedAt,
    };
    return this.http.post(environment.url, body);
  }

   /*
TAKE:
page: номер сторінки(для пагінації)
pageSize : скільки елементів на сторінку
status : останні додані (сортування)  ("last")
lang: мова( ua-українська, eng-англійська , eng- англійська)
isPublish: приймає 0 або 1 (0-опубліковані , 1- які не попадуть на сторінку користувачеві), змінити можна в адмін панелі,якщо не вказувати
по-замовчуванню опрацьовується -0

RETURN обєкт -(data):
id,name(в залежності від обраної мови (lang))
*/
  
  getData(page: number, pageSize: number, status: string,lang: string, isPublish?: number) {
    const querry = `${this.sreddersUrl}?page=${page}&pageSize=${pageSize}&status=${status}&lang=${lang}&is_publish=${isPublish}`;
    return this.http.get(querry).pipe(map((data) => data));
  }

  /*створення запису*/
  createSredders(forum: CategorySredders) {
    return this.http
      .post(this.sreddersUrl, forum, httpOptions)
      .pipe(map((data) => data));
  }

  /*оновлення (редагування) запису */
  updateSredders(id: number, sredders: CategorySredders) {
    return this.http.put(this.sreddersUrl + "/update/" + id, sredders);
  }

  /*видалення запису  по id   (адмін панель) */
  deleteSredders(id: number) {
    return this.http.delete(this.sreddersUrl + "/" + id);
  }

 //тест
  getOne(id: number,idUser:number, status: string) {
    return this.http.get(this.sreddersUrl + "/one" + `?id=${id}&idUser=${idUser}&status=${status}`);
  }

}
