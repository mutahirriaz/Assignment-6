// JavaScript Assignment 

// ...Chapter 21-25

// Question No 1

// var firstname = prompt("Enter your first name");
// var secondname = prompt("Enter your last name");
// var fullname = firstname+secondname
// alert(fullname);

// Question No 2

// var favmobile = prompt("Enter your favourite mobile");
// var mobile = favmobile.length
// document.write("My favourite phone is: " +  favmobile +"<br>");
// document.write("Length of string: " + mobile);

// Question No 3

// var pakistan = "Pakistani";
// var a = pakistan.indexOf("n");
// document.write("String: " + pakistan +"<br>");
// document.write("Index of n: " + a);

// Question No 4

// var helloworld = ("Hello World");
// var a = helloworld.indexOf("e");
// document.write("String" + helloworld +"<br>");
// document.write("Last index of l" + a);

// Question No 5

// var pakistan = ("Pakistan");
// var a = pakistan.charAt(3);
// document.write("String: " + pakistan+"<br>");
// document.write("Character at index 3: "  +a);

// Question No 6

// var firstname = +prompt("Enter your first name");
// var secondname = +prompt("Enter your last name");
// var fullname = firstname+secondname
// alert(fullname);

// Question No 7

// var city = "Hyderabad";
// var a = city.replace("Hyderabad","Islamabad");
// document.write("City: " + city +"<br>");
// document.write("After Replacement: " + a );

// Question No 8

// var a = ("Ali and Sami are best friends. They play cricket and football together");
// var b = a.split("and") .join("&"); 
// document.write(b);

// Question No 9

// var firstname = ("Hello World");
//  for(var i = 0; i < firstname.length; i++) {
//  if (firstname.charAt(i) === "r") {
//     document.write("l is found in" + i);
//      break;
//     }
//  }


// Question No 10

// var peanut = prompt("Enter the name which is convert in capital letters");
// var a = peanut.toUpperCase();
// document.write("User input: " + peanut +"<br>");
// document.write("Upper case: " + a );

// Question No 11

// var java = prompt("Enter the value which is convert in title case");
// var a = java.charAt(0).toUpperCase() + java.slice(1) ;
// document.write("User input: " + java +"<br>");
// document.write("Title Case: " + a);

// Question No 12

// var a =  35.65;
// var n = a.toString();
// var x =  n
// x = x.replace(".","")
// document.write("Number: " + a +"<br>");
// document.write("Result: " + x +"<br>");

// Question No 13

// var name = prompt("Enter your username");
// for(var i = 0 ; i < name.length ; i++){
//    if(name.charAt(i)==="!"||name.charAt(i)==="@" || name.charAt(i)==="," ||name.charAt(i)==="."){
//        alert("Enter a valid username");
//        alert(name1 = prompt("Enter your username"));
//        break
//    }
// }

// Question No 14

// var input = prompt("Welcome to ABC Bakery . What do you want  to order sir/ma'am");
// var A = ["cake" , "apple pie"  , "cookie" , "chips" , "patties"];
// input=input.toLowerCase();
// for(i = 0 ; i < A.length ; i++){
//     if(A[i]===input){
//         alert( input + "is available at index " +i + "in our bakery");
//     }
//    else{
//        alert("Sorry item is not available");
//        break
//    }
// }


// Question No 15

// var user = prompt("Enter your password");
// var num = 0
// var string = user ;
// if(user==string){
//     alert("You are right");
// }
// else if(user==num){
//     alert("you are not right");
// }


// Question No 16

// var university = "University of Karachi";
// var b =  university.split(" ")
// var c = [b]
// for(var i = 0 ; i < c.length ; i++){
//     if(c[i]===university){
//         document.write(c +"<br>");
//     }
// }

// Question No 17

// var a = ("Pakistan");
// var name = a.charAt(a.length-1);
// document.write("User input: "+ a +"<br>");
// document.write("Last character of input: " + name);

// Question No 18

// var dog = ("the quick brown fox jumps over the lazy dog");
// dog = dog.toLowerCase();
// for(var i = 0 ; i<dog.length ; i++){
//     if(dog[i]=== dog["the"]){
//         alert("Yes we found");
//     }
// }


//JavaSctipt Assignment 

// ....Chapter 26-30

// Question No 1

// var number = 3.45214;
// var x = Math.round(number);
// document.write("number: " + number +"<br>");
// document.write("round off: " + x +"<br>");
// var floor = x ; 
// var  floor = Math.floor(4);
// document.write("floor value: " + x +"<br>");
// document.write("ceil value: " +floor);

// Question No 2

// var user = +prompt("Enter negative number");
// if(user=0){
//     document.write(user);

// }

// Question No 3

// var a = -4;
// var b = Math.abs(a);
// document.write("The absolute value of " + a  + " is " + b);

// Question No 4



// Question No 5

// var headsuser = prompt("Enter heads user name");
// var tailsuser = prompt("Enter tails user name");
// var toss = Math.random()*2;
// var floor = Math.floor(toss);
// if(floor === 0){
//     document.write("2"  + "<br> " + "random coin value" + " Heads");
// }
// else{
//     document.write("1" + "<br> " + "random coin valur" + " Tails");
// }

// Question No 6

// var num = Math.random()*100;
// var x = Math.round(num);
// document.write("random number between 1 and 100 is: " +x);

// Question No 8

// var user = prompt("Enter a number between 1 to 10");
// var num = 10;
// for(var i = 0; i<num ; i++){
//     if(user[i]===num[5]){
//         alert("You are right");
//         break
//     }
//     else if(user[i]!==[5]){
//         alert("Sorry try again");
//     }
    
// }

//   JavaScript Assignment

//    Chapter 31-34

// Question No 1

// var a = new Date();
// document.write(a);

// Question No 2

// var date = new Date();
// var d = date.toString();
// var b = d.slice(3,7);
// document.write("Current Month: " +b);

// Question No 3

// var day = new Date();
// var s = day.toString();
// var convert = s.slice(0,3);
// document.write("Today is: " + convert);

// Question No 4

// var weeks = ["sun","monday","tuesday","wednesday","thursday","friday","saturday"];
// for(var i = 0 ; i<weeks.length ; i++){
//     if(weeks[i]==weeks[0]||weeks[i]==weeks[6]){
//         alert("Today is fun day")
//         break
//     }
// }

// Question No 5

// var date =  new Date();
// var d = date.getDate();
// if(d<=15){
//     alert("First fifteen days of the month");
// }
// else{
//     alert("Last days of the month");
// }



// Question No 7

// var hour = new Date();
// var hours = hour.getHours();
// if(hours<=12){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }

// Question No 8

// var dat = new Date();
// dat .setMonth(11);
// dat.setDate(31);
// var laterdate = dat
// document.write(laterdate);

// Question No 10

// var date = new Date("2015-08-25T15:35:58.000Z");
// document.write("On reference date: " + date +"<br>");
// var seconds = date.getTime(2015) / 100;
// document.write(seconds + " Second had passed since begnings of 2015");

// Questuion No 11



// Question No 12

// var d = new Date();
// document.write("Current date: " + d +"<br>");
// d.setFullYear(2020-100);
// document.write("100 years back it was: "+d);

// Question No 13

// var age = +prompt("Enter your age");
// var date = new Date();
// var year = date.getFullYear();
// var birthyear = year-age
// document.write("Your age is: " + age +"<br>");
// document.write("Your birthyear is: " + birthyear);


// Question No 14

// document.write("K - Electric Bill" +"<br>");

// var usernam = prompt("Enter user name");
// var month = prompt("Enter current month");
// var units = +prompt("Number of units");
// var perunit = 16
// var rs = "Rs"
// var late = 350
// document.write("Coustomer Name: " + usernam +"<br>");
// document.write("Month: " + month +"<br>");
// document.write("Number of units: " + units +"<br>");
// document.write("Charges per unit: " + perunit +"<br>");
// document.write(" " +"<br>");
// document.write(" " +"<br>");
// document.write("Net amount payable (with in Due Date): " + units *  perunit  +  rs +"<br>");
// document.write("Late payment subcharges: " + late +"<br>");


// JavaScript Assignment

//   Chapter 35-38

// Question No 1

// function date(){
//    a = new Date();
//    return a
// }
//  document.write(date())
 

// Question No 2

// function greet (){
//    a= prompt("Enter your first name");
//    b= prompt("Enter your last name");
//    alert("Welcome: " + a+b) ;
// }
// greet()

// Question No 3

// function plus (a,b){
//     a=+prompt("Enter first number");
//     b=+prompt("Enter second number");
//     alert(a+b);
//  return a+b
// }
// plus();

// Question No 4

// function operator(num1,opr,num2){
//     num1=+prompt("Enter the first value");
//     opr=prompt("Enter the Operator");
//     num2=+prompt("Enter the second value");
//     if(opr === "+"){
//         return num1+num2
//     }
//     else if(opr === "-"){
//         return num1-num2
//     }
//     else if(opr === "*"){
//         return num1*num2
//     }
//     else if(opr === "/"){
//         return num1/num2
//     }
//     else{
//         return("Please recheck the all values");
//     }
// }
// document.write(operator())

// Question No 6

// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }
//   document.write(factorialize(5));

// Question No 8

// function calchypotinous(base,per,hupotinous){
//     base=prompt("Enter a value of base");
//     per=prompt("Enter the value of perpendicular");
//     return hupotinous=Math.sqrt(base*base+per*per);
// }
// document.write("Hypotinous of right angle triangle: "  +calchypotinous());


// Questrion No 9

// function rectangle (a,b,c){
//     a = +prompt("Enter the height of rectangle");
//     b=+prompt("Enter the width of rectangle");
//     c = "Area of rectangle is: "
//     return c + a*b
// }
// document.write(rectangle())

// Question No 11

// function string(mutahir,a){
//     mutahir=("my name is mutahir and I'am a student of saylani mass it training");
//     a=mutahir.toUpperCase();
//     return [mutahir+"<br>"+a] ;
    
// }
// document.write(string())

// Question No 12

// function longestword(str, longest){

    
//      words = str.split(' ');
//       longest= "";
    
//     for(var word of words){
//      if(word.length > longest.length) longest=word
     
//     }
    
//     return ["Example String: "+str+"<br>" + "Output String: "+longest]
    
// }
// document.write(longestword("Web Development Students"));
 
// Question No 14

// function calcCircumference(){
//     r=2;
//     pi=3.14;
//     circumference=2*pi*r
//     return "The circumference is: " +circumference + "<br>";
// }
// document.write(calcCircumference())

// function calcArea(){
//     r=35;
//     pi=3.14;
//     areaCircle =pi*r*r
//     return "The area is: "+areaCircle
// }
// document.write(calcArea())


