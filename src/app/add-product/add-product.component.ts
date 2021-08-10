import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AnimalService } from '../services/animal.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../models/animal';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  form: FormGroup;

  product: Product = {
    producto: "",
    category: "",
    description:"",
    urlImg: "",
    price: "",
    sk: ""  
  }


  constructor( private formBuilder: FormBuilder, 
              private router: Router,
              private service: AnimalService,
              private snack: MatSnackBar) { 

    this.form = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      category: ["", [Validators.required, Validators.minLength(3)]],
      description: ["", [Validators.required, Validators.minLength(5)]],
      urlImg: ["", [Validators.required]],
      price: ["", [Validators.required]]
    });

  }

  ngOnInit(): void {
  }

   saveProduct(): void {
    const data = {
      producto: this.product.producto,
      category: this.product.category,
      urlImg: this.product.urlImg,
      description: this.product.description,
      price: this.product.price,
      sk: this.product.sk
    }

    this.service.createProduct(data)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigateByUrl("inicio");
        this.openSnackBar();
      },
      error => {
        console.log(error);
      }
    )
  }


  submitProduct () {
    this.router.navigateByUrl("inicio");
  }

  openSnackBar(): void {
    this.snack.open('Registro Guardado', '',{
      duration: 2000,
      panelClass: 'notif-success'
    })
  }

}
