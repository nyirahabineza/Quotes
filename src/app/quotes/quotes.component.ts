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
    
      new Quote("cecilia","kayitesi","Watch Finding Nemo','Find an online version and watch merlin find his son",0,0,new Date(2018,3,14) ),
      new Quote("nana","Raissa","Buy Cookies','I have to buy cookies for the parrot",0,0,new Date(2018,6,9) ),
      new Quote("stress","phones","Get new Phone Case','Diana has her birthday coming up soon",0,0,new Date(2018,1,12) ),
      new Quote("cecile","techinic", "Get Dog Food','Pupper likes expensive sancks",0,0,new Date(2018,0,18) ),
      new Quote("uwase","dreams" ,"Solve math homework','Damn Math",0,0,new Date(2018,2,14) ),
      new Quote("aline","swumming", "Plot my world domination plan','Cause I am an evil overlord",0,0,new Date(2018,3,14) ),

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