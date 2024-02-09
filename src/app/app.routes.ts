import { Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [
    {path: 'product',component:ProductComponent},
    {path: 'product/:id',component:SingleComponent},
    {path: 'home',component:HomeComponent},
    {path: 'login',component:LoginComponent},
    {path: 'contact',component:ContactComponent},
    
    {path: '**',component:NotfoundComponent}

];
