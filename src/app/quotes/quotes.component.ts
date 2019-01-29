import { Component, OnInit,Input } from '@angular/core';
import { Quote} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  // @Input() quotes:Quote;
  quotes = [
    
      new Quote("cecile","Dr. Seuss","Don't cry because it's over, smile because it happened",0,0,new Date(2018,3,14) ),
      new Quote("cecile"," Marilyn Monroe","I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle",0,0,new Date(2018,6,9) ),
      new Quote("cecile"," Oscar Wilde","Be yourself; everyone else is already taken",0,0,new Date(2018,1,12) ),
      new Quote("cecile"," Albert Einstein", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",0,0,new Date(2018,0,18) ),
      new Quote("cecile"," Frank Zappa" ,"So many books, so little time",0,0,new Date(2018,2,14) ),
      new Quote("cecile","Marcus Tullius Cicero", "A room without books is like a body without a soul",0,0,new Date(2018,3,14) ),

  ] 
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

}
  

  completeQuote(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure to delete ${this.quotes[index].description}`)
        if(toDelete)
        {
        this.quotes.splice(index,1)
        }
        }
        }
  toogleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
constructor() { }
ngOnInit() {
}
}