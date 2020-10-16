/* Slide 1 (#43) */
var url = new URL(window.location);

var referal = null;

if (url.searchParams.has('r')) {
  referal = url.searchParams.get('r');
}

const source = document.getElementById('carPlate');
const form = document.getElementById('mainForm');
const text = document.getElementById('referral');

const frequency = document.getElementById('frequency');
const checkboxOutsideLabel = document.getElementById('checkboxOutsideLabel');
const checkboxInsideLabel = document.getElementById('checkboxInsideLabel');

const defaultOutsideAmount = 29.99;
const defaultInsideAmount = 14.99;

const refferals = {
  nebenan10: {
    outside: 19.99,
    inside: 10.99,
  },
  fbad: {
    outside: 19.99,
    inside: 10.99,
  },
  friends: {
    outside: 19.99,
    inside: 10.99,
  },
  friendz: {
    outside: 19.99,
    inside: 10.99,
  },
  team: {
    outside: 19.99,
    inside: 10.99,
  },
  gads: {
    outside: 19.99,
    inside: 10.99,
  },
  gta: {
    outside: 19.99,
    inside: 10.99,
  },
  blitzeblank: {
    outside: 19.99,
    inside: 10.99,
  },
  emc: {
    outside: 24.99,
    inside: 10.99,
  },
  factory: {
    outside: 24.99,
    inside: 10.99,
  },
  neu10: {
    outside: 19.99,
    inside: 10.99,
  },
  deal10: {
    outside: 19.99,
    inside: 10.99,
  },
  email10: {
    outside: 19.99,
    inside: 10.99,
  },
};

window.onload = () => {
  // update pricing based on refereal
  if (referal && referal.length && refferals[referal] != null) {
    /*
      10,99 .toLocaleString("de")
      */
    const outsideAmount =
      refferals[referal].outside != null
        ? refferals[referal].outside
        : defaultOutsideAmount;
    const insideAmount =
      refferals[referal].inside != null
        ? refferals[referal].inside
        : defaultInsideAmount;
    const totalAmount = insideAmount + outsideAmount;

    checkboxOutsideLabel.innerHTML =
      'Außenreinigung [' + outsideAmount.toLocaleString('de') + '€]';
    checkboxInsideLabel.innerHTML =
      'Innenreinigung [' + insideAmount.toLocaleString('de') + '€]';
  }
};

const calendlyonclick = function (e) {
  if (referal && referal.length) {
    console.log('withRef');
    Calendly.initPopupWidget({
      url: 'https://calendly.com/wasch-mein-auto/wunschtermin',
      prefill: {
        customAnswers: {
          a2: referal,
        },
      },
    });
  } else {
    Calendly.initPopupWidget({
      url: 'https://calendly.com/wasch-mein-auto/wunschtermin',
    });
  }
  return false;
};

const inputHandler = function (e) {
  if (referal && referal.length) {
    text.value = referal;
  }
  if (e?.target?.value?.length > 2) {
    frequency.style.display = 'block';
    frequency.classList.add('animate__animated');
    frequency.classList.add('animate__slideInUp');
  }
};

source.addEventListener('input', inputHandler);
source.addEventListener('propertychange', inputHandler);
source.addEventListener('keyup', inputHandler);
source.addEventListener('change', inputHandler);
frequency.addEventListener('change', inputHandler);

source.oninvalid = (event) => {
  event.target.setCustomValidity('Bitte überprüfe deine Eingabe');
};
