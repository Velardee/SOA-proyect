import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Animal, User, Product } from '../models/animal';
import { AnimalService } from "../services/animal.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  animals: Animal[] = [];
  users: User[] = [];
  products: Product[] = [];
  urlApi = 'http://localhost:4000/';

  constructor( private http: HttpClient,
              public service: AnimalService) { }

  ngOnInit(): void {
    this.getAnimals();
    this.getUsers();
    this.getProducts();
  }

  async getAnimals() {
    const component = this.urlApi + 'getAll';
    const data: any = await this.http.get(component).toPromise();
    this.animals = data.Items;
    console.log(this.animals);
    return data;
  }

  /*productos*/

  async getProducts() {
    const component = this.urlApi + 'getAllProducts';
    const data: any = await this.http.get(component).toPromise();
    this.products = data.Items;
    console.log(this.products);
    return data;
  }

  /*Usuarios*/ 

  async getUsers() {
    const component = this.urlApi + 'getAllUsers';
    const data: any = await this.http.get(component).toPromise();
    this.users = data.Items;
    console.log(this.users);
    return data;
  }

  async deleteUser(id: string){
    let component = `${this.urlApi + 'deleteUser'}/${id}`;
    const data: any = await this.http.delete(component).toPromise();
    this.getUsers();
    return data;
  }

}
