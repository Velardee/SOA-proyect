import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { AnimalService } from '../services/animal.service';
import { Animal } from '../models/animal';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  animal = {
    nameA: "",
    animal: "",
    urlImg: "",
    description: "",
    id: ""
  }

  constructor( private router: Router,
                private service: AnimalService,
                private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  saveAnimal(): void {
    const data = {
      nameA: this.animal.nameA,
      animal: this.animal.animal,
      urlImg: this.animal.urlImg,
      description: this.animal.description,
      id: this.animal.id
    }

    this.service.createAnimal(data)
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
