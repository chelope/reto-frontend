import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../service/client.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  @Input() birthDate: string;
  constructor(private formBuilder: FormBuilder,private router: Router, private clientService: ClientService) { }

  addForm: FormGroup;
  
  onSubmit() {
    if (this.addForm.invalid) {
      return;
    }
    var newClient = this.addForm.value;
    newClient.birthDate = new Date(newClient.birthDate).getTime() / 1000;
    this.clientService.createClient(newClient)
      .subscribe( data => {
        this.router.navigate(['list-client']);
      });
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({      
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required]
    });
  }
}

