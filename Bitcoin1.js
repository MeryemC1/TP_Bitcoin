

function reqListener () {
  var Json = this.response
  console.log(this.response.bpi.USD.rate);
  var valeur1 = Json.bpi.USD["code"] + "   " + Json.bpi.USD["rate"] + "   " +  Json.bpi.USD["symbol"];
  var USD = document.getElementById('result').innerHTML= valeur1;
  

  console.log(this.response.bpi.GBP.rate);
  var valeur2 = Json.bpi.GBP["code"] + "   " + Json.bpi.GBP["rate"] + "   " +  Json.bpi.GBP["symbol"];
  var GBP = document.getElementById('Livre').innerHTML= valeur2;
 

  console.log(this.response.bpi.EUR.rate);
  var valeur3 = Json.bpi.EUR["code"] + "   " + Json.bpi.EUR["rate"] + "   " +  Json.bpi.EUR["symbol"];
  var EUR = document.getElementById('Euro').innerHTML= valeur3;
  
}

  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.open("get", "https://api.coindesk.com/v1/bpi/currentprice.json", true);
  oReq.responseType = 'json';
  oReq.send();



function afficher () {

      
      }