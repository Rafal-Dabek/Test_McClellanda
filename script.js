


function done(){
  var mentor=0;
  var coach=0;
  var doradca=0;
  var ele = document.getElementsByTagName('input');
    

       


        document.getElementById("disp").innerHTML = "";
        var ele = document.getElementsByTagName('input');
        var d=[];
        for(i = 0; i < ele.length; i++) {
            if(ele[i].type="radio") {
              
                if(ele[i].checked)
                {

                  if(ele[i].value!=null)d+= ele[i].value ;
                 
                }
                    

            }
        


          }


  var p=Array.from(d);
 
  
coach=parseInt(p[2])+parseInt(p[4])+parseInt(p[7])+parseInt(p[9])+parseInt(p[14])+parseInt(p[15])+parseInt(p[18])+parseInt(p[22])+parseInt(p[25])+parseInt(p[28]);
mentor=parseInt(p[0])+parseInt(p[5])+parseInt(p[6])+parseInt(p[11])+parseInt(p[12])+parseInt(p[17])+parseInt(p[20])+parseInt(p[23])+parseInt(p[24])+parseInt(p[29]);
doradca=parseInt(p[1])+parseInt(p[3])+parseInt(p[8])+parseInt(p[10])+parseInt(p[13])+parseInt(p[16])+parseInt(p[19])+parseInt(p[21])+parseInt(p[26])+parseInt(p[27]);
console.log(mentor)

if(isNaN(coach) || isNaN(mentor) || isNaN(doradca))
{
  alert ("Wszystkie pola muszą być uzupełnione!");
}
else
{
  document.getElementById("disp").innerHTML
  +=  " Coach: "
  + coach + "<br>"
  
    + " Mentor: "
  + mentor + "<br>"
  
   + " Doradca: "
  + doradca + "<br>";
}



}


