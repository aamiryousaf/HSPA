import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { ProppertyDetailComponent } from './property/propperty-detail/propperty-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestPropertyComponent } from './property/Test-property/Test-property.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserServiceService } from './services/user-service.service';
import { AlertyfyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';

const appRoutes : Routes =[
  { path :'', component:PropertyListComponent },
  { path:'rent-property',component:PropertyListComponent },
  { path:'property-detail/:id',component:ProppertyDetailComponent },
  { path:'user/login',component:UserLoginComponent },
  { path:'user/register',component:UserRegisterComponent },
  /* this is use when user put wrong path */
  { path:'**',component:PropertyListComponent },
  /* this is use when user put wrong path */
  { path:'add-property',component:AddPropertyComponent },
  { path:'test-property',component:TestPropertyComponent }

]


@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    ProppertyDetailComponent,
    TestPropertyComponent,
    UserLoginComponent,
    UserRegisterComponent

   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule
  ],
  providers: [
    HousingService,
    UserServiceService,
    AlertyfyService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
