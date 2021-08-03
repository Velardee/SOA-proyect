import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  submitProduct () {
    this.router.navigateByUrl("inicio");
  }

}
