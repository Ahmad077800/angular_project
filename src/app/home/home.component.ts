import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { EmployeeDetailsHomeComponent } from "../employee-details-home/employee-details-home.component";
import { TwoCardsComponent } from "../two-cards/two-cards.component";
import { SliderComponent } from "../slider/slider.component";
import { VacationRequestsComponent } from '../vacation-requests/vacation-requests.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, EmployeeDetailsHomeComponent, TwoCardsComponent, SliderComponent,VacationRequestsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
