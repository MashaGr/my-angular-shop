import { Component, OnInit } from '@angular/core';

enum CategoryType {
  cat1 = 1 ,
  cat2 = 2,
  cat3 = 3
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  name: string;
  description: string;
  price: number;
  category: CategoryType;
  isAvailable: boolean;
  ingredients: any[];
  equivalents: any[];

  ngOnInit() {
    this.isAvailable = false;
    this.ingredients = ['ingredient1', 'ingredient2'];
    this.equivalents = ['equivalent3', 'equivalent4', 'equivalent5'];
  }

  onBuy() {
    console.log('1');
  }

}
