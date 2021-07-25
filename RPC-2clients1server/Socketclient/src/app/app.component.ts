import { Component, OnInit } from '@angular/core';
import { SocketclientService } from './socketclient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'socketclient';
  constructor(private socketcluster:SocketclientService) {
    
  }
  ngOnInit(): void {
  
  }
  
}
