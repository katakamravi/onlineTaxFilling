import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/common/baseCmp';
import { ContentHelper } from 'src/app/services/contentHelper';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent extends BaseComponent implements OnInit {
  services: any;
  constructor(private _route: ActivatedRoute, @Inject(ContentHelper) private _contentHelper: ContentHelper) {
    super(_route, _contentHelper, 'services');
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

}
