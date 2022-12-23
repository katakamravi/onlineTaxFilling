import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataHandlerService } from 'src/app/services/dataHandler.service';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.scss']
})
export class NewHomeComponent implements OnInit {

  constructor(private _router: Router,private _dataHandlerService: DataHandlerService) { }

  ngOnInit(): void {
  }

  onUpdateServices(data: any) {
    this._router.navigate(['services'], { queryParams: { page: data } });
    this._dataHandlerService.UpdateServicesData(data);
    }

}
