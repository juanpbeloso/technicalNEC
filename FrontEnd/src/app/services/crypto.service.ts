import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crypto } from '../models/crypto';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {

  myAppUrl = 'http://localhost:5000/';
  // For test purposes 44377
  myApiUrl = 'api/cryptos/';
  list: Crypto[];
  listConverted: Crypto[];
  error: boolean = false;
  isPending:boolean = true;  

  constructor(private http: HttpClient) {}

  getConverted(name: string, quantity: number) {
    //Create HttpParams
    //let params = new HttpParams().set("name",name).set("quantity", quantity);

    this.http
      .get(
        this.myAppUrl + this.myApiUrl + 'convert' + '/' + name + '/' + quantity
      )
      .toPromise()
      .then((data) => {
        if (data != null) {
          this.listConverted = data as Crypto[];
          this.isPending = false;
          //console.log(data);
        }else{
          this.listConverted = null;
        }
      })
      .catch((err) => { 
        this.error = true;
    });
  }

  getCryptos() {
    this.http
      .get(this.myAppUrl + this.myApiUrl)
      .toPromise()
      .then((data) => {
        if (data != null) {
          this.list = data as Crypto[];
          //console.log(data);
          this.isPending = false;
        }else{
          this.list = null;
        }
      })
      .catch((err) => { 
        this.error = true;
    });
  }
}
