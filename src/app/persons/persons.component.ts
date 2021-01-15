import { Component, OnInit } from '@angular/core';
import { Person } from '../person'

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  person: Person = new Person()
  constructor() {
    this.person.age = 19
    this.person.sex = "Male"
    this.person.firstName = "Humberto"
    this.person.lastName = "Canales"
   }

  ngOnInit(): void {

  }

}
