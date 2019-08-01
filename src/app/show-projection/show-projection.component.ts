import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client.model';
import { Router } from '@angular/router';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-show-projection',
  templateUrl: './show-projection.component.html',
  styleUrls: ['./show-projection.component.css']
})
export class ShowProjectionComponent implements OnInit {

  clients: Client[];

  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients()
      .subscribe(data => {
        this.clients = data;
      })
  }

  return() {
    this.router.navigate(['list-client']);
  }

}
