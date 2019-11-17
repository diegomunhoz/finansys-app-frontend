import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    //Modulos compartilhados
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    //Componentes Compartilhados
    BreadCrumbComponent
  ],
  declarations: [BreadCrumbComponent]
})
export class SharedModule { }
