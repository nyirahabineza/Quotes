import { Component,OnInit } from '@angular/core';
import {Quote} from './quotes'
// import { close } from 'inspector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    quotes = [
        new Quote("cecile"," Dr. Seuss","Don't cry because it's over, smile because it happened','nyirahabineza'",0,0,new Date(2018,3,14) ),
        new Quote("cecile"," Albert Einstein","Buy Cookies','I have to buy cookies for the parrot",0,0,new Date(2018,6,9) ),
        new Quote("cecile","Marilyn Monroe ","I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle",0,0,new Date(2018,1,12) ),
        new Quote("cecile"," Bernard M. Baruch", "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",0,0,new Date(2018,0,18) ),
        new Quote("cecile"," Marcus Tullius Cicero" ,"A room without books is like a body without a soul",0,0,new Date(2018,2,14) ),
        new Quote("cecile","Mae West", "You only live once, but if you do it right, once is enough",0,0,new Date(2018,3,14) ),

    ]
    constructor(){}
    ngOnInit(){}

    }