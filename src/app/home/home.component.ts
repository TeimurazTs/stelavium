import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  author = 'Hala Alyan';
  novel = 'Salt house';
  srcAuthor = '../../assets/Hala.jpg';
  srcBook = '../../assets/salt.jpg';
  about = 'Hala Alyan (born July 27, 1986) is a Palestinian-American writer, poet, and clinical psychologist who specializes in trauma, addiction, and cross-cultural behavior. Her writing covers aspects of identity and the effects of displacement, particularly within the Palestinian diaspora. She is also known for acting in the short films';
  description = 'Salt Houses, earned a Dayton Literary Peace Prize, the Arab American Book Award and was listed by NPR as the Book of the Year. This lyrical story spans three generations of a displaced Palestinian family and chronicles the enduring heartache and courage of people struggling to find a sense of home. ';
}

