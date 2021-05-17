import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thecodebays';

  scrolltopos(x){
    console.log("scroller called")
    window.scrollBy({top: x, left: 0, behavior: 'smooth'});
  }
  ngOnInit(){
  }
}
