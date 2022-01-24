import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptosComponent } from './components/cryptos/cryptos.component'
import { ListCryptosComponent } from './components/cryptos/list-cryptos/list-cryptos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConvertCryptosComponent } from './components/cryptos/convert-cryptos/convert-cryptos.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptosComponent,
    ListCryptosComponent,
    FooterComponent,
    ConvertCryptosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
