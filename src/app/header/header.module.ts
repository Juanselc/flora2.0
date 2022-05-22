import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderPageRoutingModule } from './header-routing.module';
import { HeaderPage } from './header.page';
import { HomePageModule } from '../home/home.module';
import { ContactosPageModule } from '../contactos/contactos.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderPageRoutingModule,
    HomePageModule,
    ContactosPageModule
  ],
  declarations: [HeaderPage]
})
export class HeaderPageModule {}
