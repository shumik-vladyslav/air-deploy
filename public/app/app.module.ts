import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {DataTableModule, TreeTableModule,TreeNode,SharedModule, ChartModule, ButtonModule} from 'primeng/primeng';     //accordion and accordion tab

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    ChartModule,
    DataTableModule,
    TreeTableModule,
    SharedModule,
    ButtonModule
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
