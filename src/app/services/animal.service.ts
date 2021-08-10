import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Animal, User, Product } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  
   urlApi = 'http://localhost:4000/';
   users: User[] = [];
   animals: Animal[] = [];
   product: Product[] = [];

  constructor( private http: HttpClient) { }


  createAnimal(data): Observable<any>{
    let component = this.urlApi + 'createAnimal';
     return this.http.post<User>(component, data);
  }

  /*Productos*/

  createProduct(data: Product): Observable<any>{
    let component = this.urlApi + 'createProduct';
     return this.http.post<User>(component, data);
  }

  getProduct(producto: any){
    return this.http.get(`${this.urlApi + 'getProduct'}/${producto}`);
  }

  editProduct(sk: string, data: any): Observable<any>{
    let component = `${this.urlApi + 'updateProduct'}/${sk}`;
    return this.http.put(component, data);
  }

   deleteProduct(sk: string): Observable<any>{
    let component = `${this.urlApi + 'deleteProduct'}/${sk}`;
    return this.http.delete(component);
  }
  

  
  /*Usuarios*/


  async getUsers() {
    const component = this.urlApi + 'getAllUsers';
    const data: any = await this.http.get(component).toPromise();
    this.users = data.Items;
    console.log(this.users);
    return data;
  }

  createUser(data: User): Observable<any>{
    let component = this.urlApi + 'createUser';
     return this.http.post<User>(component, data);
  }

  async deleteUser(id: string){
    let component = `${this.urlApi + 'deleteUser'}/${id}`;
    const data: any = this.http.delete(component).toPromise();
  }
  
  editUser(id: string, data: User){
    let component = `${this.urlApi + 'updateUser'}/${id}`;
    return this.http.put(component, data);
  }

  getUser(id: any){
    return this.http.get(`${this.urlApi + 'getAllUsers'}/${id}`);
  }

}
