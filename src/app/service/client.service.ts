import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Client} from "../model/client.model";

import { of } from 'rxjs';
import { Kpi } from '../model/kpi.model';


@Injectable()
export class ClientService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://promart-backend-gtzpi2ipla-uc.a.run.app/clientes';

  getClients() {
   /*let fakeClients = [{firstName: 'Client1', lastName: 'Client1', birthDate: 307929600, age: 42},
     {firstName: 'Client2', lastName: 'Client2', birthDate: 307929600, age: 42},
     {firstName: 'Client3', lastName: 'Client3', birthDate: 307929600, age: 42},
     {firstName: 'Client4', lastName: 'Client1', birthDate: 307929600, age: 42},
   ];
   return of(fakeClients);*/
   return this.http.get<Client[]>(this.baseUrl + '/listclientes');
  }

  createClient(client: Client) {
    return this.http.post(this.baseUrl+ '/creacliente', client);
  }

  kpiClient() {
    return this.http.get<Kpi[]>(this.baseUrl + '/kpiclientes');
  }

}
