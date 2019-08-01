import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from './service/auth.service';
import { CustomMaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListClientComponent } from './list-client/list-client.component';
import { ClientService } from './service/client.service';
import { AddClientComponent } from './add-client/add-client.component';
import { KpiClientComponent } from './kpi-client/kpi-client.component';
import { ShowProjectionComponent } from './show-projection/show-projection.component';
import { UppercaseDirective } from './uppercase.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListClientComponent,
    AddClientComponent,
    KpiClientComponent,
    ShowProjectionComponent,
    UppercaseDirective
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    CustomMaterialModule
  ],
  providers: [AuthenticationService, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
