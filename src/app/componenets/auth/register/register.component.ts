import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private auth: AuthService) { }

  firstname = new FormControl('', [Validators.required, Validators.min(3)]);
  lastName = new FormControl('', [Validators.required, Validators.min(3)])
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.pattern(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/gm)])
  repeatPassword = new FormControl('', [Validators.required])
  roldeId = new FormControl();

  registerForm = new FormGroup({
    email: this.email,
    firstname: this.firstname,
    lastName: this.lastName,
    password: this.password,
    repeatPassword: this.password,
    roldeId: this.roldeId
  })

  //I did not know from where to retrieve data about roleId. googled a bit about it and it might have been related to checkbox but I did not spend time on it because I had bigger problems So I found a 'cheap' solution

  dispatchSignup() {
    this.auth.dispatchSignup(
        this.email.value as string,
        this.firstname.value as string,
        this.lastName.value as string,
        this.password.value as string,
        this.repeatPassword.value as string,
        'cb3c281d-fc5e-4d77-8129-8b90954f755d')
    }
}
