import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'production-card',
  templateUrl: './production-card.component.html',
  styleUrls: ['./production-card.component.scss']
})
export class ProductionCardComponent implements OnInit {

  @Input() url;
  @Input() cardName;
  @Input() status = true;
  @Input() routLink
  cardClass = "card-wrap"
  constructor() { }

  ngOnInit() {
  }

}
