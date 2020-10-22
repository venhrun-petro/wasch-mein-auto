 

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

  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-M3MWJWX");

  var lazyImages = [].slice.call(document.querySelectorAll(".lazy"));
  
  if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.img;
              lazyImage.style = 'background-image: url(' + lazyImage.src + ')';
              lazyImage.classList.remove("lazy");
              lazyImageObserver.unobserve(lazyImage);
            }
        });
      });

      lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
      });
    } else {
        // Possibly fall back to event handlers here
        console.log('img false')
    }


//   <iframe
//    src="https://www.googletagmanager.com/ns.html?id=GTM-M3MWJWX"
//    height="0"
//    width="0"
//    style="display: none; visibility: hidden;"
//  ></iframe>

 $(document).ready(function(){
  let createIframe = document.createElement("iframe");
  createIframe.setAttribute("height", "0");
  createIframe.setAttribute("width", "0");
  createIframe.setAttribute("style", "display: none; visibility: hidden;");
  createIframe.setAttribute("src", "https://www.googletagmanager.com/ns.html?id=GTM-M3MWJWX");
  document.getElementById("body").appendChild(createIframe);
}); 