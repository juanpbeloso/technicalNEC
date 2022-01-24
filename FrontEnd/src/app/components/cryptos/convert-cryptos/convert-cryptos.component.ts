import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-convert-cryptos',
  templateUrl: './convert-cryptos.component.html',
  styleUrls: ['./convert-cryptos.component.css']
})
export class ConvertCryptosComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder:FormBuilder, public cryptoService: CryptoService) 
  {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      quantity: [0, [Validators.required, Validators.maxLength(10), Validators.min(0)]]
    })
   }

  ngOnInit(): void {
  }

  getConverted(){

    var name = this.form.get('name').value;
    var quantity = this.form.get('quantity').value;

    this.cryptoService.getConverted(name, quantity);
  }

}
