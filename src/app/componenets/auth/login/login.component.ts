import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '../../../services/auth.service'
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,
    private router: Router) { }

  username = new FormControl('', [Validators.required])
  password = new FormControl('', [Validators.required, Validators.pattern(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/gm)]);
  remember = new FormControl();

  loginFormGroup = new FormGroup({
    username: this.username,
    password: this.password,
    remember: this.remember
  })

  ngOnInit(): void {
    //@ts-ignore
    window.onGoogleLibrarLoad = () => {
      //@ts-ignore
      google.accounts.id.initialize({
        client_id: '536962025013-pdmcepgcj8ncq9uk9rmjlns20q8rr10a.apps.googleusercontent.com',
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true
      });
      //@ts-ignore
      google.accounts.id.renderButton(
        //@ts-ignore
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" } 
      );
      //@ts-ignore
      google.accounts.id.prompt((Notification: PromptMomentNotification) => {})
    }
    //@ts-ignore
    window.onGoogleLibrarLoad()
  }

  async handleCredentialResponse(response: CredentialResponse) {
    await this.auth.loginWithGoogle(response.credential).subscribe(
      (x: any) => {
        localStorage.setItem('token', x.data.token);
        this.router.navigate([''])
      }
    )
  }

  login() {
    this.auth.dispatchLogin(this.username.value as string, this.password.value as string, this.remember.value);
  }
}