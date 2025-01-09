import { Component, EventEmitter, Output } from '@angular/core';
import { MyAdsComponent } from '../my-ads/my-ads.component';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-body',
  imports: [MyAdsComponent,MyHeaderComponent,FormsModule],
  templateUrl: './my-body.component.html',
  styleUrl: './my-body.component.css'
})
export class MyBodyComponent {
  ad1="Colgate"
  ad2="Pepsudent"
  y1=""
  @Output()
  getData = new  EventEmitter();

  SendData(data:any){
    this.getData.emit(data);
    this.y1="asdasd"
  }
}
