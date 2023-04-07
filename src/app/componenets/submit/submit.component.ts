import { Component } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { SubmitService } from '../../services/submit.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css'],
})
export class SubmitComponent {
  constructor(private submit: SubmitService) {}

  firstName = new FormControl('', [Validators.required, Validators.min(2)]);
  lastName = new FormControl('', [Validators.required, Validators.min(2)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phoneNumber = new FormControl('', [Validators.required]);
  comment = new FormControl('', [Validators.required, Validators.min(10)]);
  select = new FormControl('', [Validators.required]);

  submitForm = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    phoneNumber: this.phoneNumber,
    comment: this.comment,
    select: this.select,
  });

  submitEssay() {
    this.submit.onSubmit(this.submitForm);
  }

  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // i know string slicing like that is not even kinda okay but I had bigger problems than thath
      this.submit.base64 = reader.result?.slice(84);

      // const formData = new FormData();
      // formData.append('file', file);

      // this.submit.formdata = formData;
    };
  }
}
