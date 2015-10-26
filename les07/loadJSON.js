function initializePage(result){
    // we hebben de json string als parameter doorgekregen
    var data = JSON.parse(result);
    console.log(data);
    // document.querySelector();
}

window.addEventListener("load", function(){

  function loadJSON(url, callback){

    // we maken een xmlHTTPRequest aan
    var req = new XMLHttpRequest();


    // welke url moet er worden opgehaald?
    req.open('GET', url , true);

    // we voegen een 'listener' toe om te kijken of de pagina geladen is
    req.addEventListener('readystatechange', function () {
        //console.log('readyState: ' + req.readyState);
        if (req.readyState == 4) {
            if(req.status == 200){
                callback(req.responseText);
            } else {
                console.log("Error loading page\n");
            }
        }
    });
    // we starten het laden van de pagina
    req.send();

  }
  function berend(data){
    console.log(data);
  }
  loadJSON('http://jsonplaceholder.typicode.com/posts', berend);
  loadJSON(parse());

});
