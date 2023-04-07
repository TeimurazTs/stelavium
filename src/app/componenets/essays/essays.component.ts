import { Component, OnInit } from '@angular/core';
import { SubmissionsService } from 'src/app/services/submissions.service';

@Component({
  selector: 'app-essays',
  templateUrl: './essays.component.html',
  styleUrls: ['./essays.component.css']
})
export class EssaysComponent implements OnInit {
  essays: any;

  constructor(
    private submission: SubmissionsService
  ) {}

  ngOnInit(): void {
    this.submission.loadEssays().subscribe(
      (response: any) => {
        console.log(response.data)
        this.essays = response.data.files
      }
    )
    this.submission.loadBase64().subscribe(
      (response: any) => {
        console.log(response);
      }
    )
  }
  
}
