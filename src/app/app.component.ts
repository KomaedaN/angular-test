import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {  
      title: 'First Post',  
      content: 'Lorem ipsum dolor sit amet. Qui Quis assumenda aut culpa accusantium et quia',  
      loveIts: 2,  
      created_at: Date
    },
    {  
      title: 'Second Post',  
      content: 'quidem ea libero voluptatum sit officiis maiores. Aut dolor neque et perspiciatis',  
      loveIts: 0,  
      created_at: Date
    },
    {  
      title: 'Last Post',  
      content: 'quasi hic corporis autem nam repellat tempora At minus dolor. Et amet',  
      loveIts: 0,  
      created_at: Date
    }
  ];
  
}
