import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ContactComponent } from './contact/contact.component';
import { TestFormComponent } from './test-form/test-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'test', component: TestComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'test-form', component: TestFormComponent }, 
];
