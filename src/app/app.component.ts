import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'To-Do List ';
  index=0;
   inputval;
   collecteddata=[];

   onClick(event)
   {
     this.collecteddata.push(this.inputval);
     this.inputval = '';
     console.log(this.collecteddata);
   }

}
