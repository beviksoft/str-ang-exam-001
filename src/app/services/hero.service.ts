import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero';
//import { HeroesList } from '../db/heroes-db.json';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  colNames: { key: string, text: string }[] = [
    { key: 'id', text: 'ID' },
    { key: 'name', text: 'Name' },
    { key: 'superPower', text: 'Super Power' },
    { key: 'address', text: 'Location' }
  ];

  dataList: any = {

  }


  constructor() { }


  getAll(dataType: string): Hero[] {
    return this.dataList[dataType];
  }

}