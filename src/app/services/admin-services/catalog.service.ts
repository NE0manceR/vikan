import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Catalog } from '../../models/admin-models/model.catalog';
import { environment } from '../../../environments/environment';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class CatalogService {
    private status='';
    private catalogUrl = `${environment.url}api/catalog`;
    constructor(private http: HttpClient) { }
    postData(catalog: Catalog) {
        const body = {
            is_publish: catalog.is_publish,
            ua_name: catalog.ua_name,
            eng_name: catalog.eng_name,
            rus_name: catalog.rus_name,
             createdAt: catalog.createdAt,
             updatedAt: catalog.updatedAt};
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
id,is_publish,name,photo
*/
    getData(page: number, pageSize: number,status: string,lang: string, isPublish?: number) {
        const querry = `${this.catalogUrl}?page=${page}&pageSize=${pageSize}&status=${status}&lang=${lang}&is_publish=${isPublish}`;
        return this.http.get(querry).pipe(map(data => data));
    }

    /*створення запису*/
    createCatalog(catalog: Catalog) {
        return this.http.post(this.catalogUrl, catalog, httpOptions).pipe(map(data => data));
    }

    /*оновлення (редагування) запису */
    updateCatalog(id: number, catalog: Catalog) {
        return this.http.put(this.catalogUrl + '/update/' + id , catalog);
    }

    /*видалення запису по id (адмін панель) */
    deleteCatalog(id: number) {
        return this.http.delete(this.catalogUrl + '/' + id);
    }

     //переглянути один запис (тест)
    getOne(id: number,status?: string) {
        return this.http.get(this.catalogUrl + '/one'+`?id=${id}&status=${status}`);
    }
    

   
    
}
