import { Component } from '@angular/core';
import { MyAdsComponent } from '../my-ads/my-ads.component';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-my-body',
  imports: [MyAdsComponent,MyHeaderComponent],
  templateUrl: './my-body.component.html',
  styleUrl: './my-body.component.css'
})
export class MyBodyComponent {
  ad1="Colgate"
  ad2="Pepsudent"
}
