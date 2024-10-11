import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-cards',
  standalone: true,
  imports: [],
  templateUrl: './two-cards.component.html',
  styleUrls: ['./two-cards.component.css']
})
export class TwoCardsComponent {
  @Input() vacationRequests: number = 0;
  @Input() otherRequests: number = 0;
}
