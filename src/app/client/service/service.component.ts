import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MailSendService } from '../../services/client-services/mail-send.service';
import { NotificationService } from 'carbon-components-angular';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  providers: [NotificationService]
})
export class ServiceComponent implements OnInit {
  serviceForm: FormGroup;
  constructor(private mailSendService: MailSendService, protected notificationService: NotificationService) { }


	showToast() {
    const notRef = this.notificationService.showNotification({
			type: "success",
			title: "Форма відправлена",
			message: "Наш менеджер найближчим часом з вами зв'яжеться",
			target: ".notification-container"
    });
  setTimeout(() => {
    this.notificationService.close(notRef);
  }, 10000);
	}

  ngOnInit(): void {
    this.createFrom();
  }

  invalidText = "це поле є обов'зковим";

  submitedForm = false;
  createFrom() {
    this.serviceForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      theme: new FormControl('', [Validators.required]),
      massage: new FormControl('', [Validators.required, Validators.minLength(3)]),
      country: new FormControl(''),
      street: new FormControl(''),
      company: new FormControl(''),
      city: new FormControl(''),
      post: new FormControl('')
    });
  }

  sendForm(e) {

    e.preventDefault();
    this.submitedForm = true;
    if(this.serviceForm.valid) {
      this.mailSendService.createBigServiceForm(this.serviceForm.value).subscribe(res => {
        this.serviceForm.reset();
        this.showToast();
      })
    }

   
  }

}
