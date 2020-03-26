import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  sum(...args: number[]) {
    let total = 0;
    for (let n of args) {
      total += n;
    }
    return total;
  }
}
