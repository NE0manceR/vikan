import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ReversFormSmall } from '../../models/admin-models/model.reversFormSmall';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable()
export class ReversFormSmallService {
    private smallFormUrl = `${environment.url}api/smallform`;
    constructor(private http: HttpClient) { }
    postData(smallForm: ReversFormSmall) {
        const body = {
            id: smallForm.id,
            is_review:smallForm.is_review,

            name: smallForm.name,
            phone: smallForm.phone,
            
            createdAt: smallForm.createdAt,
            updatedAt: smallForm.updatedAt};
        return this.http.post(environment.url, body);
    }

     /*
TAKE:
page: номер сторінки(для пагінації)
pageSize : скільки елементів на сторінку
status : останні додані (сортування)  ("last")
isPublish: приймає 0 або 1 (0-не переглянуті , 1- переглянуті), змінити можна в адмін панелі ,якщо не вказувати
по-замовчуванню опрацьовується -0

RETURN обєкт -(data):
id,is_review,name,phone,createdAt,updatedAt
*/
    getData(page: number, pageSize: number,status: string, isReview?: number) {
        const querry = `${this.smallFormUrl}?page=${page}&pageSize=${pageSize}&status=${status}&is_review=${isReview}`;
        return this.http.get(querry).pipe(map(data => data));
    }

    /*створення запису*/
    createServiceForm(smallForm: ReversFormSmall) {
        return this.http.post(this.smallFormUrl, smallForm, httpOptions).pipe(map(data => data));
    }

    /*оновлення (редагування) запису */
    updateServiceForm(id: number, smallForm: ReversFormSmall) {
        return this.http.put(this.smallFormUrl + '/update/' + id , smallForm);
    }

    /*видалення запису по id  */
    deleteServiceForm(id: number) {
        return this.http.delete(this.smallFormUrl + '/' + id);
    }
}
