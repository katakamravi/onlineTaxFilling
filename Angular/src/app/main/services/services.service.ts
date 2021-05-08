import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/services/httpClientServices';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl: string;
  constructor(private _httpClientService: HttpClientService) {
    this.baseUrl = 'http://localhost:9091/';
   }

  // tslint:disable-next-line:typedef
  execute(data: any) {
    const url = this.baseUrl + 'users/email';
    return this._httpClientService.invoke(url, data);
    }
}
