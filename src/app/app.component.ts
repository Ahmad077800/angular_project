import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from "./profile/profile.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, HomeComponent, HttpClientModule, HeaderComponent, ProfileComponent], // تأكد من إدراج HttpClientModule هنا
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // لاحظ أن "styleUrls" يجب أن تكون بصيغة الجمع
})
export class AppComponent {
  title = 'second_ng_progect';
}
