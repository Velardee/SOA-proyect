import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  form: FormGroup;
  name = "";
  category = "";
  description = "";
  urlImg = "";
  price = "";


  constructor( private formBuilder: FormBuilder, 
              private router: Router ) { 

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

  submitProduct () {
    this.router.navigateByUrl("inicio");
  }

}
