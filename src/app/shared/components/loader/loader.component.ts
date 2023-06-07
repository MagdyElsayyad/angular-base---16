import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoading = new BehaviorSubject(false);
    
  constructor() { }
}

@Component({
  selector: 'mgmg-loader',
  templateUrl: './loader.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loading: boolean = true;

  constructor(private loaderService: LoaderService) {

    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }
  ngOnInit(): void {
  }

}
