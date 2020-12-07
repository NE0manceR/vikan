import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MailSendService } from '../../services/client-services/mail-send.service';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.scss']
})
export class FeedbackModalComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<FeedbackModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private mailSendService: MailSendService) { }

  ngOnInit(): void {

  }
  onNoClick(): void {
    this.dialogRef.close();// в середину closе можна передати обєкт, який повернети туди, звідки її викликали
  }
  submitedForm = false;
  sendData() {
    this.submitedForm = true;
    if (this.name && this.phone) {
      this.mailSendService.createServiceForm({
        name: this.name,
        phone: this.phone
      }).subscribe(res => {
        this.dialogRef.close({
          name: this.name,
          phone: this.phone
        });
      })
    }



  }

  name = '';
  phone = '';
}
