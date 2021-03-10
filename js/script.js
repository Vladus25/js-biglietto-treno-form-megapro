// jS regole della pagina
var generaBtn = document.getElementById('genera');
var annullaBtn = document.getElementById('annulla');
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

    // Costo Biglietto Standart
    costoTotale = costo * distanza;

    // lo sconto
    if (eta == 1) {
      var sconto = costoTotale * 0.2;
      costoTotale = costoTotale - sconto;
      // console.log('minorenne', eta);
      document.getElementById('eta-sconto').innerHTML = ' Sconto = 20%';
    }
    else if (eta == 3) {
      var sconto = costoTotale * 0.4;
      costoTotale = costoTotale - sconto;
      // console.log('over65', eta);
      document.getElementById('eta-sconto').innerHTML = 'Sconto = 40%';
    }
    else {
      document.getElementById('eta-sconto').innerHTML = '';
    }

    // Codice CP
    var cp = Math.floor(Math.random() * max) + min;
    document.getElementById('codice-cp').innerHTML = cp;

    // Costo + Sconto
    document.getElementById('costo-totale').innerHTML = costoTotale.toFixed(2) + ' €';

    // Carrozza
    var carrozza = Math.floor(Math.random() * 20) + 1;
    document.getElementById('carrozza-num').innerHTML = carrozza;

    // Nome Passeggero
    document.getElementById('nome-passeggero').innerHTML = name;



  }
  else {
    alert('Vi preghiamo di inserire tutti dati correttamente.');
  }

});

// Un modo per togliere tutto
annullaBtn.addEventListener('click', function(){
  var name = document.getElementById('name').value = "";
  var distanza = document.getElementById("distance").value = "";
  var eta = document.getElementById('eta').value = "";

  document.getElementById("nome-passeggero").innerHTML = "";
  document.getElementById("eta-sconto").innerHTML = "";
  document.getElementById("carrozza-num").innerHTML = "";
  document.getElementById("codice-cp").innerHTML = "";
  document.getElementById("costo-totale").innerHTML = "";

});
