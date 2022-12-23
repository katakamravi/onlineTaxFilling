import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoToDetail() {
    this.router.navigate(['']);
  }
}
