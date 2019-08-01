import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client.model';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients: Client[];

  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients()
      .subscribe(data => {
        this.clients = data;
      })
  }

  addClient(): void {
    this.router.navigate(['add-client']);
  };

  kpiClient(): void {
    this.router.navigate(['kpi-client']);
  };

  projectionClient(): void {
    this.router.navigate(['show-projection']);
  };
  
  

}
