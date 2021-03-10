// jS regole della pagina
var generaBtn = document.getElementById('genera');
var annullaBtn = document.getElementById('anulla');
var costo = 0.21;
var costoTotale = 0;
var min = 90000;
var max = 100000 - min;

generaBtn.addEventListener('click', function() {
  var name = document.getElementById('name').value;
  var distanza = parseInt(document.getElementById('distance').value);
  var eta = document.getElementById('eta').value;
  console.log(name, distanza, eta);
  if (name !== '' && distanza > 0 && eta !== ''){

    costoTotale = costo * distanza;

    // lo sconto
    if (eta == 1) {
      var sconto = costoTotale * 0.2;
      costoTotale = costoTotale - sconto;
      // console.log('minorenne', eta);
    }
    else if (eta == 3) {
      var sconto = costoTotale * 0.4;
      costoTotale = costoTotale - sconto;
      // console.log('over65', eta);
    }

    document.getElementById('costo-totale').innerHTML = costoTotale + ' €';
    var cp = Math.floor(Math.random() * max) + min;

  }
  else {
    console.log('nah');
  }

});

annullaBtn.addEventListener('click', function(){

});
