import { Inject, Injectable } from '@angular/core';
import { ContentService } from '../main/content.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService{

  updateService$: BehaviorSubject<any>;
  content: any;
  constructor(private _contentService: ContentService) { 
    this.updateService$ = new BehaviorSubject({});
  }

 public UpdateServicesData(data: any) {
    this._contentService.SetContentParams(data, this.content);
    this.updateService$.next(this._contentService.GetContent);
 }

 setContent(content: any) {
  this.content = content;
 }
}
