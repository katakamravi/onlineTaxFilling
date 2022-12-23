import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/common/baseCmp';
import { ContentHelper } from 'src/app/services/contentHelper';
import { WindowRef } from 'src/app/services/windowRef.service';
import { DataHandlerService } from '../../services/dataHandler.service';
import { ContentService } from '../content.service';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-new-services',
  templateUrl: './new-services.component.html',
  styleUrls: ['./new-services.component.scss']
})
export class NewServicesComponent extends BaseComponent implements OnInit {
  services: any;
  serviceName: any;
  userForm: FormGroup;
  razorPay: any;
  rzp1: any;
  _responseRazor: any;
  razorPayOptions = {
    key: '',
    amount: '',
    currency: 'INR',
    name: '',
    description: '',
    order_id: '',
    handler: (res: any) => {
      console.log(res);
    }
  };
  constructor(private _route: ActivatedRoute, @Inject(ContentHelper) private _contentHelper: ContentHelper,
  private fb: FormBuilder, private _contentService: ContentService, private _dataHandlerService: DataHandlerService,
   private _servicesService: ServicesService,  private winRef: WindowRef, private _router: Router) {
    super(_route, _contentHelper, 'services');
    this._route.queryParamMap
  .subscribe((params: any) => {
   this.serviceName = params.params.page;
  }
);
this.userForm = this.fb.group({
  userName: ['', Validators.required],
  userEmail: ['', Validators.required],
  userMobile: ['', Validators.required],
  userTerms: [false, Validators.required],
  amount: [''],
  state: ['']
 });
   }

  ngOnInit(): void {
    this._dataHandlerService.updateService$.subscribe(res => {
      this.services = res;
      console.log(this.services);
      window.scrollTo(0, 0);
    })
    this._contentService.SetContentParams(this.serviceName, this.content);
    this._dataHandlerService.setContent(this.content);
    // console.log(this._contentService.GetContent);
    this.services = this._contentService.GetContent;
}

onGoToDetail() {
  // this.router.navigate(['']);
}

submitUser(): void {
  this.userForm.value.amount = this.services.Amount;
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

 get razorPayResponseHandler() {
   return this._responseRazor;
 }

 initPay(): void {
  this.rzp1 = new this.winRef.nativeWindow.Razorpay(this.razorPayOptions);
  this.rzp1.open();
}


onUpdateServices(data: any) {
  this._router.navigate(['services'], { queryParams: { page: data } });
  this._dataHandlerService.UpdateServicesData(data);
  }

}
