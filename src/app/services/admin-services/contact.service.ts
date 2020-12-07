import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Contact } from '../../models/admin-models/model.contact';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable()
export class ContactService {
    private contactUrl = `${environment.url}api/contact`;
    constructor(private http: HttpClient) { }
    postData(contact: Contact) {
        const body = {
            is_publish:contact.is_publish,
            ua_address: contact.ua_address,
            eng_address: contact.eng_address,
            rus_address:contact.rus_address,
            contact_mob:contact.contact_mob,
            contact_stac:contact.contact_stac,
            contact_fax:contact.contact_fax,
            email:contact.email,
            createdAt: contact.createdAt,
            updatedAt: contact.updatedAt};
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
id,address,contact_mob,contact_stac ,contact_fax ,email ,(в залежності від обраної мови (lang))
*/
    getData(page: number, pageSize: number,status: string,lang: string, isPublish?: number) {
        const querry = `${this.contactUrl}?page=${page}&pageSize=${pageSize}&status=${status}&lang=${lang}&is_publish=${isPublish}`;
        return this.http.get(querry).pipe(map(data => data));
    }

    /*створення запису*/
    createContact(contact: Contact) {
        console.log('investPlace in createinvestigationPlace' + contact);
        return this.http.post(this.contactUrl, contact, httpOptions).pipe(map(data => data));
    }

    /*оновлення (редагування) запису */
    updateContact(id: number, contact: Contact) {
        console.log('investPlace update in updateInvestigationPlace');
        return this.http.put(this.contactUrl + '/update/' + id , contact);
    }

    /*видалення запису  по id  (адмін панель) */
    deleteContact(id: number) {
        return this.http.delete(this.contactUrl + '/' + id);
    }

    //тест 
    getAll() {
        return this.http.get(this.contactUrl + '/takeAllContact');
    }
}
