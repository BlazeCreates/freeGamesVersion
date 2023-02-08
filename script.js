javascript:
function m() {
    var r='',c='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    for ( var i = 0; i < 5; i++ ) {
      r += c.charAt(Math.floor(Math.random() * 36));
   }
   return r;
}

(function() {
  let Id1 = 'haldlgldplgnggkjaafhelgiaglafanh';
  let Id2 = 'bjddmgjpaklfccfedbjafhlnnikokphe';
  let currentUrl = window.location.href;
  let extensionStatus = document.createElement('div');
  extensionStatus.style.textAlign = 'center';
  extensionStatus.style.marginTop = '50px';

  if (!currentUrl.includes('chrome.google.com/webstore')) {
    window.location.href = 'https://chrome.google.com/webstore' + m();
  } else {
    document.body.innerHTML = '';
    document.body.style.backgroundColor = 'white';
  
    let toggleSwitch = document.createElement('label');
    toggleSwitch.className = 'switch';
    toggleSwitch.style.margin = '0 auto';
    toggleSwitch.style.display = 'block';
  
    let switchInput = document.createElement('input');
    switchInput.type = 'checkbox';
    switchInput.addEventListener('change', function() {
      if (this.checked) {
        chrome.management.setEnabled(Id1, true);
        chrome.management.setEnabled(Id2, true);
        extensionStatus.innerHTML = 'GoGuardian is On';
      } else {
        chrome.management.setEnabled(Id1, false);
        chrome.management.setEnabled(Id2, false);
        extensionStatus.innerHTML = 'GoGuardian is Off';
      }
    });
document.head.innerHTML = `
<style>
@import url('https://fonts.cdnfonts.com/css/gotham');

body {
background: url()
background-color: #262626;
font-family: 'Gotham', sans-serif;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 23px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 17px;
  width: 17px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #2196F3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(17px);
  -ms-transform: translateX(17px);
  transform: translateX(17px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 23px;
}
.slider.round:before {
  border-radius: 50%;
}
</style>
`;
    let switchSlider = document.createElement('span');
    switchSlider.className = 'slider round';
  
    toggleSwitch.appendChild(switchInput);
    toggleSwitch.appendChild(switchSlider);
    document.body.appendChild(toggleSwitch);
    document.body.appendChild(extensionStatus);
  }
})();
