import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/common/baseCmp';
import { ContentHelper } from 'src/app/services/contentHelper';
import { WindowRef } from 'src/app/services/windowRef.service';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent extends BaseComponent implements OnInit {
  services: any;
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
              private fb: FormBuilder, private _servicesService: ServicesService, private winRef: WindowRef) {
    super(_route, _contentHelper, 'services');
    this.userForm = this.fb.group({
     userName: ['', Validators.required],
     userEmail: ['', Validators.required],
     userMobile: ['', Validators.required],
     userTerms: [false, Validators.required],
     amount: ['']
    });
   }

  ngOnInit(): void {
    for (const services in this.content.services) {
    if (services === this._route.snapshot.queryParams.services) {
    console.log(this.content.services[services]);
    this.services = this.content.services[services];
    }
  }
  //  this.services = this.content;
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
}
