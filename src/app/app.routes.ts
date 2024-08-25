import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DocumentosComponent } from './components/documentos/documentos.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'homepage', component: HomepageComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'documentos', component: DocumentosComponent},
    
];
