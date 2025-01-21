import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyBodyComponent } from './my-body/my-body.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RestFreeApiService } from './services/rest-free-api.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MyHeaderComponent,MyBodyComponent,CommonModule],
  //providers:[RestFreeApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  data:any
  private mySubscription: Subscription = new Subscription();
  //data$: any =[]
  constructor(private restsvr:RestFreeApiService){}
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.mySubscription = this.restsvr.getRestData().subscribe(x=>{
      this.data = x
    })
  }
  title = 'my-batch2';

  findData(event:any){
    this.title = event;
  }
}
