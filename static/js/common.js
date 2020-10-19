

function onFormSubmit(){
    let services = ["cleanOutsideDry"];
    if (document.getElementById("checkboxInside").checked){
      services.push("washInside");
    }
    var e = document.getElementById("frequency");
    let onetime = false;
    if(e.options[e.selectedIndex].value === 'einmalig'){
       onetime = true;
    }
    const event = createEvent('request-started', 'checkout', services, onetime, referal);
    dataLayer.push(event);
  }