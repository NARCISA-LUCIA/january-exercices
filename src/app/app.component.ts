import { Component, OnInit } from '@angular/core';
import { Month } from 'src/app/model/month';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'january-exercices';

  constructor() {
    this.monthCheckStarter();
  }

  monthCheckStarter() {
    let january: Month = new Month();
    january.monthNumber = 1;
    january.name = 'january';

    let february: Month = new Month();
    february.monthNumber = 2;
    february.name = 'february';

    let march: Month = new Month();
    march.monthNumber = 3;
    march.name = 'march';

    let april: Month = new Month();
    april.monthNumber = 4;
    april.name = 'april';

    let may: Month = new Month();
    may.monthNumber = 5;
    may.name = 'may';

    let june: Month = new Month();
    june.monthNumber = 6;
    june.name = 'june';

    let july: Month = new Month();
    july.monthNumber = 7;
    july.name = 'july';

    let august: Month = new Month();
    august.monthNumber = 8;
    august.name = 'august';

    let september: Month = new Month();
    september.monthNumber = 9;
    september.name = 'september';

    let october: Month = new Month();
    october.monthNumber = 10;
    october.name = 'october';

    let november: Month = new Month();
    november.monthNumber = 11;
    november.name = 'november';

    let december: Month = new Month();
    december.monthNumber = 12;
    december.name = 'december';

    let array: Month[] = [january, february, march, april, may, june, july, august, september, october, november,december];
 
    this.monthCheckNumber(array, 1);
    this.monthCheckName(array, 'june');
  }

  monthCheckNumber(monthArray: Month[], monthNumber: number): void {
    for (let i = 0; i < monthArray.length; i++) {
      if (monthArray[i].monthNumber == monthNumber) {
        console.log('first method: month ' + monthArray[i].name);
      } else {
        console.log('The month didnt match');
      }
    }
  }

  monthCheckName(monthArray: Month[], name: string): void { 
    for (let i = 0; i < monthArray.length; i++) { 
      if (monthArray[i].name == name) {
        console.log("second method: the month name is: "+ monthArray[i].name + " " + monthArray[i].monthNumber);
      } else { 
        console.log("the number didnt match");
        
      }
    }
  }

  
}

/*1. 
Creaza o clasa cu numele Month, care sa aiba 2 variabile la nivel de clasa: 
    - name de tip string (numele lunii, ex. august)
    - monthNumber int (nr lunii, ex. martie are 3)
 
Creeaza apoi o clasa JavaFive in care ai metoda main. In main creeaza un array de obiecte de tip Month cu lunile anului.
 Array-ul va avea deci 12 obiecte de tip Month;
 
 Apoi creeaza o metoda noua in JavaFive care ia ca parametru array-ul definit mai sus si un numar. Metoda va parcurge 
 array-ul si daca gaseste un obiect care are numarul trimis atunci afiseaza numele lunii;
 
 Semnatura va fi cam asa: private static void monthNumberCheck(String[] monthArray, int numberToCheck)
 
 Similar, creeaza o noua metoda monthNameToCheck(String[] monthArray, String monthName) care va parcurge array-ul si 
 va afisa numarul lunii daca gaseste numele metodei*/
