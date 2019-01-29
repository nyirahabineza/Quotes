import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quotes'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upvotes(){
    this.quote.upvote+=1;
  }
  downvotes(){
    this.quote.downvote+=1;
  }
  constructor() { }

  ngOnInit() {
  }

}