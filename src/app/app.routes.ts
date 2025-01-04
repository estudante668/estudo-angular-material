import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CardComponent } from './componentes/card/card.component';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title: 'Page Home'
  },
  {
    path:'cartao',
    component: CardComponent,
    title: 'Cartao'
  },
  {
    path:'detalhe',
    component: DetalhesComponent,
    title: 'Detalhes'
  },
];
