import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.scss']
})
export class ProcessingComponent implements OnInit {

  @Input() imgUrl
  @Input() name



  constructor() { }

  ngOnInit() {
  }

}
