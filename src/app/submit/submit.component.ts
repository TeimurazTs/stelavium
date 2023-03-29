import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent {

  name = new FormControl('', [Validators.required, Validators.min(2)])
  lastname = new FormControl('', [Validators.required, Validators.min(2)])
  email = new FormControl('', [Validators.required, Validators.email])
  phone = new FormControl('', [Validators.required])
  bio = new FormControl('', [Validators.required, Validators.min(10)])
  select = new FormControl('', [Validators.required])

  submitForm = new FormGroup({
    name: this.name,
    lastname: this.lastname,
    email: this.email,
    phone: this.phone,
    bio: this.bio,
    select: this.select
  })
}
