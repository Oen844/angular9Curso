import { Component, OnInit } from '@angular/core';
import {Ejercicio} from '../Ejercicio';
import { EJERCICIOS } from '../collention-ejercicios';



@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  ejercicios = EJERCICIOS;
  //ejercicio = 'Flexion';

  constructor() { }

  ngOnInit(): void {
  }

}
