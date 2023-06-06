import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FlowbiteModule } from 'flowbite-angular';

@Component({
  selector: 'mgmg-topbar',
  standalone: true,
  imports: [CommonModule, FlowbiteModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
ngOnInit(): void {
  
}
}
