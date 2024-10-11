import { Component } from '@angular/core';
import { NewRequestComponent } from "../new-request/new-request.component";
import { HistoryComponent } from "../history/history.component";
import { PendingRequestsComponent } from "../pending-requests/pending-requests.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NewRequestComponent, HistoryComponent, PendingRequestsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
