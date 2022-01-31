import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Farm } from './farm';

@Injectable()
export class SelectedFarmService {
  private _farmDetails: Subject<Farm> = new Subject<Farm>();
  public farmDetailObser = this._farmDetails.asObservable();
  setFarmSelected(farmSelected: Farm) {
    this._farmDetails.next(farmSelected);
  }
  getFarmSelected(): Observable<Farm> {
    {
      return this._farmDetails;
    }
  }
}
