import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/common/baseCmp';
import { ContentHelper } from 'src/app/services/contentHelper';
import { DataHandlerService } from 'src/app/services/dataHandler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {
 images = [
  {path: 'http://www.uptra.in/images/banner/image-3.jpg'},
  {path: 'http://www.uptra.in/images/banner/image-3.jpg'},
  {path: 'http://www.uptra.in/images/banner/image-3.jpg'},
  {path: 'http://www.uptra.in/images/banner/image-3.jpg'}
 ];
  constructor(private _route: ActivatedRoute,private _router: Router,private _dataHandlerService: DataHandlerService, @Inject(ContentHelper) private _contentHelper: ContentHelper) {
    super(_route, _contentHelper, 'home');
   }

  ngOnInit(): void {
    console.log(this.content);
  }
  readMore(service: any) {
    const serviceName = service.title.replace(/\s/g, '');
    this._router.navigate(['/services'], { queryParams: { services: serviceName} });
  }

  
  onUpdateServices(data: any) {
    this._router.navigate(['services'], { queryParams: { page: data } });
    this._dataHandlerService.UpdateServicesData(data);
    }
}
