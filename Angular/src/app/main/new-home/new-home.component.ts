import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataHandlerService } from 'src/app/services/dataHandler.service';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.scss']
})
export class NewHomeComponent implements OnInit {
  userForm: FormGroup;

  constructor(private _router: Router,private _dataHandlerService: DataHandlerService, 
    private _servicesService: ServicesService,  private fb: FormBuilder,) {
      this.userForm = this.fb.group({
        userName: ['', Validators.required],
        // userEmail: ['', Validators.required],
        userMobile: ['', Validators.required],
        userTerms: [false, Validators.required],
        userMessage: [''],
        state: ['']
       });
     }

  ngOnInit(): void {
  }

  onUpdateServices(data: any) {
    this._router.navigate(['services'], { queryParams: { page: data } });
    this._dataHandlerService.UpdateServicesData(data);
    }

    submitUser(): void {
      // this.userForm.value.amount = this.services.Amount;
      this._servicesService.execute(this.userForm.value).subscribe((response: any) => {
      console.log(response);
      // this._responseRazor = response;
      // this.razorPayOptions.key =  response.key;
      // this.razorPayOptions.amount = response.value.amount;
      // this.razorPayOptions.name = this.userForm.value.userName;
      // this.razorPayOptions.order_id = response.value.id;
      // this.razorPayOptions.handler = this.razorPayResponseHandler;
      // this.initPay();
      });
      }

}
