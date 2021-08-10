import { Component, OnInit } from '@angular/core';
import { Product } from '../models/animal';
import { AnimalService } from '../services/animal.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  currentProduct: any = {
    producto: '',
    category: '',
    description: '',
    urlImg: '',
    price:'', 
    sk: ''
  };

  constructor(private service: AnimalService,
              private router: Router,
              private activedRoute: ActivatedRoute,
              private http: HttpClient,
              private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.getProduct(this.activedRoute.snapshot.paramMap.get('producto'));
  }

  getProduct(product: any): void{
    this.service.getProduct(product)
    .subscribe(data => {
      this.currentProduct = data;
      console.log(this.currentProduct); 
    },
    error => {
      console.log(error);
    }
    )
  }

  updateProduct(): void{
    this.service.editProduct(this.currentProduct[0].sk, this.currentProduct[0])
    .subscribe(res => {
      console.log(this.currentProduct.sk);
      console.log(res);
      this,this.openSnackBar();
      this.router.navigateByUrl('/inicio');
    },
    error => {
      console.log(error);
    }
    )
  }

  openSnackBar(): void {
    this.snack.open('Registro Actualizado', '',{
      duration: 2000,
      panelClass: 'notif-success'
    })
  }

  deleteProduct(): void{
    this.service.deleteProduct(this.currentProduct[0].sk)
    .subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
  }

}
