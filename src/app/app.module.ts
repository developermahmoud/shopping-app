import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { LogoutComponent } from './components/logout/logout.component';
import { AllCategoryComponent } from './components/categories/all-category/all-category.component';
import { CreateCategoryComponent } from './components/categories/create-category/create-category.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { CategoryService } from './services/category.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    NotFoundComponent,
    LogoutComponent,
    AllCategoryComponent,
    CreateCategoryComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, AuthService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
