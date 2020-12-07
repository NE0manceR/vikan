import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ReversFormBig } from '../../models/admin-models/model.reversFormBig';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable()
export class ReversFormBigService {
    private bigFormUrl = `${environment.url}api/bigform`;
    constructor(private http: HttpClient) { }
    postData(bigForm: ReversFormBig) {
        const body = {
            id: bigForm.id,
            is_review:bigForm.is_review,
            name: bigForm.name,
            phone: bigForm.phone,
            email: bigForm.email,
            theme: bigForm.theme,
            message: bigForm.message,
            country: bigForm.country,
            street: bigForm.street,
            company: bigForm.company,
            city: bigForm.city,
            post: bigForm.post,
            createdAt: bigForm.createdAt,
            updatedAt: bigForm.updatedAt};
        return this.http.post(environment.url, body);
    }

     /*
TAKE:
page: номер сторінки(для пагінації)
pageSize : скільки елементів на сторінку
status : останні додані (сортування)  ("last")
isReview: приймає 0 або 1 (0-не переглянуті , 1- переглянуті), змінити можна в адмін панелі,якщо не вказувати
по-замовчуванню опрацьовується -0

RETURN обєкт -(data):
id,is_review,name,phone ,email ,theme,message,country,street,company,city,post,createdAt,updatedAt
*/
    getData(page: number, pageSize: number,status: string, isReview?: number) {
        const querry = `${this.bigFormUrl}?page=${page}&pageSize=${pageSize}&status=${status}&is_review=${isReview}`;
        return this.http.get(querry).pipe(map(data => data));
    }

     /*створення запису*/
    createServiceForm(bigForm: ReversFormBig) {
        return this.http.post(this.bigFormUrl, bigForm, httpOptions).pipe(map(data => data));
    }

    /*оновлення (редагування) запису */
    updateServiceForm(id: number, bigForm: ReversFormBig) {
        return this.http.put(this.bigFormUrl + '/update/' + id , bigForm);
    }

    /*видалення запису по id  */
    deleteServiceForm(id: number) {
        return this.http.delete(this.bigFormUrl + '/' + id);
    }
}
