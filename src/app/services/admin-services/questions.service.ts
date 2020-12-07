import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Questions } from '../../models/admin-models/model.questions';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable()
export class QuestionsService {
    private questionsUrl = `${environment.url}api/questions`;
    constructor(private http: HttpClient) { }
    postData(questions: Questions) {
        const body = {
            ua_question: questions.ua_question,
            eng_question: questions.eng_question,
            rus_question: questions.rus_question,
            ua_answer: questions.ua_answer,
            eng_answer: questions.eng_answer,
            rus_answer: questions.rus_answer,
            createdAt: questions.createdAt,
            updatedAt: questions.updatedAt};
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
id,question,answer (в залежності від обраної мови (lang))
*/

    getData(page: number, pageSize: number,status: string,lang: string, isPublish?: number) {
        const querry = `${this.questionsUrl}?page=${page}&pageSize=${pageSize}&status=${status}&lang=${lang}&is_publish=${isPublish}`;
        return this.http.get(querry).pipe(map(data => data));
    }

    /*створення запису*/
    createQuestions(questions: Questions) {
        return this.http.post(this.questionsUrl, questions, httpOptions).pipe(map(data => data));
    }

    /*оновлення (редагування) запису */
    updateQuestions(id: number, questions: Questions) {
        return this.http.put(this.questionsUrl + '/update/' + id, questions );
    }

    /* видалення запису по id */
    deleteQuestions(id: number) {
        return this.http.delete(this.questionsUrl + '/' + id);
    }
}
