import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormControl } from "@angular/forms";
import { environment } from '../../../../../environments/environment';
import { TechnicalCharacteristics } from '../../../../models/admin-models/model.technicalCharacteristics';
import { TechnicalCharacteristicsService } from '../../../../services/admin-services/technicalCharacteristics.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-technical-characteristics',
  templateUrl: './view-technical-characteristics.component.html',
  styleUrls: ['./view-technical-characteristics.component.scss']
})
export class ViewTechnicalCharacteristicsComponent implements OnInit {

  myForm: FormGroup;
  urlForVideo;
  urlToServer = "";
  PDF: any;
  ImgPhoto: any;
  ImgTech: any;
  photoGallery1: any;
  photoGallery2: any;
  photoGallery3: any;
  photoGallery4: any;
  photoGallery5: any;
  photoGallery6: any;
  photoGallery7: any;
  photoGallery8: any;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data,
    public dialogRef: MatDialogRef<ViewTechnicalCharacteristicsComponent>,
    public dataService: TechnicalCharacteristicsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.reactiveForm(this.data.model);
    this.urlToServer = environment.url;
    this.urlForVideo = this.data.model.video_url;
  }

  transformToSafeUrl(url) {
    if(url) {
      let url_code = url.split('/');
      url_code = url_code[url_code.length-1].replace('watch?v=','');
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${url_code}`);
    } else {
      return '';
    }
  
  }

  reactiveForm(model: TechnicalCharacteristics) {
    this.myForm = new FormGroup({
     
      ua_type_desc: new FormControl(model.ua_type_desc),
      eng_type_desc: new FormControl(model.eng_type_desc),
      rus_type_desc: new FormControl(model.rus_type_desc),

      name: new FormControl(model.name),

      ua_description: new FormControl(model.ua_description),
      eng_description: new FormControl(model.eng_description),
      rus_description: new FormControl(model.rus_description),

      photo: new FormControl(model.photo),
      tech_photo: new FormControl(model.tech_photo),

      ua_type_machine: new FormControl(model.ua_type_machine),
      eng_type_machine: new FormControl(model.eng_type_machine),
      rus_type_machine: new FormControl(model.rus_type_machine),

      ua_productivity: new FormControl(model.ua_productivity),
      eng_productivity: new FormControl(model.eng_productivity),
      rus_productivity: new FormControl(model.rus_productivity),

      motor: new FormControl(model.motor),
      power: new FormControl(model.power),
      idle_speed: new FormControl(model.idle_speed),
      working_speed: new FormControl(model.working_speed),

      ua_type_node: new FormControl(model.ua_type_node),
      eng_type_node: new FormControl(model.eng_type_node),
      rus_type_node: new FormControl(model.rus_type_node),

      automatic_no_material: new FormControl(model.automatic_no_material),
      shaft_diameter: new FormControl(model.shaft_diameter),
      lenght_work: new FormControl(model.lenght_work),
      height_work: new FormControl(model.height_work),
      width_work: new FormControl(model.width_work),
      lenght_transport: new FormControl(model.lenght_transport),
      height_transport: new FormControl(model.height_transport),
      width_transport: new FormControl(model.width_transport),
      volume_hydraulic: new FormControl(model.volume_hydraulic),
      max_pressure_hydraulic: new FormControl(model.max_pressure_hydraulic),
      size_sieve_holes: new FormControl(model.size_sieve_holes),
      size_org_fraction: new FormControl(model.size_org_fraction),
      interest_fraction_out: new FormControl(model.interest_fraction_out),
      product_mass: new FormControl(model.product_mass),


      ua_desc_title1: new FormControl(model.ua_desc_title1),
      eng_desc_title1: new FormControl(model.eng_desc_title1),
      rus_desc_title1: new FormControl(model.rus_desc_title1),

      ua_desc_title2: new FormControl(model.ua_desc_title2),
      eng_desc_title2: new FormControl(model.eng_desc_title2),
      rus_desc_title2: new FormControl(model.rus_desc_title2),

      ua_desc_title3: new FormControl(model.ua_desc_title3),
      eng_desc_title3: new FormControl(model.eng_desc_title3),
      rus_desc_title3: new FormControl(model.rus_desc_title3),

      
      ua_desc_title4: new FormControl(model.ua_desc_title4),
      eng_desc_title4: new FormControl(model.eng_desc_title4),
      rus_desc_title4: new FormControl(model.rus_desc_title4),

      ua_desc_title5: new FormControl(model.ua_desc_title5),
      eng_desc_title5: new FormControl(model.eng_desc_title5),
      rus_desc_title5: new FormControl(model.rus_desc_title5),

      ua_desc_under_title1: new FormControl(model.ua_desc_under_title1),
      eng_desc_under_title1: new FormControl(model.eng_desc_under_title1),
      rus_desc_under_title1: new FormControl(model.rus_desc_under_title1),

      ua_desc_under_title2: new FormControl(model.ua_desc_under_title2),
      eng_desc_under_title2: new FormControl(model.eng_desc_under_title2),
      rus_desc_under_title2: new FormControl(model.rus_desc_under_title2),

      ua_desc_under_title3: new FormControl(model.ua_desc_under_title3),
      eng_desc_under_title3: new FormControl(model.eng_desc_under_title3),
      rus_desc_under_title3: new FormControl(model.rus_desc_under_title3),

      ua_desc_under_title4: new FormControl(model.ua_desc_under_title4),
      eng_desc_under_title4: new FormControl(model.eng_desc_under_title4),
      rus_desc_under_title4: new FormControl(model.rus_desc_under_title4),

      ua_desc_under_title5: new FormControl(model.ua_desc_under_title5),
      eng_desc_under_title5: new FormControl(model.eng_desc_under_title5),
      rus_desc_under_title5: new FormControl(model.rus_desc_under_title5),

      ua_desc_description1: new FormControl(model.ua_desc_description1),
      eng_desc_description1: new FormControl(model.eng_desc_description1),
      rus_desc_description1: new FormControl(model.rus_desc_description1),

      ua_desc_description2: new FormControl(model.ua_desc_description2),
      eng_desc_description2: new FormControl(model.eng_desc_description2),
      rus_desc_description2: new FormControl(model.rus_desc_description2),

      ua_desc_description3: new FormControl(model.ua_desc_description3),
      eng_desc_description3: new FormControl(model.eng_desc_description3),
      rus_desc_description3: new FormControl(model.rus_desc_description3),

      ua_desc_description4: new FormControl(model.ua_desc_description4),
      eng_desc_description4: new FormControl(model.eng_desc_description4),
      rus_desc_description4: new FormControl(model.rus_desc_description4),

      ua_desc_description5: new FormControl(model.ua_desc_description5),
      eng_desc_description5: new FormControl(model.eng_desc_description5),
      rus_desc_description5: new FormControl(model.rus_desc_description5),

      raw_id1: new FormControl(model.raw_id1),
      raw_id2: new FormControl(model.raw_id2),
      raw_id3: new FormControl(model.raw_id3),

      photo_gallery1: new FormControl(model.photo_gallery1),
      photo_gallery2: new FormControl(model.photo_gallery2),
      photo_gallery3: new FormControl(model.photo_gallery3),
      photo_gallery4: new FormControl(model.photo_gallery4),
      photo_gallery5: new FormControl(model.photo_gallery5),
      photo_gallery6: new FormControl(model.photo_gallery6),
      photo_gallery7: new FormControl(model.photo_gallery7),
      photo_gallery8: new FormControl(model.photo_gallery8),

      video_url: new FormControl(model.video_url),
      rating: new FormControl(model.rating),

      pdf: new FormControl(model.pdf),
      
      
    });
    this.ImgPhoto =
      this.data && this.data.model ? this.data.model.photo : '';
    this.ImgTech =
      this.data && this.data.model ? this.data.model.tech_photo : '';
    this.photoGallery1 =
      this.data && this.data.model ? this.data.model.photo_gallery1 : '';
    this.photoGallery2 =
      this.data && this.data.model ? this.data.model.photo_gallery2 : '';
    this.photoGallery3 =
      this.data && this.data.model ? this.data.model.photo_gallery3 : '';
    this.photoGallery4 =
      this.data && this.data.model ? this.data.model.photo_gallery4 : '';
    this.photoGallery5 =
      this.data && this.data.model ? this.data.model.photo_gallery5 : '';
    this.photoGallery6 =
      this.data && this.data.model ? this.data.model.photo_gallery6 : '';
    this.photoGallery7 =
      this.data && this.data.model ? this.data.model.photo_gallery7 : '';
    this.photoGallery8 =
      this.data && this.data.model ? this.data.model.photo_gallery8 : '';
    this.PDF = this.data && this.data.model ? this.data.model.pdf : '';
    
  }

  Close(): void {
    this.dialogRef.close();
  }

}
