import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../common/baseCmp';
import { ContentHelper } from '../services/contentHelper';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  services: any;

  get GetContent() {
   return this.services;
  }

  SetContentParams(routeParams: any, content: any) {
    for (const services in content.services) {
      if (services === routeParams) {
      // console.log(content.services[services]);
      this.services = content.services[services];
      }
    }
  }
}
