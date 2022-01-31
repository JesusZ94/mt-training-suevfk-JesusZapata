import { Component } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { SelectedFarmService } from './selected-farm.service';
import { takeUntil } from 'rxjs/operators';
import { Farm } from './farm';
import {
  EditService,
  ToolbarService,
  SortService,
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'mt-sample-detail',
  templateUrl: './mt-sample-detail.component.html',
})
export class MtSampleDetailComponent {
  farmDescription: Farm;

  constructor(private farmService: SelectedFarmService) {}

  ngOnInit() {
    this.farmService.getFarmSelected().subscribe((farmselec: Farm) => {
      this.farmDescription = farmselec;
    });
  }
}
