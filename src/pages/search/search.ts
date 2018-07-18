import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MasinfoPage } from '../masinfo/masinfo';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  miLista = [];
  constructor(public navCtrl: NavController) {
    this.miLista = [
      {
        'title': 'Parque Metropolitano Equinoccial',
        'imgs': '',
        'ubicacion': 'ubicacion ',
        
      },
      {
        'title': 'Parque Arqueológico Rumipamba',
        'imgs': '',
        'ubicacion': 'ubicacion '
      },
      {
        'title': 'Parque La Carolina',
        'imgs': '',
        'ubicacion': 'ubicacion '
      },
      {
        'title': 'Entrada Parque Metropolitano Batan Alto',
        'imgs': 'javascript',
        'ubicacion': 'ubicacion '
      },
      {
        'title': 'Parque Metropolitano de Quito',
        'imgs': 'sass',
        'ubicacion': 'ubicacion '
      },
      {
        'title': 'Parque Guápulo',
        'imgs': 'nodejs',
        'ubicacion': 'ubicacion '
      },
      {
        'title': 'Parque Cuscungo',
        'imgs': 'python',
        'ubicacion': 'ubicacion '
      },
      {
        'title': 'Parque Metropolitano Chilibulo',
        'imgs': 'markdown',
        'ubicacion': 'ubicacion '
      },
      {
        'title': 'Parque Metropolitano La Armenia',
        'imgs': 'tux',
        'ubicacion': 'ubicacion '
      },
      {
        'title': 'Parque Las Cuadras',
        'imgs': 'tux',
        'ubicacion': 'ubicacion '
      },
      {
        'title': 'Parque Metropolitano La Armenia',
        'imgs': 'tux',
        'ubicacion': 'ubicacion '
      },
    ]
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(MasinfoPage, { item: item });
  }

}


