import { Component } from '@angular/core';
import { CivilWorkService } from './civil-work.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  area = 0;
  civilWork: string = "redClayBrick";
  flooring: string = "tiles";
  grillWork: boolean;
  plumbing: boolean;
  kitchenWall: boolean;
  electrical: boolean;
  joinery: boolean;
  upvc: boolean;
  painting: boolean;
  total = 0;
  constructor(private civilWorkService: CivilWorkService) { }
  onAreaChange() {
    this.total = this.civilWorkService.getRBCMethodCost(this.area);
    console.log('total:'+this.total);
  }
}
