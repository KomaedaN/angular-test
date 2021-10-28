import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
  
  constructor() { 
    this.postTitle="";
    this.postContent="";
    this.postLoveIts=0;
  }

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;

  

  ngOnInit(): void {
  }
  onLike(){
    this.postLoveIts = 1;
    console.log(this.postLoveIts);
  }
  onDislike(){
    this.postLoveIts = -1;
    console.log(this.postLoveIts);
  }
  switch (postLoveIts) {
    case 1:
      return 'green';
      break;
  
    case -1:
      return 'red';
      break;
  }
}
