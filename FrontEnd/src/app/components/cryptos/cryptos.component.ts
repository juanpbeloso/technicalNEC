import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.css']
})
export class CryptosComponent implements OnInit {

  constructor(public cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.cryptoService.getCryptos();
  }

}
