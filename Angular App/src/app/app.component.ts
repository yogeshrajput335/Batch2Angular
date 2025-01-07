import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyBodyComponent } from './my-body/my-body.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MyHeaderComponent,MyBodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-batch2';
}
