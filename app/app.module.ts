import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { Bai3Trang1Component } from './bai3-trang1/bai3-trang1.component';
import { Bai3Trang2Component } from './bai3-trang2/bai3-trang2.component';
import { Bai3Trang3Component } from './bai3-trang3/bai3-trang3.component';
import { Bai3Phan1Component } from './bai3-phan1/bai3-phan1.component';

@NgModule({
  declarations: [
    AppComponent,
    Bai1Component,
    Bai2Component,
    Bai3Trang1Component,
    Bai3Trang2Component,
    Bai3Trang3Component,
    Bai3Phan1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
