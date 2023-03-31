import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  apiForFileUpload = 'https://fikra.admi.ge/api/File/AnonymousUploadFile';
  apiForFileCreation = 'https://fikra.admi.ge/api/File/CreateFile';
  base64: any;
  extension = 'docx';
  fileBase!: string;

  constructor(
    private http: HttpClient
  ) { }

  onSubmit(submitForm: any) {
    this.http.post(this.apiForFileCreation, { base64String: this.base64, extension: this.extension, }).subscribe(
      (response: any) => {
        if (response.success) {
          this.fileBase = response.resultId
          this.submitSuccess(submitForm);
        }
      }
    )
  }

  submitSuccess(submitForm: any) {
    this.http.post(this.apiForFileUpload, {
      comment: submitForm.get('comment').value,
      email: submitForm.get('email').value,
      fileBase64: this.fileBase,
      firstName: submitForm.get('firstName').value,
      lastName: submitForm.get('lastName').value
    }).subscribe(
      (response) => {
        console.log(response)
      }
    )
  }
}
