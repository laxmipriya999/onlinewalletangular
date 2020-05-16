import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DepositeComponent } from './deposite/deposite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineWallet';
}
export const routes:Routes=[
{path:'deposite',component:DepositeComponent}]