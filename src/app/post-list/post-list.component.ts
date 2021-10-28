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
  @Input() postContent: string ;
  @Input() postLoveIts: number;

  

  ngOnInit(): void {
  }
  onLike(){
    console.log("yes");
  }

}
