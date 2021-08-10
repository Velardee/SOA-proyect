import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  currentUser = {
    nameU: '',
    lastName: '',
    email: '',
    password: '',
    id: ''
  };

  constructor(private http: HttpClient,
              private router: Router,
              private activeRoute: ActivatedRoute,
              public service: AnimalService) { }

  ngOnInit(): void {
    this.getUser(this.activeRoute.snapshot.paramMap.get('id'));
  }

  getUser(id: any){
    this.service.getUser(id)
    .subscribe(
      data => {
        console.log(data, id);
      }, error => {
        console.log(error);
      });
  }

}
