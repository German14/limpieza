import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientsComponent} from './clients.component';
import {ClientRoutingModule} from './client-routing.module';
import {MatCardModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {ButtonNavigationModule} from '../buttons-navigation/button-navigation.module';


@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatCardModule,
    ButtonNavigationModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class ClientModule { }
