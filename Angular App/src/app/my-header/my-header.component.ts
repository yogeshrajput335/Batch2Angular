import { Component } from '@angular/core';
import { MyAdsComponent } from '../my-ads/my-ads.component';

@Component({
  selector: 'app-my-header',
  imports: [MyAdsComponent],
  templateUrl: './my-header.component.html',
  styleUrl: './my-header.component.css'
})
export class MyHeaderComponent {
  test="Government"
  show(){
    console.log('asd')
  }
}
