import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: "home", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "catalog", component: CatalogComponent},
    {path: "detail", component: DetailComponent},
    {path: "register", component: RegisterComponent},

];
