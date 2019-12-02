function mystory() {
    function day (cc,yy,mm,dd){
      return ((((cc/4)-2*cc-1)+((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7);
          
  }
  var cc1 = document.forms["story"]["year"].value;
  // this code will pick the two left items
  var cc = cc1.slice(0,2)

  var yy1 = document.forms["story"]["year"].value;
  // this code will pick the two rigth items
  var yy = yy1.slice(2,4)

  var mm = document.forms["story"]["month"].value;
  var dd = document.forms["story"]["day"].value;
  var e = document.getElementById("ddlViewBy");
  var gender = e.options[e.selectedIndex].text; 
 
 //validation part  
if (isNaN(dd) || dd < 0 || dd > 31){ 
  alert("Invalid Day Please Proper Day");
}

if (isNaN(mm) || mm < 0 || mm > 12){ 
  alert("Invalid Month Please Proper Month");
}

var result=day(cc,yy,mm,dd).toFixed();   
// alert(result);
 
var Male=["Kwasi","kwadwo","Kwabena","Kwaku","Yaw", "Kofi", "Kwame"];
var female=["Akosua","Adwoa","Abenaa","Akua", "Yaa", "Afua", "Ama"];
var day =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//control flows
if (gender=="male" && result== 0){
var output=("Your name is "+ Male[0] + " You were born on "+day[0]);
document.getElementById("output").innerHTML=output;
 
}
else if(gender == "male" && result==1){
var output=("Your name is "+ Male[1] + " You were born on "+day[1]);
document.getElementById("output").innerHTML=output;

}
else if(gender == "male" && result==2){
  var output=("Your name is "+ Male[2] + " You were born on "+day[2]);
  document.getElementById("output").innerHTML=output;
}
else if(gender == "male" && result==3){
  var output=("Your name is "+ Male[3] + " You were born on "+day[3]);
  document.getElementById("output").innerHTML=output;
}
else if(gender == "male" && result==4){
  var output=("Your name is "+ Male[4] + " You were born on "+day[4]);
  document.getElementById("output").innerHTML=output;
}
else if(gender == "male" && result==5){
  var output=("Your name is "+ Male[5] + " You were born on "+day[5]);
  document.getElementById("output").innerHTML=output;
}
else if(gender == "male" && result==6){
  var output=("Your name is "+ Male[6] + " You were born on "+day[6]);
  document.getElementById("output").innerHTML=output;
}
else if(gender == "female" && result==0){
  var output=("Your name is "+ female[0] + " You were born on "+day[0]);
  document.getElementById("output").innerHTML=output;
}
else if(gender == "female" && result==1){
  var output=("Your name is "+ female[1] + " You were born on "+day[1]);
  document.getElementById("output").innerHTML=output;
}
else if(gender == "female" && result==2){
  var output=("Your name is "+ female[2] + " You were born on "+day[2]);
  document.getElementById("output").innerHTML=output;
}
else if(gender == "female" && result==3){
  var output=("Your name is "+ female[3] + " You were born on "+day[3]);
  document.getElementById("output").innerHTML=output;
}
else if(gender == "female" && result==4){
  var output=("Your name is "+ female[4] + " You were born on "+day[4]);
  document.getElementById("output").innerHTML=output;
}
else if(gender == "female" && result==5){
  var output=("Your name is "+ female[5] + " You were born on "+day[5]);
  document.getElementById("output").innerHTML=output;
}
else if (gender == "female" && result==6){
  var output=("Your name is "+ female[6] + " You were born on "+day[6]);
  document.getElementById("output").innerHTML=output;
}
else{
alert("Invalid Information Please Re-Enter!");
}
document.getElementById("output").innerHTML=output;
}

  

