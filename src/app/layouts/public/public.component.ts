import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';

@Component({
  selector: 'mgmg-public',
  standalone: true,
  imports: [CommonModule, RouterModule, TopbarComponent, FooterComponent],
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {

}
