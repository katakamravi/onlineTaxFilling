import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  userForm: any;

  constructor(  private _servicesService: ServicesService,  private fb: FormBuilder,) {
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
