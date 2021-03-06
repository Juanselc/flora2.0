import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ContactosPageRoutingModule } from './contactos-routing.module';
import { ContactosPage } from './contactos.page';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { HeaderPageRoutingModule } from '../header/header-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactosPageRoutingModule,
    HomePageRoutingModule,
    HeaderPageRoutingModule

  ],
  declarations: [ContactosPage]
})
export class ContactosPageModule {}
