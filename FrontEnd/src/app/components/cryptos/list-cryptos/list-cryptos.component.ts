import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';
import { interval, Subscription, timer } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-list-cryptos',
  templateUrl: './list-cryptos.component.html',
  styleUrls: ['./list-cryptos.component.css']
  
})
export class ListCryptosComponent implements OnInit {

  timerSubscription: Subscription; 


  constructor(public cryptoService: CryptoService) { }

  ngOnInit(): void {
  
    this.timerSubscription = timer(0, 5000).pipe( 
      map(() => { 
        this.cryptoService.getCryptos(); 
      }) 
    ).subscribe(); 

    
  }

  ngOnDestroy(){
    this.timerSubscription.unsubscribe();
  }

}
