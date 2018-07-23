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
        'imgs': 'assets/img/par1.png',
        'ubicacion': 'ubicacion ',
        
      },
      {
        'title': 'Parque Arqueológico Rumipamba',
        'imgs': 'C:/Users/Usuario/profin/src/assets/imgs/rumipamba.jpg',
        'ubicacion': 'ubicacion '
      },
      {
        'title': 'Parque La Carolina',
        'imgs': 'C:\Users\Usuario\profin\src\assets\imgs\carolina.jpg',
        'ubicacion': 'ubicacion '
      },
      {
        'title': 'Entrada Parque Metropolitano Batan Alto',
        'imgs': 'C:\Users\Usuario\profin\src\assets\imgs\batan.jpg',
        'ubicacion': 'ubicacion '
      },
      {
        'title': 'Parque Metropolitano de Quito',
        'imgs': 'C:\Users\Usuario\profin\src\assets\imgs\metro.jpeg',
        'ubicacion': 'ubicacion '
      },
      {
        'title': 'Parque Guápulo',
        'imgs': 'C:\Users\Usuario\profin\src\assets\imgs\cascungo.jpg',
        'ubicacion': 'ubicacion '
      },
      {
        'title': 'Parque Cuscungo',
        'imgs': 'C:\Users\Usuario\profin\src\assets\imgs\cascungo.jpg',
        'ubicacion': 'ubicacion '
      },
      {
        'title': 'Parque Metropolitano Chilibulo',
        'imgs': 'C:\Users\Usuario\profin\src\assets\imgs\chili.jpg',
        'ubicacion': 'ubicacion '
      },
      {
        'title': 'Parque Metropolitano La Armenia',
        'imgs': 'C:\Users\Usuario\profin\src\assets\imgs\arme.jpg',
        'ubicacion': 'ubicacion '
      },
      {
        'title': 'Parque Las Cuadras',
        'imgs': 'C:\Users\Usuario\profin\src\assets\imgs\cuadras.jpg',
        'ubicacion': 'ubicacion '
      },
    ]
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(MasinfoPage, { item: item });
  }

}


