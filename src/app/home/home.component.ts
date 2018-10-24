import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  mySubscription: Subscription;
  //myNumberSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        
        setTimeout(() => {
          observer.next('first package')
        }, 2000);

        setTimeout(() => {
          observer.next('second package')
        }, 8000);

        setTimeout(() => {
          observer.error('this does not work')
        }, 9000);

      }
    );

    //const myNumberObservable = Observable.interval(8000, null).map((num: number) => { return num * 2 });

    this.mySubscription = myObservable.subscribe(
      (data: string) => { console.log(data) },
      (error: string) => { console.log(error) },
      () => { console.log('completed .... ') }
    );  
    
    /* this.myNumberSubscription = myNumberObservable.subscribe(
      (data: number) => { console.log(data) }
    ); */
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
    //this.myNumberSubscription.unsubscribe();
    console.log('unsubscribed....')
  }
}
