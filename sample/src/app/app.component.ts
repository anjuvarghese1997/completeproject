import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'sample';

  greeting(){
    let t=9
    if(t<10){
      alert("GOOD MORNING")
    }
    else if(t>12){
      alert("GOOD AFTERNOON")
      }

    else{
      alert("GOOD DAY")
    }



  }
array= ""
  numbers(){
   
    for(let i=0;i<10;i++){
    this.array += i;
    }

  }
  




}
