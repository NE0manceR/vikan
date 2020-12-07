import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { About } from '../../models/admin-models/model.about';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class AboutService {
  environment;
  private aboutUrl = `${environment.url}api/about`;
  constructor(private http: HttpClient) {}
  postData(about: About) {
    const body = {
      is_publish: about.is_publish,

      ua_title: about.ua_title,
      eng_title: about.eng_title,
      rus_title: about.rus_title,

      ua_main_title_number: about.ua_main_title_number,
      eng_main_title_number: about.eng_main_title_number,
      rus_main_title_number: about.rus_main_title_number,

      ua_main_text_number: about.ua_main_text_number,
      eng_main_text_number: about.eng_main_text_number,
      rus_main_text_number: about.rus_main_text_number,

      ua_main_title_fact: about.ua_main_title_fact,
      eng_main_title_fact: about.eng_main_title_fact,
      rus_main_title_fact: about.rus_main_title_fact,

      ua_main_text_fact: about.ua_main_text_fact,
      eng_main_text_fact: about.eng_main_text_fact,
      rus_main_text_fact: about.rus_main_text_fact,

      ua_main_more: about.ua_main_more,
      eng_main_more: about.eng_main_more,
      rus_main_more: about.rus_main_more,

      number_field1: about.number_field1,
      number_field2: about.number_field2,
      number_field3: about.number_field3,

      number_ua_title1: about.number_ua_title1,
      number_eng_title1: about.number_eng_title1,
      number_rus_title1: about.number_rus_title1,

      number_ua_text1: about.number_ua_text1,
      number_eng_text1: about.number_eng_text1,
      number_rus_text1: about.number_rus_text1,

      number_ua_title2: about.number_ua_title2,
      number_eng_title2: about.number_eng_title2,
      number_rus_title2: about.number_rus_title2,

      number_ua_text2: about.number_ua_text2,
      number_eng_text2: about.number_eng_text2,
      number_rus_text2: about.number_rus_text2,

      number_ua_title3: about.number_ua_title3,
      number_eng_title3: about.number_eng_title3,
      number_rus_title3: about.number_rus_title3,

      number_ua_text3: about.number_ua_text3,
      number_eng_text3: about.number_eng_text3,
      number_rus_text3: about.number_rus_text3,

      number_photo1: about.number_photo1,
      number_photo2: about.number_photo2,

      ua_facts_field1: about.is_publish,
      eng_facts_field1: about.eng_facts_field1,
      rus_facts_field1: about.rus_facts_field1,

      ua_facts_field2: about.ua_facts_field2,
      eng_facts_field2: about.eng_facts_field2,
      rus_facts_field2: about.rus_facts_field2,

      ua_facts_field3: about.ua_facts_field3,
      eng_facts_field3: about.eng_facts_field3,
      rus_facts_field3: about.rus_facts_field3,

      ua_facts_field4: about.ua_facts_field4,
      eng_facts_field4: about.eng_facts_field4,
      rus_facts_field4: about.rus_facts_field4,

      facts_photo1: about.facts_photo1,
      facts_photo2: about.facts_photo2,

      createdAt: about.createdAt,
      updatedAt: about.updatedAt,
    };
    return this.http.post(environment.url, body);
  }


/*
TAKE:
page: номер сторінки(для пагінації)
pageSize : скільки елементів на сторінку
status : останні додані (сортування) ("last")
lang: мова( ua-українська, eng-англійська , eng- англійська),(all-для адмін панелі)
isPublish: приймає 0 або 1 (0-опубліковані , 1- які не попадуть на сторінку користувачеві), змінити можна в адмін панелі,якщо не вказувати
по-замовчуванню опрацьовується -0

RETURN обєкт -(data):
id,is_publish,title, main_title_number,main_text_number, main_title_fact,main_text_fact,main_more,number_field1,number_field2,number_field3,
 number_title1,number_text1, number_title2,number_text2,number_title3,number_text3,number_photo1,number_photo2, facts_field1,facts_field2,                   
  facts_field3,  facts_field4, facts_photo1, facts_photo2 
*/
  getData(
    page: number,
    pageSize: number,
    status: string,
    lang: string,
    isPublish?: number
  ) {
    const querry = `${this.aboutUrl}?page=${page}&pageSize=${pageSize}&status=${status}&lang=${lang}&is_publish=${isPublish}`;
    return this.http.get(querry).pipe(map((data) => data));
  }

  /*  створення блоку (Про Нас) */
  createAbout(about: About) {
    return this.http
      .post(this.aboutUrl, about, httpOptions)
      .pipe(map((data) => data));
  }

  /* для внесення змін (редагування) */
  updateAbout(id: number, about: About) {
    return this.http.put(this.aboutUrl + '/update/' + id, about);
  }

  /* видалення запису по id */
  deleteAbout(id: number) {
    return this.http.delete(this.aboutUrl + '/' + id);
  }

  /* тест */
  getOne(id: number, status?: string) {
    return this.http.get(this.aboutUrl + '/one' + `?id=${id}&status=${status}`);
  }
}
