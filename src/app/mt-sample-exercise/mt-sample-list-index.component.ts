import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { SelectedFarmService } from './selected-farm.service';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry, takeUntil } from 'rxjs/operators';
import { Farm } from './farm';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
//import farms from '../../app/mt-sample-exercise/mock-data.json';

@Component({
  selector: 'mt-sample-list',
  templateUrl: './mt-sample-list-index.component.html',
})
export class MtSampleListIndexComponent implements OnInit {
  farmData: Farm[] = [];
  lista: filterList[] = [];
  searchText: string;
  isError: Boolean = false;
  errMesage: String = '';

  constructor(
    private dataservice: DataService,
    private selectedfarmservice: SelectedFarmService,
    private httpClient: HttpClient
  ) {}
  ngOnInit() {
    this.lista.push(new filterList(0, 'All'));
    this.lista.push(new filterList(1, 'No'));
    this.lista.push(new filterList(2, 'Active Date'));
    this.dataservice.getFarms().then((data: Farm[]) => (this.farmData = data));
  }

  rowSelecting(farmRow) {
    this.selectedfarmservice.setFarmSelected(farmRow.data);
  }

  callApi() {
    this.isError = false;
    this.httpClient.get('rutaerror').subscribe(
      (res) => {},
      (err) => {
        console.log('getData has thrown and error of', err);
        this.isError = true;
        this.errMesage = err.name;
      }
    );
  }
}
export class filterList {
  constructor(public value: number, public Text: string) {}
}
