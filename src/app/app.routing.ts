
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { ListClientComponent } from './list-client/list-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { KpiClientComponent } from './kpi-client/kpi-client.component';
import { ShowProjectionComponent } from './show-projection/show-projection.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'list-client', component: ListClientComponent },
    { path: 'add-client', component: AddClientComponent },
    { path: 'kpi-client', component: KpiClientComponent },
    { path: 'show-projection', component: ShowProjectionComponent },
    {path : '', component : LoginComponent}
  ];
  
  export const routing = RouterModule.forRoot(routes);