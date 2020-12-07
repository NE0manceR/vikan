import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ServiceTitle } from '../../models/admin-models/model.serviceTitle';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ServiceTitleService {
    private serviceTitleUrl = `${environment.url}api/title`;
    constructor(private http: HttpClient) { }
    postData(serviceTitle: ServiceTitle) {
        const body = {
            id: serviceTitle.id,
            is_publish: serviceTitle.is_publish,
            email: serviceTitle.email,
            mobile: serviceTitle.mobile,
            phone: serviceTitle.phone,
             createdAt: serviceTitle.createdAt,
             updatedAt: serviceTitle.updatedAt};
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
id,email ,mobile,phone(в залежності від обраної мови (lang))
*/
    getData(page: number, pageSize: number,status: string, isPublish?: number) {
        const querry = `${this.serviceTitleUrl}?page=${page}&pageSize=${pageSize}&status=${status}&is_publish=${isPublish}`;
        return this.http.get(querry).pipe(map(data => data));
    }

    /*створення запису*/
    createServiceTitle(serviceTitle: ServiceTitle) {
        return this.http.post(this.serviceTitleUrl, serviceTitle, httpOptions).pipe(map(data => data));
    }

    /*оновлення (редагування) запису */
    updateServiceTitle(id: number, serviceTitle: ServiceTitle) {
        return this.http.put(this.serviceTitleUrl + '/update/' + id , serviceTitle);
    }

    /*видалення запису (адмін панель) */
    deleteServiceTitle(id: number) {
        return this.http.delete(this.serviceTitleUrl + '/' + id);
    }
    
    //тест
    getOne(id: number,status?: string) {
        return this.http.get(this.serviceTitleUrl + '/one'+`?id=${id}&status=${status}`);
    }
    
}
