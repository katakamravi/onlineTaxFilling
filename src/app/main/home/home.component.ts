import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/common/baseCmp';
import { ContentHelper } from 'src/app/services/contentHelper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {

  constructor(private _route: ActivatedRoute, @Inject(ContentHelper) private _contentHelper: ContentHelper) {
    super(_route, _contentHelper, 'home');
   }

  ngOnInit(): void {
    console.log(this.content);
  }

}
