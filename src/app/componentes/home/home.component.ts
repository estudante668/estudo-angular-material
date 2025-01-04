import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Dados } from '../dados';
import { MatButtonModule } from '@angular/material/button';


@Component(
  {
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, NgFor, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  listaDados: Dados[] = [
    {
      id: 0,
      modelo: 'Esporte',
      marca:'Nike',
      preco: '123.98',
      foto: '/assets/image12.jpg'
    },
    {
      id: 1,
      modelo: 'Esporte',
     marca:'Adidas',
      preco: '43.98',
      foto: '/assets/image12.jpg'
    },
    {
      id: 2,
      modelo:'Social',
      marca:'Gabanne',
      preco: '987.98',
      foto: '/assets/image12.jpg'
    },
    {
      id: 3,
      modelo: 'Sertanejo',
      marca:'Louis',
      preco: '65.98',
      foto: '/assets/image12.jpg'
    },
    {
      id: 4,
      modelo: 'Inverno',
      marca:'Dinati',
      preco: '453.98',
      foto: '/assets/image12.jpg'
    },
    {
      id: 5,
      modelo: 'Inverno',
      marca:'Dinati',
      preco: '453.98',
      foto: '/assets/image12.jpg'
    },
    {
      id: 6,
      modelo: 'Inverno',
      marca:'Dinati',
      preco: '453.98',
      foto: '/assets/image12.jpg'
    },
  ];
}
