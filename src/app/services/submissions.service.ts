import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment.ts/environment';


@Injectable({
  providedIn: 'root'
})
export class SubmissionsService {

  constructor(
    private http: HttpClient
  ) { }

  loadEssays() {
    return this.http.post(`${environment.url}File/GetAnonymousUserFiles`, {"page":1,"pageSize":50});
  }

  loadBase64() {
    console.log('loadbase ran')
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post(`${environment.url}Files/Upload/452726e6-4105-420e-84f6-2e5a604d9f24`, {headers: headers});
  }
}