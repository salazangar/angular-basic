import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of object
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup@gmail.com", 40000),
    new SalesPerson("Mike", "Tyson", "mike@gmail.com", 5000),
    new SalesPerson("Sarah", "Powell", "sarah@gmail.com", 35000),
    new SalesPerson("Jain", "Kant", "jain@gmail.com", 70000),
    new SalesPerson("Margot", "Pierce", "mauap@gmail.com", 20000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
