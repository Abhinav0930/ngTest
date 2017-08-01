import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';

//var Rx = require('rx');

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() {
   // this.getObserverDataTimer();
   }

  getObserverData(){
    let source  = Rx.Observable.range(1,5);
    let subs = source.subscribe(
        x=>console.log('onNext '+x),
        e=>console.log('on error '+e),
        ()=>console.log('on completed ')
      
    )
  }

  getObserverData1(){
    let source= Rx.Observable.create((observer)=>{
      observer.next(42);
      observer.complete();

      return ()=>{
        console.log('disposed');
      }
    });
    let subs = source.subscribe(
      x=>console.log('onNext '+x),
      e=>console.log('onError '+e),
      ()=>console.log('on completed')
    )
    subs.unsubscribe();
  }

  getObserverDataTimer(){
    console.log('current time '+Date.now());
    let source = Rx.Observable.timer(2000,1000).timestamp();

    let subs = source.subscribe(
      x=>console.log(x.value+' : '+x.timestamp)
    )

  }

  ngOnInit() {
  }

}
