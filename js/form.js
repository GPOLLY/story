function mystory() {
    function day (cc,yy,mm,dd){
        return ((((cc/4)-2*cc-1)+((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7)+1
  }
    //picking the item inputted by the user
  var cc1 = document.forms["story"]["year"].value;
    //this is to pick the left two(cc)   
  var cc = cc1.slice(0,2)
  var yy1 = document.forms["story"]["year"].value;
  // this is to select right two(yy)
  var yy = yy1.slice(2,4)
  var mm = document.forms["story"]["month"].value;
  var dd = document.forms["story"]["day"].value;
  var e = document.getElementById("ddlViewBy");
  var gender = e.options[e.selectedIndex].text; 
  
//   alert(cc);
//   alert(yy);
//   alert(mm);
//   alert(dd);
//   alert(gender);

  var result=day(cc,yy,mm,dd).toFixed();
  alert(result);  
  
  }
  

