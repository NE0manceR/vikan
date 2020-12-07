import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CategorySortingLine } from '../../models/admin-models/model.sortingLine';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class SortingLineService {
    private sortLineUrl = `${environment.url}api/sortline`;
    constructor(private http: HttpClient) { }
    postData(sortLine: CategorySortingLine) {
        const body = {
            is_publish: sortLine.is_publish,
            ua_name: sortLine.ua_name,
            eng_name: sortLine.eng_name,
            rus_name: sortLine.rus_name,
            create: sortLine.createdAt,
            update: sortLine.updatedAt
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
    getData(page: number, pageSize: number,status: string,lang: string, isPublish?: number) {
        const querry = `${this.sortLineUrl}?page=${page}&pageSize=${pageSize}&status=${status}&lang=${lang}&is_publish=${isPublish}`;
        return this.http.get(querry).pipe(map(data => data));
    }

    /*створення запису*/
    createSortingLine(sortLine: CategorySortingLine) {
        return this.http.post(this.sortLineUrl, sortLine, httpOptions).pipe(map(data => data));
    }

    /*оновлення (редагування) запису */
    updateSortingLine(id: number, sortLine: CategorySortingLine) { 
        return this.http.put(this.sortLineUrl + '/update/' + id, sortLine);
    }

    /*видалення запису  по id   (адмін панель) */
    deleteSortingLine(id: number) {
        return this.http.delete(this.sortLineUrl + '/' + id);
    }
    
    //тест
    getOne(id: number,status?: string) {
        return this.http.get(this.sortLineUrl + '/one' +`?id=${id}&status=${status}`);
    }

   
}
    
