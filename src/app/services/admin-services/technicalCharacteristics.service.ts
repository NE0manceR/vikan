import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { TechnicalCharacteristics } from '../../models/admin-models/model.technicalCharacteristics';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class TechnicalCharacteristicsService {
    private techUrl = `${environment.url}api/model`;
    constructor(private http: HttpClient) { }
    postData(model: TechnicalCharacteristics) {
        const body = {
            id: model.id,
            is_publish: model.is_publish,

            ua_type_desc: model.ua_type_desc,
            eng_type_desc: model.eng_type_desc,
            rus_type_desc: model.rus_type_desc,

            name: model.name,

            ua_description: model.ua_description,
            eng_description: model.eng_description,
            rus_description: model.rus_description,

            photo: model.photo,
            tech_photo: model.tech_photo,

            ua_type_machine: model.ua_type_machine,
            eng_type_machine: model.eng_type_machine,
            rus_type_machine: model.rus_type_machine,

            ua_productivity: model.ua_productivity,
            eng_productivity: model.eng_productivity,
            rus_productivity: model.rus_productivity,

            motor: model.motor,
            power: model.power,
            idle_speed: model.idle_speed,
            working_speed: model.working_speed,

            ua_type_node: model.ua_type_node,
            eng_type_node: model.eng_type_node,
            rus_type_node: model.rus_type_node,

            automatic_no_material: model.automatic_no_material,
            shaft_diameter: model.shaft_diameter,
            lenght_work: model.lenght_work,
            height_work: model.height_work,
            width_work: model.width_work,
            lenght_transport: model.lenght_transport,
            height_transport: model.height_transport,
            width_transport: model.width_transport,
            volume_hydraulic: model.volume_hydraulic,
            max_pressure_hydraulic: model.max_pressure_hydraulic,
            size_sieve_holes: model.size_sieve_holes,
            size_org_fraction: model.size_org_fraction,
            interest_fraction_out: model.interest_fraction_out,
            product_mass: model.product_mass,

            ua_desc_title1: model.ua_desc_title1,
            eng_desc_title1: model.eng_desc_title1,
            rus_desc_title1: model.rus_desc_title1,

            ua_desc_title2: model.ua_desc_title2,
            eng_desc_title2: model.eng_desc_title2,
            rus_desc_title2: model.rus_desc_title2,

            ua_desc_title3: model.ua_desc_title3,
            eng_desc_title3: model.eng_desc_title3,
            rus_desc_title3: model.rus_desc_title3,
            
            ua_desc_title4: model.ua_desc_title4,
            eng_desc_title4: model.eng_desc_title4,
            rus_desc_title4: model.rus_desc_title4,

            ua_desc_title5: model.ua_desc_title5,
            eng_desc_title5: model.eng_desc_title5,
            rus_desc_title5: model.rus_desc_title5,

            ua_desc_under_title1: model.ua_desc_under_title1,
            eng_desc_under_title1: model.eng_desc_under_title1,
            rus_desc_under_title1: model.rus_desc_under_title1,

            ua_desc_under_title2: model.ua_desc_under_title2,
            eng_desc_under_title2: model.eng_desc_under_title2,
            rus_desc_under_title2: model.rus_desc_under_title2,

            ua_desc_under_title3: model.ua_desc_under_title3,
            eng_desc_under_title3: model.eng_desc_under_title3,
            rus_desc_under_title3: model.rus_desc_under_title3,

            ua_desc_under_title4: model.ua_desc_under_title4,
            eng_desc_under_title4: model.eng_desc_under_title4,
            rus_desc_under_title4: model.rus_desc_under_title4,

            ua_desc_under_title5: model.ua_desc_under_title5,
            eng_desc_under_title5: model.eng_desc_under_title5,
            rus_desc_under_title5: model.rus_desc_under_title5,

            ua_desc_description1: model.ua_desc_description1,
            eng_desc_description1: model.eng_desc_description1,
            rus_desc_description1: model.rus_desc_description1,

            ua_desc_description2: model.ua_desc_description2,
            eng_desc_description2: model.eng_desc_description2,
            rus_desc_description2: model.rus_desc_description2,

            ua_desc_description3: model.ua_desc_description3,
            eng_desc_description3: model.eng_desc_description3,
            rus_desc_description3: model.rus_desc_description3,

            ua_desc_description4: model.ua_desc_description4,
            eng_desc_description4: model.eng_desc_description4,
            rus_desc_description4: model.rus_desc_description4,

            ua_desc_description5: model.ua_desc_description5,
            eng_desc_description5: model.eng_desc_description5,
            rus_desc_description5: model.rus_desc_description5,

            raw_id1: model.raw_id1,
            raw_id2: model.raw_id2,
            raw_id3: model.raw_id3,

            photo_gallery1: model.photo_gallery1,
            photo_gallery2: model.photo_gallery2,
            photo_gallery3: model.photo_gallery3,
            photo_gallery4: model.photo_gallery4,
            photo_gallery5: model.photo_gallery5,
            photo_gallery6: model.photo_gallery6,
            photo_gallery7: model.photo_gallery7,
            photo_gallery8: model.photo_gallery8,

            video_url: model.video_url,

            rating: model.rating,

            pdf: model.pdf,

            createdAt: model.createdAt,
            updatedAt: model.updatedAt
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
        const querry = `${this.techUrl}?page=${page}&pageSize=${pageSize}&status=${status}&lang=${lang}&is_publish=${isPublish}`;
        return this.http.get(querry).pipe(map(data => data));
    }

    /*створення запису*/
    createTech(tech: TechnicalCharacteristics) {
        return this.http.post(this.techUrl, tech, httpOptions).pipe(map(data => data));
    }

    /*оновлення (редагування) запису */
    updateTech(id: number, tech: TechnicalCharacteristics) {
        return this.http.put(this.techUrl + '/update/' + id, tech);
    }

    /*видалення запису  по id   (адмін панель) */
    deleteTech(id: number) {
        return this.http.delete(this.techUrl + '/' + id);
    }

    //тест
    getOne(id: number) {
        return this.http.get(this.techUrl + '/one/' + id);
    }

    
}
