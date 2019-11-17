import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';

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
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorComponent
  ],
  declarations: [BreadCrumbComponent, PageHeaderComponent, FormFieldErrorComponent]
})
export class SharedModule { }
