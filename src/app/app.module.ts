import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';

import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { WelcomeComponent } from './welcome/welcome.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AddComponent } from './add/add.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    WelcomeComponent,
    AddComponent,
    AddAnimalComponent,
    AddProductComponent,
    EditProductComponent,
    EditAnimalComponent,
    DeleteModalComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
