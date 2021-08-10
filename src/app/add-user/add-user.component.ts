import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { User } from '../models/animal';
import { AnimalService } from '../services/animal.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = {
    nameU: "",
    lastName: "",
    email: "",
    password: "",
    id: ""
  }

  constructor(private router: Router,
              private service: AnimalService,
              private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      nameU: this.user.nameU,
      lastName: this.user.lastName,
      email: this.user.email,
      password: this.user.password,
      id: this.user.id
    }

    this.service.createUser(data)
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
