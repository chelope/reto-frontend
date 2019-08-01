import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';
import { Kpi } from '../model/kpi.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-kpi-client',
  templateUrl: './kpi-client.component.html',
  styleUrls: ['./kpi-client.component.css']
})
export class KpiClientComponent implements OnInit {

  kpis: Kpi[];

  constructor(private formBuilder: FormBuilder,private router: Router, private clientService: ClientService) { }


  ngOnInit() {
    this.clientService.kpiClient()
    .subscribe(data => {
      this.kpis = data;
    })
  }

  return() {
    this.router.navigate(['list-client']);
  }

}
