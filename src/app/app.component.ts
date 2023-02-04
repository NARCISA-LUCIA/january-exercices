import { Component, OnInit } from '@angular/core';
import { Month } from 'src/app/model/month';
import { Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'january-exercices';

  constructor() {
    //this.monthCheckStarter();
    //this.employeeListStarter();
    this.duplicateElementArrayStarter();
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

    let array: Month[] = [
      january,
      february,
      march,
      april,
      may,
      june,
      july,
      august,
      september,
      october,
      november,
      december,
    ];

    //this.monthCheckNumber(array, 1);
    //this.monthCheckName(array, 'june');
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
        console.log(
          'second method: the month name is: ' +
            monthArray[i].name +
            ' ' +
            monthArray[i].monthNumber
        );
      } else {
        console.log('the number didnt match');
      }
    }
  }

  /*2.
Creeaza o clasa Employee care sa aiba urmatoarele field-uri: firstName, secondName, age,
jobName, jobDescription
Creeaza apoi o clasa JavaSix care sa aiba "public static void main(String[] args)" in ea.
In JavaSix mai creeaza o metoda: 
private static void listEmpoloyeesWhoHaveRetirement(Employee[] employeeArray, int retirementAge).
Metoda asta va parcurge emploeeArray si va afisa firstName si secondName al angajatului care are varsta egala
cu retirementAge.  
In JavaSix creeaza inca o metoda:
private static void listEmpoloyeesWhoAreClosToRetirement(Employee[] employeeArray, int retirementAge).
Ca si metoda precedenta, metoda asta va parcurge employeeArray, dar va afisa doar angajatii care au varsta mai mica
cu cel mult 10 ani fata de retirment age. Foloseste while in loc de for*/

  employeeListStarter() {
    let employee1: Employee = new Employee();
    employee1.firstName = 'John';
    employee1.secondName = 'Doe';
    employee1.age = 53;
    employee1.jobName = 'tester';
    employee1.jobDescription = 'check bugs';

    let employee2: Employee = new Employee();
    employee2.firstName = 'Andreea';
    employee2.secondName = 'Boccelli';
    employee2.age = 70;
    employee2.jobName = 'musician';
    employee2.jobDescription = 'sing songs';

    let employee3: Employee = new Employee();
    employee3.firstName = 'Mary';
    employee3.secondName = 'Ann';
    employee3.age = 60;
    employee3.jobName = 'writer';
    employee3.jobDescription = 'writes books';

    let employee4: Employee = new Employee();
    employee4.firstName = 'Michelle';
    employee4.secondName = 'Joan';
    employee4.age = 45;
    employee4.jobName = 'programmer';
    employee4.jobDescription = 'develop programms';

    let arrayEmployee: Employee[] = [
      employee1,
      employee2,
      employee3,
      employee4,
    ];

    // this.listEmployeesWhoHaveRetirement(arrayEmployee, 60);
    // this.listEmployeesWhoAreClosedToRetirement(arrayEmployee, 70);
  }

  listEmployeesWhoHaveRetirement(
    employeeArray: Employee[],
    retirementAge: number
  ): void {
    let i = 0;
    while (i < employeeArray.length) {
      if (employeeArray[i].age == retirementAge) {
        console.log(
          'The first name and second name is: ' +
            employeeArray[i].firstName +
            ' ' +
            employeeArray[i].secondName
        );
      } else {
        console.log('didnt work');
      }
      i++;
    }
  }

  listEmployeesWhoAreClosedToRetirement(
    employeeArray: Employee[],
    retirementAge: number
  ): void {
    for (let i = 0; i < employeeArray.length; i++) {
      if (employeeArray[i].age < retirementAge - 10) {
        console.log(
          'Close to retirement name: ' +
            employeeArray[i].firstName +
            ' ' +
            employeeArray[i].secondName +
            ' ' +
            employeeArray[i].age
        );
      } else {
        console.log('didnt match retirement');
      }
    }
  }
// Exercice
  //3. Ai un array cu elemente care se repetă. Afișează elementele duplicat.
  // De ex la un array ca {1,2,3,4,5,6,2}  va fi afișat 2

  duplicateElementArrayStarter() {
    let arrayElement: number[];
    arrayElement = [1, 2, 3, 1];
    // this.duplicateElementArray(arrayElement);
    this.duplicateElementArrayWhile(arrayElement);
  }

  duplicateElementArray(array: number[]): void {
    let duplicatesFound = false;
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
          duplicatesFound = true;
          console.log('duplicate number: ' + array[j]);
        }
      }
    }
    if (!duplicatesFound) {
      console.log('no duplicates found in array');
    }
  }

  //4. Clasa JavaSeven. Problema 3 dar implementata cu while
  duplicateElementArrayWhile(array: number[]): void {
    let i = 0;
    let flag = false;
    while (i < array.length) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
          flag = true;
          console.log('duplicate number with while is: ' + array[j]);
        }
      }
      i++;
    }
    if (!flag) {
      console.log('No duplicates');
    }
  }
}
