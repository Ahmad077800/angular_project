import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // تأكد من وجود ملف "app.routes.ts" مع تعريفات التوجيه

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // قم بتوفير التوجيه
    HttpClientModule
  ]
});