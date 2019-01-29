import { Component,OnInit } from '@angular/core';
import {Quote} from './quotes'
// import { close } from 'inspector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    quotes = [
        new Quote("cecile"," Dr. Seuss","Watch Finding Nemo','Find an online version and watch merlin find his son",0,0,new Date(2018,3,14) ),
        new Quote("cecile"," Albert Einstein","Buy Cookies','I have to buy cookies for the parrot",0,0,new Date(2018,6,9) ),
        new Quote("nana"," Frank Zappa","Get new Phone Case','Diana has her birthday coming up soon",0,0,new Date(2018,1,12) ),
        new Quote("mami"," Bernard M. Baruch", "Get Dog Food','Pupper likes expensive sancks",0,0,new Date(2018,0,18) ),
        new Quote("Dadi"," Marcus Tullius Cicero" ,"Solve math homework','Damn Math",0,0,new Date(2018,2,14) ),
        new Quote("Raissa"," William W. Purkey", "Plot my world domination plan','Cause I am an evil overlord",0,0,new Date(2018,3,14) ),

    ]
    constructor(){}
    ngOnInit(){}

    }