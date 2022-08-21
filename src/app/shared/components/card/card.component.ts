import { Component, Input, OnInit } from '@angular/core';
import { cardItems } from '../../services/cardItems';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  countries: Partial<cardItems>[] = [];

  @Input('country') country!: cardItems;
  @Input('show-actions') showActions = true;

  constructor() {}

  ngOnInit(): void {}
}
