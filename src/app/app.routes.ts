import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { MasculinosComponent } from './modelos/masculinos/masculinos.component';
import { FemininosComponent } from './modelos/femininos/femininos.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title: 'Page Home'
  },
  {
    path:'masculino',
    component: MasculinosComponent,
    title: 'Roupas Masculinas'
  },
  {
    path:'feminino',
    component: FemininosComponent,
    title: 'Roupas Femininas'
  },
];
