import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CivilWorkService {
  private cement = 330;
  private msandR = 45;
  private msandN = 46;
  private brick = 6.5;
  private steel = 45;
  private blueMetel = 30;
  constructor() { }
  getRBCMethodCost(area: number) {
    let cwcm: number = 0.141631663;
    let tempc = this.cement / 350;
    let tempCmCost = area * 1238.18276 * cwcm;
    let cmCost = tempCmCost - tempCmCost * tempc;
    return cmCost;
  }
}
