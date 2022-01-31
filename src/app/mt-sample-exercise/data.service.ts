import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Farm } from './farm';
@Injectable()
export class DataService {
  constructor(public http: HttpClient) {}
  farmData: Farm[] = [];
  async getFarms() {
    try {
      const data = await this.http.get('assets/farmdata.json').toPromise();
      return data;
    } catch (error) {
      console.log('Error' + JSON.stringify(error));
    }
  }
}
