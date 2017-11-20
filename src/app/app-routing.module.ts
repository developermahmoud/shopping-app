import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }      from './components/home/home.component';
import { AboutComponent }      from './components/about/about.component';
import { LoginComponent }      from './components/login/login.component';
import { RegisterComponent }      from './components/register/register.component';
import { NotFoundComponent }      from './components/not-found/not-found.component';
import { LogoutComponent }      from './components/logout/logout.component';
import { CategoryComponent } from './components/categories/category/category.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'categories', component: CategoryComponent },

  
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
