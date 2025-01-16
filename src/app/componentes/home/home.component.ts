import { Component } from '@angular/core';
import { Dados } from '../dados';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { DadosObjService } from '../../servicos/dados-obj.service';

@Component(
  {
  selector: 'app-home',
  standalone: true,
  imports: [ MatButtonModule, CardComponent, NgFor, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { 
  
  listasObj: Dados[]; 
  
  constructor(private dadosServicos: DadosObjService) { 
    
    this.listasObj = this.dadosServicos.getDados();

  }}
