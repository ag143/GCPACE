var gridTable = document.getElementById("GridView2");
var result="";
if(gridTable) { 
  for(var i=0; i < gridTable.rows.length; i++) {
    //if(gridTable.rows[i].cells[4]){
   	 console.log(gridTable.rows[i].cells[4].innerText);
      result = result + "   "+ gridTable.rows[i].cells[4].innerText;
    //}
  }
}

document.getElementById("result").innerHTML = result;