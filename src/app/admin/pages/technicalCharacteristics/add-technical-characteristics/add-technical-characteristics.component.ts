import { Component, OnInit, Inject, Input } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { FileUploader } from 'ng2-file-upload';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UploadFileService } from '../../../../services/admin-services/upload-file.service';
import { TokenStorageService } from '../../../../auth/token-storage.service';
import { environment } from '../../../../../environments/environment';
import { TechnicalCharacteristics } from '../../../../models/admin-models/model.technicalCharacteristics';
import { TechnicalCharacteristicsService } from '../../../../services/admin-services/technicalCharacteristics.service';
import { RawService } from '../../../../services/admin-services/raw.service';
@Component({
  selector: 'app-add-technical-characteristics',
  templateUrl: './add-technical-characteristics.component.html',
  styleUrls: ['./add-technical-characteristics.component.scss'],
})
export class AddTechnicalCharacteristicsComponent implements OnInit {
  fileUploads: Observable<string[]>;

  link;
  grey;
  blue;
  linkText;
  index = 0;

  uploader: FileUploader;
  myForm: FormGroup;
  urlToServer = '';
  submittedF = false;
  @Input() fileUpload: string;
  event: any;

  PDF: any;
  Rating: any;
  photoGallery1: any;
  photoGallery2: any;
  photoGallery3: any;
  photoGallery4: any;
  photoGallery5: any;
  photoGallery6: any;
  photoGallery7: any;
  photoGallery8: any;

  ImgPhoto: any;
  fileDataPhoto: File;

  ImgTech: any;
  previewPhotoImg;

  fileDataTech: File;
  previewTechImg;

  fileDataG1: File;
  previewPhotoG1;

  fileDataG2: File;
  previewPhotoG2;

  fileDataG3: File;
  previewPhotoG3;

  fileDataG4: File;
  previewPhotoG4;

  fileDataG5: File;
  previewPhotoG5;

  fileDataG6: File;
  previewPhotoG6;

  fileDataG7: File;
  previewPhotoG7;

  fileDataG8: File;
  previewPhotoG8;

  fileDataPDF: File;
  previewPDFile;

  rawList: any;


  constructor(
    private uploadService: UploadFileService,
    public dialogRef: MatDialogRef<AddTechnicalCharacteristicsComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dataService: TechnicalCharacteristicsService,
    public rawService: RawService,
    private tokenService: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.reactiveForm();
    this.getRaw();
    this.urlToServer = environment.url;
  }

  getRaw() {
    this.rawService.getAll().subscribe((res: any) => {
      this.rawList = res.data;
    });
  }

  changeRaw(e) {
    console.log(e.target.value);
  }

  reactiveForm() {

    this.myForm = new FormGroup({
      id: new FormControl(
        this.data && this.data.model ? this.data.model.id : null
      ),
      is_publish: new FormControl(
        this.data && this.data.model ? this.data.model.is_publish : null

      ),

      ua_type_desc: new FormControl(
        this.data && this.data.model ? this.data.model.ua_type_desc : null,
        [Validators.required]
      ),
      eng_type_desc: new FormControl(
        this.data && this.data.model ? this.data.model.eng_type_desc : null,
        [Validators.required]
      ),
      rus_type_desc: new FormControl(
        this.data && this.data.model ? this.data.model.rus_type_desc : null,
        [Validators.required]
      ),

      name: new FormControl(
        this.data && this.data.model ? this.data.model.name : null,
        [Validators.required]
      ),

      ua_description: new FormControl(
        this.data && this.data.model ? this.data.model.ua_description : null,
        [Validators.required]
      ),
      eng_description: new FormControl(
        this.data && this.data.model ? this.data.model.eng_description : null,
        [Validators.required]
      ),
      rus_description: new FormControl(
        this.data && this.data.model ? this.data.model.rus_description : null,
        [Validators.required]
      ),

      photo: new FormControl(
        this.data && this.data.model ? this.data.model.photo : null
      ),
      tech_photo: new FormControl(
        this.data && this.data.model ? this.data.model.tech_photo : null
      ),

      ua_type_machine: new FormControl(
        this.data && this.data.model ? this.data.model.ua_type_machine : null,
        [Validators.required]
      ),
      eng_type_machine: new FormControl(
        this.data && this.data.model ? this.data.model.eng_type_machine : null,
        [Validators.required]
      ),
      rus_type_machine: new FormControl(
        this.data && this.data.model ? this.data.model.rus_type_machine : null,
        [Validators.required]
      ),

      ua_productivity: new FormControl(
        this.data && this.data.model ? this.data.model.ua_productivity : null,
        [Validators.required]
      ),
      eng_productivity: new FormControl(
        this.data && this.data.model ? this.data.model.eng_productivity : null,
        [Validators.required]
      ),
      rus_productivity: new FormControl(
        this.data && this.data.model ? this.data.model.rus_productivity : null,
        [Validators.required]
      ),

      motor: new FormControl(
        this.data && this.data.model ? this.data.model.motor : null,
        [Validators.required]
      ),
      power: new FormControl(
        this.data && this.data.model ? this.data.model.power : null,
        [Validators.required]
      ),
      idle_speed: new FormControl(
        this.data && this.data.model ? this.data.model.idle_speed : null,
        [Validators.required]
      ),
      working_speed: new FormControl(
        this.data && this.data.model ? this.data.model.working_speed : null,
        [Validators.required]
      ),

      ua_type_node: new FormControl(
        this.data && this.data.model ? this.data.model.ua_type_node : null,
        [Validators.required]
      ),
      eng_type_node: new FormControl(
        this.data && this.data.model ? this.data.model.eng_type_node : null,
        [Validators.required]
      ),
      rus_type_node: new FormControl(
        this.data && this.data.model ? this.data.model.rus_type_node : null,
        [Validators.required]
      ),

      automatic_no_material: new FormControl(
        this.data && this.data.model
          ? this.data.model.automatic_no_material
          : null,
        [Validators.required]
      ),
      shaft_diameter: new FormControl(
        this.data && this.data.model ? this.data.model.shaft_diameter : null,
        [Validators.required]
      ),


      lenght_work: new FormControl(
        this.data && this.data.model ? this.data.model.lenght_work : null,
        [Validators.required]
      ),
      height_work: new FormControl(
        this.data && this.data.model ? this.data.model.height_work : null,
        [Validators.required]
      ),
      width_work: new FormControl(
        this.data && this.data.model ? this.data.model.width_work : null,
        [Validators.required]
      ),


      lenght_transport: new FormControl(
        this.data && this.data.model ? this.data.model.lenght_transport : null,
        [Validators.required]
      ),
      height_transport: new FormControl(
        this.data && this.data.model ? this.data.model.height_transport : null,
        [Validators.required]
      ),
      width_transport: new FormControl(
        this.data && this.data.model ? this.data.model.width_transport : null,
        [Validators.required]
      ),

      volume_hydraulic: new FormControl(
        this.data && this.data.model ? this.data.model.volume_hydraulic : null,
        [Validators.required]
      ),

      max_pressure_hydraulic: new FormControl(
        this.data && this.data.model
          ? this.data.model.max_pressure_hydraulic
          : null,
        [Validators.required]
      ),

      size_sieve_holes: new FormControl(
        this.data && this.data.model ? this.data.model.size_sieve_holes : null,
        [Validators.required]
      ),
      size_org_fraction: new FormControl(
        this.data && this.data.model ? this.data.model.size_org_fraction : null,
        [Validators.required]
      ),
      interest_fraction_out: new FormControl(
        this.data && this.data.model
          ? this.data.model.interest_fraction_out
          : null,
        [Validators.required]
      ),
      product_mass: new FormControl(
        this.data && this.data.model ? this.data.model.product_mass : null,
        [Validators.required]
      ),

      ua_desc_title1: new FormControl(
        this.data && this.data.model ? this.data.model.ua_desc_title1 : null,
        [Validators.required]
      ),
      eng_desc_title1: new FormControl(
        this.data && this.data.model ? this.data.model.eng_desc_title1 : null,
        [Validators.required]
      ),
      rus_desc_title1: new FormControl(
        this.data && this.data.model ? this.data.model.rus_desc_title1 : null,
        [Validators.required]
      ),

      ua_desc_title2: new FormControl(
        this.data && this.data.model ? this.data.model.ua_desc_title2 : null,
        [Validators.required]
      ),
      eng_desc_title2: new FormControl(
        this.data && this.data.model ? this.data.model.eng_desc_title2 : null,
        [Validators.required]
      ),
      rus_desc_title2: new FormControl(
        this.data && this.data.model ? this.data.model.rus_desc_title2 : null,
        [Validators.required]
      ),

      ua_desc_title3: new FormControl(
        this.data && this.data.model ? this.data.model.ua_desc_title3 : null,
        [Validators.required]
      ),
      eng_desc_title3: new FormControl(
        this.data && this.data.model ? this.data.model.eng_desc_title3 : null,
        [Validators.required]
      ),
      rus_desc_title3: new FormControl(
        this.data && this.data.model ? this.data.model.rus_desc_title3 : null,
        [Validators.required]
      ),

      ua_desc_title4: new FormControl(
        this.data && this.data.model ? this.data.model.ua_desc_title4 : null,
        [Validators.required]
      ),
      eng_desc_title4: new FormControl(
        this.data && this.data.model ? this.data.model.eng_desc_title4 : null,
        [Validators.required]
      ),
      rus_desc_title4: new FormControl(
        this.data && this.data.model ? this.data.model.rus_desc_title4 : null,
        [Validators.required]
      ),

      ua_desc_title5: new FormControl(
        this.data && this.data.model ? this.data.model.ua_desc_title5 : null,
        [Validators.required]
      ),
      eng_desc_title5: new FormControl(
        this.data && this.data.model ? this.data.model.eng_desc_title5 : null,
        [Validators.required]
      ),
      rus_desc_title5: new FormControl(
        this.data && this.data.model ? this.data.model.rus_desc_title5 : null,
        [Validators.required]
      ),

      ua_desc_under_title1: new FormControl(
        this.data && this.data.model
          ? this.data.model.ua_desc_under_title1
          : null,
        [Validators.required]
      ),
      eng_desc_under_title1: new FormControl(
        this.data && this.data.model
          ? this.data.model.eng_desc_under_title1
          : null,
        [Validators.required]
      ),
      rus_desc_under_title1: new FormControl(
        this.data && this.data.model
          ? this.data.model.rus_desc_under_title1
          : null,
        [Validators.required]
      ),

      ua_desc_under_title2: new FormControl(
        this.data && this.data.model
          ? this.data.model.ua_desc_under_title2
          : null,
        [Validators.required]
      ),
      eng_desc_under_title2: new FormControl(
        this.data && this.data.model
          ? this.data.model.eng_desc_under_title2
          : null,
        [Validators.required]
      ),
      rus_desc_under_title2: new FormControl(
        this.data && this.data.model
          ? this.data.model.rus_desc_under_title2
          : null,
        [Validators.required]
      ),

      ua_desc_under_title3: new FormControl(
        this.data && this.data.model
          ? this.data.model.ua_desc_under_title3
          : null,
        [Validators.required]
      ),
      eng_desc_under_title3: new FormControl(
        this.data && this.data.model
          ? this.data.model.eng_desc_under_title3
          : null,
        [Validators.required]
      ),
      rus_desc_under_title3: new FormControl(
        this.data && this.data.model
          ? this.data.model.rus_desc_under_title3
          : null,
        [Validators.required]
      ),

      ua_desc_under_title4: new FormControl(
        this.data && this.data.model
          ? this.data.model.ua_desc_under_title4
          : null,
        [Validators.required]
      ),
      eng_desc_under_title4: new FormControl(
        this.data && this.data.model
          ? this.data.model.eng_desc_under_title4
          : null,
        [Validators.required]
      ),
      rus_desc_under_title4: new FormControl(
        this.data && this.data.model
          ? this.data.model.rus_desc_under_title4
          : null,
        [Validators.required]
      ),

      ua_desc_under_title5: new FormControl(
        this.data && this.data.model
          ? this.data.model.ua_desc_under_title5
          : null,
        [Validators.required]
      ),
      eng_desc_under_title5: new FormControl(
        this.data && this.data.model
          ? this.data.model.eng_desc_under_title5
          : null,
        [Validators.required]
      ),
      rus_desc_under_title5: new FormControl(
        this.data && this.data.model
          ? this.data.model.rus_desc_under_title5
          : null,
        [Validators.required]
      ),

      ua_desc_description1: new FormControl(
        this.data && this.data.model
          ? this.data.model.ua_desc_description1
          : null,
        [Validators.required]
      ),
      eng_desc_description1: new FormControl(
        this.data && this.data.model
          ? this.data.model.eng_desc_description1
          : null,
        [Validators.required]
      ),
      rus_desc_description1: new FormControl(
        this.data && this.data.model
          ? this.data.model.rus_desc_description1
          : null,
        [Validators.required]
      ),

      ua_desc_description2: new FormControl(
        this.data && this.data.model
          ? this.data.model.ua_desc_description2
          : null,
        [Validators.required]
      ),
      eng_desc_description2: new FormControl(
        this.data && this.data.model
          ? this.data.model.eng_desc_description2
          : null,
        [Validators.required]
      ),
      rus_desc_description2: new FormControl(
        this.data && this.data.model
          ? this.data.model.rus_desc_description2
          : null,
        [Validators.required]
      ),

      ua_desc_description3: new FormControl(
        this.data && this.data.model
          ? this.data.model.ua_desc_description3
          : null,
        [Validators.required]
      ),
      eng_desc_description3: new FormControl(
        this.data && this.data.model
          ? this.data.model.eng_desc_description3
          : null,
        [Validators.required]
      ),
      rus_desc_description3: new FormControl(
        this.data && this.data.model
          ? this.data.model.rus_desc_description3
          : null,
        [Validators.required]
      ),

      ua_desc_description4: new FormControl(
        this.data && this.data.model
          ? this.data.model.ua_desc_description4
          : null,
        [Validators.required]
      ),
      eng_desc_description4: new FormControl(
        this.data && this.data.model
          ? this.data.model.eng_desc_description4
          : null,
        [Validators.required]
      ),
      rus_desc_description4: new FormControl(
        this.data && this.data.model
          ? this.data.model.rus_desc_description4
          : null,
        [Validators.required]
      ),

      ua_desc_description5: new FormControl(
        this.data && this.data.model
          ? this.data.model.ua_desc_description5
          : null,
        [Validators.required]
      ),
      eng_desc_description5: new FormControl(
        this.data && this.data.model
          ? this.data.model.eng_desc_description5
          : null,
        [Validators.required]
      ),
      rus_desc_description5: new FormControl(
        this.data && this.data.model
          ? this.data.model.rus_desc_description5
          : null,
        [Validators.required]
      ),

      raw_id1: new FormControl(
        this.data && this.data.model ? this.data.model.raw_id1 : null,
        [Validators.required]
      ),
      raw_id2: new FormControl(
        this.data && this.data.model ? this.data.model.raw_id2 : null,
        [Validators.required]
      ),
      raw_id3: new FormControl(
        this.data && this.data.model ? this.data.model.raw_id3 : null,
        [Validators.required]
      ),

      photo_gallery1: new FormControl(
        this.data && this.data.model ? this.data.model.photo_gallery1 : null

      ),
      photo_gallery2: new FormControl(
        this.data && this.data.model ? this.data.model.photo_gallery2 : null

      ),
      photo_gallery3: new FormControl(
        this.data && this.data.model ? this.data.model.photo_gallery3 : null

      ),
      photo_gallery4: new FormControl(
        this.data && this.data.model ? this.data.model.photo_gallery4 : null

      ),
      photo_gallery5: new FormControl(
        this.data && this.data.model ? this.data.model.photo_gallery5 : null

      ),
      photo_gallery6: new FormControl(
        this.data && this.data.model ? this.data.model.photo_gallery6 : null

      ),
      photo_gallery7: new FormControl(
        this.data && this.data.model ? this.data.model.photo_gallery7 : null

      ),
      photo_gallery8: new FormControl(
        this.data && this.data.model ? this.data.model.photo_gallery8 : null

      ),

      video_url: new FormControl(
        this.data && this.data.model ? this.data.model.video_url : null

      ),
      rating: new FormControl(
        this.data && this.data.model ? this.data.model.rating : null,
        [Validators.required]
      ),

      pdf: new FormControl(
        this.data && this.data.model ? this.data.model.pdf : null

      ),
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
    this.Rating = this.data && this.data.model ? this.data.model.rating : '';

  }

  selectPhoto(event) {
    this.ImgPhoto = null;
    this.fileDataPhoto = event.target.files[0] as File;
    this.previewPhoto();
  }
  previewPhoto() {
    const readerI = new FileReader();
    readerI.readAsDataURL(this.fileDataPhoto);
    readerI.onload = (_event) => {
      this.previewPhotoImg = readerI.result;
    };
  }

  selectTech(event) {
    this.ImgTech = null;
    this.fileDataTech = event.target.files[0] as File;
    this.previewTech();
  }
  previewTech() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileDataTech);
    reader.onload = (_event) => {
      this.previewTechImg = reader.result;
    };
  }


  selectG1(event) {
    this.photoGallery1 = null;
    this.fileDataG1 = event.target.files[0] as File;
    this.previewG1();
  }
  previewG1() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileDataG1);
    reader.onload = (_event) => {
      this.previewPhotoG1 = reader.result;
    };
  }

  selectG2(event) {
    this.photoGallery2 = null;
    this.fileDataG2 = event.target.files[0] as File;
    this.previewG2();
  }
  previewG2() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileDataG2);
    reader.onload = (_event) => {
      this.previewPhotoG2 = reader.result;
    };
  }

  selectG3(event) {
    this.photoGallery3 = null;
    this.fileDataG3 = event.target.files[0] as File;
    this.previewG3();
  }
  previewG3() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileDataG3);
    reader.onload = (_event) => {
      this.previewPhotoG3 = reader.result;
    };
  }

  selectG4(event) {
    this.photoGallery4 = null;
    this.fileDataG4 = event.target.files[0] as File;
    this.previewG4();
  }
  previewG4() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileDataG4);
    reader.onload = (_event) => {
      this.previewPhotoG4 = reader.result;
    };
  }

  selectG5(event) {
    this.photoGallery5 = null;
    this.fileDataG5 = event.target.files[0] as File;
    this.previewG5();
  }
  previewG5() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileDataG5);
    reader.onload = (_event) => {
      this.previewPhotoG5 = reader.result;
    };
  }

  selectG6(event) {
    this.photoGallery6 = null;
    this.fileDataG6 = event.target.files[0] as File;
    this.previewG6();
  }
  previewG6() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileDataG6);
    reader.onload = (_event) => {
      this.previewPhotoG6 = reader.result;
    };
  }

  selectG7(event) {
    this.photoGallery7 = null;
    this.fileDataG7 = event.target.files[0] as File;
    this.previewG7();
  }
  previewG7() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileDataG7);
    reader.onload = (_event) => {
      this.previewPhotoG7 = reader.result;
    };
  }

  selectG8(event) {
    this.photoGallery8 = null;
    this.fileDataG8 = event.target.files[0] as File;
    this.previewG8();
  }
  previewG8() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileDataG8);
    reader.onload = (_event) => {
      this.previewPhotoG8 = reader.result;
    };
  }



  selectPDF(event) {
    this.PDF = null;
    this.fileDataPDF = event.target.files[0] as File;
    this.previewPDF();
  }
  previewPDF() {
    const readerPDF = new FileReader();
    readerPDF.readAsDataURL(this.fileDataPDF);
    readerPDF.onload = (_event) => {
      this.previewPDFile = this.fileDataPDF.name;
    };
  }

  formGet(formName) {
    return this.myForm.get(formName);
  }

  public confirmAdd() {
    if (!this.myForm.valid) {
      this.submittedF = true;
      return;
    }
    this.submittedF = false;
    const form = this.myForm.value;

    //створення нового models з новими фото
    if (
      this.fileDataPDF &&
      this.fileDataTech &&
      this.fileDataPhoto &&
      this.fileDataG1 &&
      this.fileDataG2 &&
      this.fileDataG3 &&
      this.fileDataG4 &&
      this.fileDataG5 &&
      this.fileDataG6 &&
      this.fileDataG7 &&
      this.fileDataG8 &&
      !form.id
    ) {
      this.uploadService.pushFileToStorage(this.fileDataPhoto, 1).subscribe((event: any) => {
        if (event['body']) {
          form.photo = event['body'];
          this.uploadService.pushFileToStorage(this.fileDataTech, 1).subscribe((event: any) => {
            if (event['body']) {
              form.tech_photo = event['body'];
              this.uploadService.pushFileToStorage(this.fileDataG1, 1).subscribe((event: any) => {
                if (event['body']) {
                  form.photo_gallery1 = event['body'];
                  this.uploadService.pushFileToStorage(this.fileDataG2, 1).subscribe((event: any) => {
                    if (event['body']) {
                      form.photo_gallery2 = event['body'];
                      this.uploadService.pushFileToStorage(this.fileDataG3, 1).subscribe((event: any) => {
                        if (event['body']) {
                          form.photo_gallery3 = event['body'];
                          this.uploadService.pushFileToStorage(this.fileDataG4, 1).subscribe((event: any) => {
                            if (event['body']) {
                              form.photo_gallery4 = event['body'];
                              this.uploadService.pushFileToStorage(this.fileDataG5, 1).subscribe((event: any) => {
                                if (event['body']) {
                                  form.photo_gallery5 = event['body'];
                                  this.uploadService.pushFileToStorage(this.fileDataG6, 1).subscribe((event: any) => {
                                    if (event['body']) {
                                      form.photo_gallery6 = event['body'];
                                      this.uploadService.pushFileToStorage(this.fileDataG7, 1).subscribe((event: any) => {
                                        if (event['body']) {
                                          form.photo_gallery7 = event['body'];
                                          this.uploadService.pushFileToStorage(this.fileDataG8, 1).subscribe((event: any) => {
                                            if (event['body']) {
                                              form.photo_gallery8 = event['body'];
                                              this.uploadService.pushFileToStorage(this.fileDataPDF).subscribe((event: any) => {
                                                if (this.previewPDFile) {
                                                  form.pdf = this.previewPDFile;
                                                  this.dataService.createTech(form).subscribe((res: any) => {
                                                    if (res.succes === true) { res.data; } const addSuccess = true;
                                                    this.dialogRef.close({ reload: addSuccess, });
                                                  });
                                                }//if                                    
                                              });
                                            }//if
                                          });
                                        }//if
                                      });
                                    }//if    
                                  });
                                }//if
                              });
                            }//if
                          });
                        }//if
                      });
                    }//if
                  });
                }//if
              });
            }//if
          });
        }//if
      });
    }//main if

    //редагування Tech з новими даними
    if (form.id) {
      if (this.fileDataPhoto) {
        this.uploadService.pushFileToStorage(this.fileDataPhoto, 1).subscribe((event: any) => {
          if (event['body']) {
            form.photo = event['body'];
            this.dataService.updateTech(form.id, form).subscribe((res: any) => {
              if (res.succes === true) { res.data; } const addSuccess = true;
              this.dialogRef.close({ reload: addSuccess });
            });
          }
        });
      }

      if (this.fileDataTech) {
        this.uploadService.pushFileToStorage(this.fileDataTech, 1).subscribe((event: any) => {
          if (event['body']) {
            form.tech_photo = event['body'];
            this.dataService.updateTech(form.id, form).subscribe((res: any) => {
              if (res.succes === true) { res.data; } const addSuccess = true;
              this.dialogRef.close({ reload: addSuccess });
            });
          }
        });
      }

      if (this.fileDataG1) {
        this.uploadService.pushFileToStorage(this.fileDataG1, 1).subscribe((event: any) => {
          if (event['body']) {
            form.photo_gallery1 = event['body'];
            this.dataService.updateTech(form.id, form).subscribe((res: any) => {
              if (res.succes === true) { res.data; } const addSuccess = true;
              this.dialogRef.close({ reload: addSuccess });
            });
          }
        });
      }

      if (this.fileDataG2) {
        this.uploadService.pushFileToStorage(this.fileDataG2, 1).subscribe((event: any) => {
          if (event['body']) {
            form.photo_gallery2 = event['body'];
            this.dataService.updateTech(form.id, form).subscribe((res: any) => {
              if (res.succes === true) { res.data; } const addSuccess = true;
              this.dialogRef.close({ reload: addSuccess });
            });
          }
        });
      }

      if (this.fileDataG3) {
        this.uploadService.pushFileToStorage(this.fileDataG3, 1).subscribe((event: any) => {
          if (event['body']) {
            form.photo_gallery3 = event['body'];
            this.dataService.updateTech(form.id, form).subscribe((res: any) => {
              if (res.succes === true) { res.data; } const addSuccess = true;
              this.dialogRef.close({ reload: addSuccess });
            });
          }
        });
      }

      if (this.fileDataG4) {
        this.uploadService.pushFileToStorage(this.fileDataG4, 1).subscribe((event: any) => {
          if (event['body']) {
            form.photo_gallery4 = event['body'];
            this.dataService.updateTech(form.id, form).subscribe((res: any) => {
              if (res.succes === true) { res.data; } const addSuccess = true;
              this.dialogRef.close({ reload: addSuccess });
            });
          }
        });
      }

      if (this.fileDataG5) {
        this.uploadService.pushFileToStorage(this.fileDataG5, 1).subscribe((event: any) => {
          if (event['body']) {
            form.photo_gallery5 = event['body'];
            this.dataService.updateTech(form.id, form).subscribe((res: any) => {
              if (res.succes === true) { res.data; } const addSuccess = true;
              this.dialogRef.close({ reload: addSuccess });
            });
          }
        });
      }

      if (this.fileDataG6) {
        this.uploadService.pushFileToStorage(this.fileDataG6, 1).subscribe((event: any) => {
          if (event['body']) {
            form.photo_gallery6 = event['body'];
            this.dataService.updateTech(form.id, form).subscribe((res: any) => {
              if (res.succes === true) { res.data; } const addSuccess = true;
              this.dialogRef.close({ reload: addSuccess });
            });
          }
        });
      }

      if (this.fileDataG7) {
        this.uploadService.pushFileToStorage(this.fileDataG7, 1).subscribe((event: any) => {
          if (event['body']) {
            form.photo_gallery7 = event['body'];
            this.dataService.updateTech(form.id, form).subscribe((res: any) => {
              if (res.succes === true) { res.data; } const addSuccess = true;
              this.dialogRef.close({ reload: addSuccess });
            });
          }
        });
      }

      if (this.fileDataG8) {
        this.uploadService.pushFileToStorage(this.fileDataG8, 1).subscribe((event: any) => {
          if (event['body']) {
            form.photo_gallery8 = event['body'];
            this.dataService.updateTech(form.id, form).subscribe((res: any) => {
              if (res.succes === true) { res.data; } const addSuccess = true;
              this.dialogRef.close({ reload: addSuccess });
            });
          }
        });
      }

      if (this.fileDataPDF) {
        this.uploadService.pushFileToStorage(this.fileDataPDF).subscribe((event: any) => {
          if (this.previewPDFile) {
            form.pdf = this.previewPDFile;
            this.dataService.updateTech(form.id, form).subscribe((res: any) => {
              if (res.succes === true) { res.data; } const addSuccess = true;
              this.dialogRef.close({ reload: addSuccess });
            });
          }
        });
      }

      if(
        !this.fileDataPDF ||
      !this.fileDataTech ||
      !this.fileDataPhoto ||
      !this.fileDataG1 ||
      !this.fileDataG2 ||
      !this.fileDataG3 ||
      !this.fileDataG4 ||
      !this.fileDataG5 ||
      !this.fileDataG6 ||
      !this.fileDataG7 ||
      !this.fileDataG8 
      ){
        this.dataService.updateTech(form.id, form).subscribe((res: any) => {
          if (res.succes === true) { res.data; } const addSuccess = true;
          this.dialogRef.close({ reload: addSuccess });
        });
      }

      
    }//main if

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
