import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile-card',
  standalone: true,
  templateUrl: './employee-details-home.component.html',
  styleUrls: ['./employee-details-home.component.css']
})
export class EmployeeDetailsHomeComponent {
  @Input() name: string = '';
  @Input() position: string = '';
  @Input() reportingTo: string = '';
  @Input() corporateLevel: string = '';
  @Input() imageUrl: string = '';
}
