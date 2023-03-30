import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import { Picture } from './model/picture';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Picture Grid';
}
