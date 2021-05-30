import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { UIRenderService } from './services/UIRender.service';
import { WindowComponent } from './components/window.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { ButtonComponent } from './components/button/button.component';

const services = [UIRenderService];
const components = [ WindowComponent,TextFieldComponent,ButtonComponent ];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers:[...services],
  exports:[
    ...components
  ]
})
export class SharedModule { }
