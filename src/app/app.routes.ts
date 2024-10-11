import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AllVacationRequestsComponent } from './a-ll-vacation-requests/a-ll-vacation-requests.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'aLL_vacation_requests', component: AllVacationRequestsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
];
