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
    // this.getAnimal();
    this.getAnimalV2();
  }

  //  getAnimal(): void{
  //   const urlApi = 'http://localhost:4000/getAll';
  //   this.http.get(urlApi).subscribe((data: any) => {
  //     this.animals = data.body.Items;
  //     console.log(this.animals)
  //   });
  // }

  async getAnimalV2() {
    const urlApi = 'http://localhost:4000/getAll';
    const data: any = await this.http.get(urlApi).toPromise();
    this.animals = data.Items;
    console.log(this.animals)
    return data;
  }

}
