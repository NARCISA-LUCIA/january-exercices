import { Component, OnInit } from '@angular/core';
import { Month } from 'src/app/model/month';
import { Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'january-exercices';

  constructor() {
    //this.monthCheckStarter();
    //this.employeeListStarter();
    // this.duplicateElementArrayStarter();
    // this.checkIfNumberIsPrimeStarter();
    // this.showInReverseArrayStarter();
    // this.checkTheSameIntegersStarter();
    //this.testNumberStarter();
    // this.largestElementArrayStarter();
    //this.multiplyIntegersArrayStarter();
    //console.log("orice constructor");
    //this.calculateTheSumOfDigitsStarter();
    //this.countNumberStarter();
    // this.nextToNextElementArrayStarter();
    //this.testArrayIntegersStarter();
    //this.checkLaterArrayIntegersStarter();
    //this.checkGreaterNumberStarter();
    // this.checkPalindromNumberStarter();
    // this.firstOccurenceStarter();
    //this.longestStringArrayStarter();
    //this.printsOddElementStarter();
    //this.primeElementStarter();
    //this.methodFibonacciStarter();
    // this.switchCaseStarter();
    //this.nestedIfStarter();
    this.doubleElementArrayStarter();
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
    //this.monthCheckNumberV2(array, 1);
    this.monthCheckNameV2(array, 'june');
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

  monthCheckNumberV2(monthArray: Month[], monthNumber: number): void {
    monthArray.forEach((numArray) => {
      if (numArray.monthNumber == monthNumber) {
        console.log('first method: month ' + numArray.name);
      } else {
        console.log('The month didnt match');
      }
    });
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

  monthCheckNameV2(monthArray: Month[], name: string): void {
    monthArray.forEach((nameArray) => {
      if (nameArray.name == name) {
        console.log(
          'second method: the month name is: ' +
            nameArray.name +
            ' ' +
            nameArray.monthNumber
        );
      } else {
        console.log('the numberv2 didnt match');
      }
    });
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
    this.listEmployeesWhoAreClosedToRetirementV2(arrayEmployee, 70);
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

  listEmployeesWhoAreClosedToRetirementV2(
    employeeArray: Employee[],
    retirementAge: number
  ): void {
    employeeArray.forEach((employeeV2) => {
      if (employeeV2.age < retirementAge - 10) {
        console.log(
          'Close to retirement nameV2: ' +
            employeeV2.firstName +
            ' ' +
            employeeV2.secondName +
            ' ' +
            employeeV2.age
        );
      } else {
        console.log('didnt match retirementV2');
      }
    });
  }

  //3. Ai un array cu elemente care se repetă. Afișează elementele duplicat.
  // De ex la un array ca {1,2,3,4,5,6,2}  va fi afișat 2

  doubleElementArrayStarter() {
    let arrayElement: number[] = [1,2,3,4,5,6,2];
    this.doubleElementArray(arrayElement);
  }

  doubleElementArray(array: number[]):void {
    let doubleFound = false;
    for (let i = 0; i < array.length; i++){
      for (let j = i + 1; j < array.length; j++){
        if (array[i] == array[j]) {
          doubleFound = true;
          console.log("the double number is: " + array[j]);
        }
      }
    }
    if (!doubleFound) {
      console.log("dont exist double in array");
      
    }
  }

  duplicateElementArrayStarter() {
    let arrayElement: number[];
    arrayElement = [1, 2, 3, 1];
    this.duplicateElementArray(arrayElement);
    // this.duplicateElementArrayWhile(arrayElement);
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

  // 5. Clasa JavaEight. Creează o metodă showInReverse(int[] intArray) care primește ca parametru
  // un array de integers si va afișa array ul in sens invers.
  // Creează încă o metodă care va face același lucru dar cu while în loc de for.
  // Ex. [1,2,3,4,5] va afișa 5,4,3,2,1

  showInReverseArrayStarter() {
    let arrayReverse: number[] = [1, 2, 3, 4, 5];
    this.showInReverseArray(arrayReverse);
  }

  showInReverseArray(numberArray: number[]): void {
    // for (let i = numberArray.length - 1; i >= 0; i--) {
    //   console.log("number reverse is: " + numberArray[i]);
    // }

    let i = numberArray.length - 1;
    while (i >= 0) {
      console.log('while version: ' + numberArray[i]);
      i--;
    }
  }

  // 6. Creeaza o metoda care sa verifice daca un numar este prim. Foloseste while pentru implementare.

  checkIfNumberIsPrime(primeNumber: number): void {
    let i = 2;
    let isPrimeNumber = true;
    while (i < primeNumber) {
      if (primeNumber % 2 == 0) {
        isPrimeNumber = false;
      }
      i++;
    }
    if (isPrimeNumber == false) {
      console.log('the prime number ' + primeNumber + ' is not prime ');
    } else {
      console.log('the number ' + primeNumber + ' is prime');
    }
  }

  // 7. Write a Java program to test if the first and the last element of an array of integers are same.
  //The length of the array must be greater than or equal to 2.
  // Test Data: array = 50, -20, 0, 30, 40, 60, 10
  // Sample Output: false

  checkTheSameIntegersStarter() {
    let array: number[] = [50, -20, 0, 30, 40, 60, 10];
    this.checkTheSameIntegers(array);
  }
  checkTheSameIntegers(numberArray: number[]): void {
    for (let i = 0; i < numberArray.length; i++) {
      if (numberArray[0] == numberArray[numberArray.length - 1]) {
        console.log('true');
      } else {
        console.log('false');
      }
    }
  }

  // 8. Write a Java program to test that a given array of integers of length 2 contains a 4 or a 7.
  // Sample Output:
  // Original Array: [5, 7]
  // true

  testNumberStarter() {
    let numberArray: number[] = [5, 7];
    //this.testNumber(numberArray);
    this.testNumberV2(numberArray);
  }

  testNumber(number: number[]): void {
    for (let i = 0; i < number.length; i++) {
      if (number[i] == 4 || number[i] == 7) {
        console.log('true');
      } else {
        console.log('false');
      }
    }
  }

  testNumberV2(number: number[]): void {
    number.forEach((num) => {
      if (num == 4 || num == 7) {
        console.log('true');
      } else {
        console.log('false');
      }
    });
  }

  // 9. Write a Java program to find the largest element between first, last, and middle values from an array
  // of integers(even length).
  // Sample Output:
  // Original Array: [20, 30, 40, 50, 67]
  // Largest element between first, last, and middle values: 67

  largestElementArrayStarter() {
    let elementArray: number[] = [20, 30, 40, 50, 67];
    this.largestElementArray(elementArray);
  }
  largestElementArray(numberArray: number[]): void {
    let firstElement = numberArray[0];
    let middleElement = numberArray[numberArray.length / 2];
    let lastElement = numberArray[numberArray.length - 1];
    if (firstElement > middleElement && firstElement > lastElement) {
      console.log(' the first element si max: ' + firstElement);
    }
    if (middleElement > firstElement && middleElement > lastElement) {
      console.log(' the middle element is max: ' + middleElement);
    } else {
      console.log(' the largest element is ' + lastElement);
    }
  }

  // 10. Write a Java program to multiply corresponding elements of two arrays of integers.
  // Sample Output:
  // Array1: [1, 3, -5, 4]
  // Array2: [1, 4, -5, -2]
  // Result: 1 12 25 -8

  multiplyIntegersArrayStarter() {
    let array1: number[] = [1, 3, -5, 4];
    let array2: number[] = [1, 4, -5, -2];
    //this.multiplyIntegersArray(array1, array2);
  }

  multiplyIntegersArray(numberArray1: number[], numberArray2: number[]): void {
    for (let i = 0; numberArray1.length; i++) {
      let number1 = numberArray1[i];
      let number2 = numberArray2[i];
      let result = number1 * number2;
      console.log('The result is: ' + result);
    }
  }

  // 11. Write a Java program than read an integer and calculate the sum of its digits and write the number of each
  // digit of the sum in English

  calculateTheSumOfDigitsStarter() {
    let numbers = 56789;
    this.calculateTheSumOfDigits(numbers);
  }

  calculateTheSumOfDigits(numberToCheck: number): void {
    let sum = 0;
    let digits = 0;

    for (sum = 0; numberToCheck != 0; numberToCheck = numberToCheck / 10) {
      sum = sum + (numberToCheck % 10);
    }
    console.log('sum of digits is: ' + sum);

    // while (numberToCheck > 0) {
    //   digits = numberToCheck % 10;
    //   sum = sum + digits;
    //   numberToCheck = numberToCheck / 10;
    //   console.log('each digit is :' + digits);
    // }
    // console.log('sum of digits is :' + sum);
  }

  // 12. Write a Java program to count the number of even and odd elements in a given array of integers
  // ex. numberArray = {1, 2, 3, 4, 5, 10, 20, 25}
  // sumEvenNumbers = 36
  // sumOddNumbers = 34

  countNumberStarter() {
    let numberArray: number[] = [1, 2, 3, 4, 5, 10, 20, 25];
    //this.countNumber(numberArray);
    //this.countNumberV2(numberArray);
  }

  countNumber(number: number[]): void {
    let sumEvenNumbers = 0;
    let sumOddNumbers = 0;
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < number.length; i++) {
      if (number[i] % 2 == 0) {
        sumEvenNumbers = sumEvenNumbers + number[i];
        evenCount++;
        console.log('sumEvenNumbers: ' + sumEvenNumbers);
      } else {
        sumOddNumbers = sumOddNumbers + number[i];
        oddCount++;
        console.log('sumOddNumbers: ' + sumOddNumbers);
      }
    }
  }

  countNumberV2(number: number[]): void {
    let sumEvenNumbers = 0;
    let sumOddNumbers = 0;
    let evenCount = 0;
    let oddCount = 0;
    number.forEach((num) => {
      if (num % 2 == 0) {
        sumEvenNumbers = sumEvenNumbers + num;
        evenCount++;
        console.log('sumEvenNumbers: ' + sumEvenNumbers);
      } else {
        sumOddNumbers = sumOddNumbers + num;
        oddCount++;
        console.log('sumOddNumbers: ' + sumOddNumbers);
      }
    });
  }

  // 13. Write a Java program to test if an array of integers contains an element 10 next to 10 or
  //an element 20 next to 20
  // ex. 1. numberArray = {10, 10, 1, 2}, result: array-ul contine 10 langa 10
  // ex. 2. numberArray = {1, 2, 3, 4, 20, 20}, result: array-ul contine 20 langa 20
  // ex. 3. numberArray = {1, 2, 3, 10, 10, 2, 5, 20, 20}, result: array-ul contine 10 langa 10 si 20 langa 20
  // ex. 4. numberArray = {10, 1, 10, 20, 3, 4, 6, 20 }, result: array-ul nu contine perechi de 10 sau 20

  nextToNextElementArrayStarter() {
    let numArray: number[] = [10, 10, 1, 2];
    //let numArray: number[] = [1, 2, 3, 4, 20, 20];
    //let numArray: number[] = [1, 2, 3, 10, 10, 2, 5, 20, 20];
    //let numArray: number[] = [10, 1, 10, 20, 3, 4, 6, 20];
    this.nextToNextElementArray(numArray);
  }
  nextToNextElementArray(numberNext: number[]): void {
    let next1010 = false;
    let next2020 = false;
    for (let i = 0; i < numberNext.length - 1; i++) {
      if (numberNext[i] == 10 && numberNext[i + 1] == 10) {
        next1010 = true;
      }
      if (numberNext[i] == 20 && numberNext[i + 1] == 20) {
        next2020 = true;
      }
    }
    if (next1010 == true && next2020 == true) {
      console.log('array contain 10 next 10 and 20 next 20');
    } else if (next1010 == true) {
      console.log('array contain 10 next 10');
    } else if (next2020 == true) {
      console.log('array contain 20 next 20');
    } else {
      console.log('array didnt contain pairs of 10 neighter pairs of 20');
    }
  }
  // 14. Write a Java program to test if an array of integers contains an element 10 next to 10
  // or an element 20 next to 20, but not both.

  testArrayIntegersStarter() {
    let nextArray: number[] = [10, 10, 15, 16, 20, 20];
    this.testArrayIntegers(nextArray);
  }

  testArrayIntegers(numberArray: number[]): void {
    let nextElement10 = false;
    let nextElement20 = false;

    for (let i = 0; i < numberArray.length - 1; i++) {
      if (numberArray[i] == 10 && numberArray[i + 1] == 10) {
        nextElement10 = true;
      }
      if (numberArray[i] == 20 && numberArray[i + 1] == 20) {
        nextElement20 = true;
      }
    }

    if (
      (nextElement10 == true && nextElement20 == false) ||
      (nextElement10 == false && nextElement20 == true)
    ) {
      console.log('only one pairs is present');
    } else if (nextElement10 == false && nextElement20 == false) {
      console.log('no element exists');
    }
  }

  // 15. Write a Java program to check if there is a 10 in a given array of integers with a 20 somewhere later
  // in the array.

  checkLaterArrayIntegersStarter() {
    let numberArray: number[] = [5, 10, 7, 15, 20];
    //this.checkLaterArrayIntegers(numberArray);
    this.checkLaterArrayIntegersV2(numberArray);
  }

  checkLaterArrayIntegers(integersArray: number[]): void {
    let next10 = false;
    let next20 = false;

    for (let i = 0; i < integersArray.length; i++) {
      if (integersArray[i] == 10) {
        next10 = true;
      }
      if (integersArray[i] == 20 && next10 == true) {
        next20 = true;
      }
    }
    if (next20 == true) {
      console.log('10 and 20 exist in this array');
    } else {
      console.log('10 and 20 doesnt exists');
    }
  }

  checkLaterArrayIntegersV2(integersArray: number[]): void {
    let next10 = false;
    let next20 = false;

    integersArray.forEach((num) => {
      if (num == 10) {
        next10 = true;
      }
      if (num == 20 && next10 == true) {
        next20 = true;
      }
      if (next20 == true) {
        console.log('V2: 10 and 20 exist in this array');
      } else {
        console.log('V2: 10 and 20 doesnt exists');
      }
    });
  }

  //16. Write a Java program to check if the number of 10s is greater than number to 20s in a given array of integers.

  checkGreaterNumberStarter() {
    let numberArray: number[] = [1, 10, 13, 16, 20];
    this.checkGreaterNumber(numberArray);
    this.checkGreaterNumberV2(numberArray);
  }

  checkGreaterNumber(greatNumber: number[]) {
    let result10 = 0;
    let result20 = 0;
    for (let i = 0; i < greatNumber.length; i++) {
      if (greatNumber[i] == 10) {
        result10++;
      }
      if (greatNumber[i] == 20) {
        result20++;
      }
    }

    if (result10 > result20) {
      console.log('It is true, 10 is greater than 20');
    } else {
      console.log('It is false, 10 is not greater than 20');
    }
  }

  checkGreaterNumberStarterV2() {
    let numberArray: number[] = [1, 10, 13, 16, 20];
    this.checkGreaterNumber(numberArray);
  }

  checkGreaterNumberV2(greatNumber: number[]) {
    let result10 = 0;
    let result20 = 0;
    greatNumber.forEach((numar) => {
      if (numar == 10) {
        result10++;
      }
      if (numar == 20) {
        result20++;
      }
    });
    if (result10 > result20) {
      console.log('It is true, 10 is greater than 20');
    } else {
      console.log('It is false, 10 is not greater than 20');
    }
  }

  // 17.Write a Java program to check if a positive number is a palindrome or not.
  // ex. Input a positive integer: 151
  // result: 151 is a palindrome number

  checkPalindromNumberStarter() {
    let num = 151;
    this.checkPalindromNumber(num);
  }

  checkPalindromNumber(number: number): void {
    let reverse = 0;
    let reminder = 0;
    let element = number;
    while (number != 0) {
      reminder = Math.trunc(number % 10);
      console.log('reminder = ' + reminder);
      reverse = (reverse * 10) + reminder;
      number = number / 10;
      console.log('reverse in while = ' + reverse);
    }
    console.log('reverse = ' + reverse + ' element = ' + element);
    if (element == reverse) {
      console.log('the number 151 it is a palindrom');
    } else {
      console.log('the number is not a palindrom');
    }
  }

  //18. Write a Java program to get the first occurrence (Position starts from 0.) of a string within a given string

  firstOccurenceStarter() {
    let first1: string = 'carti';
    let second2: string = 'cartile';
    this.firstOccurence(first1, second2);
  }

  firstOccurence(firstString: string, secondString: string): number {
    if (
      firstString == null ||
      secondString == '' ||
      secondString == null ||
      firstString == ''
    ) {
      return -1;
    }
    if (secondString.length > firstString.length) {
      return -1;
    }

    for (let i = 0; i < firstString.length; i++) {
      if (firstString.charAt(i) == secondString.charAt(0)) {
        if (secondString.length > firstString.length - i) {
          return -1;
        } else {
          let firstStringContainsTheSecond = false;
          for (let j = 0; j < secondString.length; i++) {
            if (secondString.charAt(j) == firstString.charAt(i + j)) {
              firstStringContainsTheSecond = true;
            } else {
              firstStringContainsTheSecond = false;
            }
          }
          if ((firstStringContainsTheSecond = true)) {
            return i;
          }
        }
      }
    }
    return -1;
  }

  // 19. Write a Java program to find the longest string in an array of strings
  // ex. {"abc", "abcds", "abcdpew", "asa"}
  // result: "abcdpew"

  longestStringArrayStarter() {
    let stringArray: string[] = ['abc', 'abcds', 'abcdpew', 'asa'];
    //this.longestStringArray(stringArray);
    this.longestStringArrayV2(stringArray);
  }

  longestStringArray(findStringArray: string[]): void {
    let longestString = findStringArray[0].length;
    let lengthString = 0;
    let result = '';
    for (let i = 0; i < findStringArray.length; i++) {
      lengthString = findStringArray[i].length;
      if (lengthString > longestString) {
        longestString = lengthString;
        result = findStringArray[i];
      }
    }
    console.log('result ' + result);
  }

  longestStringArrayV2(findStringArray: string[]): void {
    let longestString = findStringArray[0].length;
    let lengthString = 0;
    let result = '';
    findStringArray.forEach((num) => {
      lengthString = num.length;
      if (lengthString > longestString) {
        longestString = lengthString;
        result = num;
      }
    });
    console.log('result V2: ' + result);
  }

  // 20. Write a method that prints the nth odd element of a list.
  // ex. 1, 2, 3, 4, 5, 6, 7, 8 - and n=3 then it will print 5 (al treilea numar impar)

  printsOddElementStarter() {
    let oddElement: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    //this.printsOddElement(oddElement, 3);
    this.printsOddElementV2(oddElement, 3);
  }

  printsOddElement(oddNumberArray: number[], n: number): void {
    let oddCount = 0;
    for (let i = 0; i < oddNumberArray.length; i++) {
      if (oddNumberArray[i] % 2 != 0) {
        oddCount = oddCount + 1;
        if (oddCount == n) {
          console.log(oddNumberArray[i]);
        }
      }
    }
  }

  printsOddElementV2(oddNumberArray: number[], n: number): void {
    let oddCount = 0;
    oddNumberArray.forEach((num) => {
      if (num % 2 != 0) {
        oddCount = oddCount + 1;
        if (oddCount == n) {
          console.log(num);
        }
      }
    });
  }

  //   21. write a method that will print the nth prime element of an array.
  // ex. 1, 2, 3, 4, 5, 6, 7, 9, 10, 11 and n=4 will print 7

  primeElementStarter() {
    let primeArray: number[] = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11];
    //this.primeElement(primeArray, 4);
    this.primeElementV2(primeArray, 4);
  }

  primeElement(primeNumberArray: number[], nthPrime: number): void {
    let count = 0;
    for (let i = 0; i < primeNumberArray.length; i++) {
      let isPrimeNumber = this.isPrime(primeNumberArray[i]);
      if (isPrimeNumber == true) {
        count++;
        if (count === nthPrime) {
          console.log(
            ' ****************The prime element is: ' + primeNumberArray[i]
          );
        }
      }
    }
  }

  primeElementV2(primeNumberArray: number[], nthPrime: number): void {
    let count = 0;
    primeNumberArray.forEach((num) => {
      let isPrimeNumber = this.isPrime(num);
      if (isPrimeNumber == true) {
        count++;
        if (count === nthPrime) {
          console.log(' V2: ****************The prime element is: ' + num);
        }
      }
    });
  }

  isPrime(numberPrime: number): boolean {
    let isPrimeNumber = true;
    let j = 2;
    while (j < numberPrime) {
      if (numberPrime % j == 0) {
        isPrimeNumber = false;
      }
      j++;
    }
    return isPrimeNumber;
  }

  // 22. Write a method that returns the nth element of the Fibonacci Sequence
  // The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...
  // The next number is found by adding up the two numbers before it.
  // Assume that indexes start at zero, e.g., fib(0) = 0, fib(1) = 1, ...
  // ex. n=5 will print 3

  methodFibonacciStarter() {
    this.methodFibonacci(5);
  }

  methodFibonacci(numberFib: number): void {
    let previousFibonacci = 0;
    let currentFibonacci = 1;
    for (let i = 2; i < numberFib; i++) {
      let newFib = previousFibonacci + currentFibonacci;
      previousFibonacci = currentFibonacci;
      currentFibonacci = newFib;
    }
    console.log('The current fibonacci is: ' + currentFibonacci);
  }

  // 23. Write a program which prints "ONE", "TWO",... , "NINE", "OTHER" if the int variable is 1, 2,... , 9,
  // or other, respectively.Use(a) a "nested-if" statement; (b) a "switch-case-default" statement.
  // ex. the method parameter is 3, then will print THREE

  switchCaseStarter() {
    this.switchCase(9);
  }

  switchCase(numbers: number): void {
    switch (numbers) {
      case 1:
        console.log('print: ' + 'one');
        break;
      case 2:
        console.log('print: ' + 'two');
        break;
      case 3:
        console.log('print:: ' + 'three');
        break;
      case 4:
        console.log('print: ' + 'four');
        break;
      case 5:
        console.log('print: ' + 'five');
        break;
      case 6:
        console.log('print: ' + 'six');
        break;
      case 7:
        console.log('print: ' + 'seven');
        break;
      case 8:
        console.log('print: ' + 'eight');
        break;
      case 9:
        console.log('print: ' + 'nine');
        break;
      default:
        console.log('print ' + 'other');
    }
  }

  nestedIfStarter() {
    this.nestedIfStatement(7);
  }
  nestedIfStatement(numbers: number): void {
    if (numbers == 1) {
      console.log('print ' + 'one');
    } else if (numbers == 2) {
      console.log('print ' + 'two');
    } else if (numbers == 3) {
      console.log('print ' + 'three');
    } else if (numbers == 4) {
      console.log('print ' + 'four');
    } else if (numbers == 5) {
      console.log('print ' + 'five');
    } else if (numbers == 6) {
      console.log('print ' + 'six');
    } else if (numbers == 7) {
      console.log('print ' + 'seven');
    } else if (numbers == 8) {
      console.log('print ' + 'eight');
    } else if (numbers == 9) {
      console.log('print ' + 'nine');
    } else {
      console.log('print ' + 'other');
    }
  }
}
