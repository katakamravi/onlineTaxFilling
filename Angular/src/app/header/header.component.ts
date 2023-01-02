import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataHandlerService } from '../services/dataHandler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _dataHandlerService: DataHandlerService, private router: Router) { }


  ngOnInit(): void {
  }

  onUpdateServices(data: any) {
  this.router.navigate(['services'], { queryParams: { page: data } });
  this._dataHandlerService.UpdateServicesData(data);
  }

  onRouterNavigate(data?: any) {
    this.router.navigate([data]);
  }
  
}
