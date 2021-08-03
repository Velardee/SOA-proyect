import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Animal } from '../models/animal';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  animals: Animal[] = [];

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.getAnimal();
  }

   getAnimal(): void{
    const urlApi = "http://localhost:4000/getAll";
    this.http.get(urlApi).subscribe((data: any) => {
      this.animals = data.body.Items;
      console.log(this.animals)
    });
  }

}
