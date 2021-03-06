import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from "./inicio/inicio.component";
import { WelcomeComponent } from "./welcome/welcome.component"
import { AddComponent } from "./add/add.component";
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { AddProductComponent } from "./add-product/add-product.component";
import { EditAnimalComponent } from "./edit-animal/edit-animal.component";
import { EditProductComponent } from './edit-product/edit-product.component';

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
    path: "edit-animal",
    component: EditAnimalComponent
  },
  {
    path: "edit-product",
    component: EditProductComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
