import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  value = "../../assets/gameplay.mp4";

  ngOnInit() {
    this.value = "../../assets/gameplay.mp4";
  }

}

