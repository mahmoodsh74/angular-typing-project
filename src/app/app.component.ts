import {Component} from '@angular/core';
import {faker} from '@faker-js/faker'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText: string = faker.lorem.paragraph();
  // result: boolean = false;
  inputText: string = '';

  onChangeInput(text: string) {
    /*   if (text === this.randomText) {
         this.result = true;
       } else {
         this.result = false;
       }*/
    this.inputText = text;
  }

  compare(letterRandom: string, letterEnter: string): string {
    if (!letterEnter) {
      return "pending";
    }
    return letterRandom === letterEnter ? 'correct' : 'incorrect';
  }
}
