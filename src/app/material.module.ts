import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    // BrowserModule,
    MatGridListModule,
    MatToolbarModule
  ],
  exports: [
    CommonModule,
    // BrowserAnimationsModule,
    // BrowserModule,
    MatGridListModule,
    MatToolbarModule
  ]

})

export class MaterialModule { }
