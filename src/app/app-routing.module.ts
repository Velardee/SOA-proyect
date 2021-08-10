import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from "./inicio/inicio.component";
import { WelcomeComponent } from "./welcome/welcome.component"
import { AddComponent } from "./add/add.component";
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { AddProductComponent } from "./add-product/add-product.component";
import { EditAnimalComponent } from "./edit-animal/edit-animal.component";
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddUserComponent } from "./add-user/add-user.component";
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [

  {
    path: "",
    redirectTo: "/welcome",
    pathMatch: "full",
  },
  {
    path: "welcome",
    component: WelcomeComponent,
  },
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path: "add",
    component: AddComponent
  },
  {
    path: "add-animal",
    component: AddAnimalComponent
  },
  {
    path: "add-product",
    component: AddProductComponent
  },
  {
    path: "edit-animal/:nameA",
    component: EditAnimalComponent
  },
  {
    path: "edit-product/:producto",
    component: EditProductComponent
  },
  {
    path: "add-user",
    component: AddUserComponent
  },
  {
    path: "edit-user/:id",
    component: EditUserComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
