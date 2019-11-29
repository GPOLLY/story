function mystory() {
    function day (cc,yy,mm,dd){
        return ((((cc/4)-2*cc-1)+((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7)+1
  }
    //picking the item inputted by the user
  var cc1 = document.forms["story"]["year"].value;
    //this is to pick the left two(cc)   
  var cc = cc1.slice(0,2)
  var yy1 = document.forms["story"]["year"].value;
  // this is to pick right two(yy)
  var yy = yy1.slice(2,4)

  var mm = document.forms["story"]["month"].value;
  var dd = document.forms["story"]["day"].value;
  var e = document.getElementById("ddlViewBy");
  var gender = e.options[e.selectedIndex].text; 
  
  // alert(cc);
  // alert(yy);
  // alert(mm);
  // alert(dd);
  // alert(gender);

//validation part  
if (isNaN(dd) || dd < 0 || dd > 31){ 
  alert("Invalid day Please Re-enter the day again");
}

if (isNaN(mm) || mm < 0 || mm > 12){ 
  alert("Invalid day Please Re-enter the day again");
}

  var result=day(cc,yy,mm,dd).toFixed();
  // alert(result);
  
 //these are the names of the genders 
var males=["Kwasi","kwadwo","Kwabena","Kwaku","Yaw", "Kofi", "Kwame"];
var females=["Akosua","Adwoa","Abenaa","Akua", "Yaa", "Afua", "Ama"];

//control flows
if (gender=="male" && result== 0){
alert("Your name is "+ males[0]);
}
else if(gender == "male" && result==1){
alert("Your name is "+ males[1]);
}
else if(gender == "male" && result==2){
alert("Your name is "+ males[2]);
}
else if(gender == "male" && result==3){
alert("Your name is "+ males[3]);
}
else if(gender == "male" && result==4){
alert("Your name is "+ males[4]);
}
else if(gender == "male" && result==5){
alert("Your name is "+ males[5]);
}
else if(gender == "male" && result==6){
alert("Your name is "+ males[6]);
}
else if(gender == "female" && result==0){
alert("Your name is "+ females[0]);
}
else if(gender == "female" && result==1){
alert("Your name is "+ females[1]);
}
else if(gender == "female" && result==2){
alert("Your name is "+ females[2]);
}
else if(gender == "female" && result==3){
alert("Your name is "+ females[3]);
}
else if(gender == "female" && result==4){
alert("Your name is "+ females[4]);
}
else if(gender == "female" && result==6){
alert("Your name is "+ females[5]);
}
else if (gender == "female" && result==6){
alert("Your name is "+females[6]);
}
else{
alert("Invalid Information Please Re-Enter!");
}
}

  

