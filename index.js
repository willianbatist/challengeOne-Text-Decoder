const buttonEncrypt = document.getElementById("btn-criptografar");
const buttonDecrypt = document.getElementById("btn-descriptografar");
const textNone = document.getElementById("text-view");
const textDecoder = document.getElementById("view-decoder");
const p = document.getElementById("text");
const textarea = document.getElementById("textarea");
const buttonCopy = document.getElementById("copy");
const A = /A/ig;
const E = /E/ig;
const I = /I/ig;
const O = /O/ig;
const U = /U/ig;


function handleTextDecoder(text) {
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    if (A.test(text[i])) {
      newText += "ai";
      continue
    }
    if (E.test(text[i])) {
      newText += "enter";
      continue
    }
    if (I.test(text[i])) {
      newText += "imes";
      continue
    }
    if (O.test(text[i])) {
      newText += "ober";
      continue
    }
    if (U.test(text[i])) {
      newText += "ufat";
      continue
    }
    let newW = text[i];
    newText += newW;
  }
  return newText;
}

function handleTextEncoder(text) {
  text = text.replace(/ai/g, "a");
  text = text.replace(/enter/g, "e");
  text = text.replace(/imes/g, "i");
  text = text.replace(/ober/g, "o");
  text = text.replace(/ufat/g, "u");
  return text;
}

function clickDecoder() {
  textNone.style.display="none";
  textDecoder.style.display="block";
  p.innerHTML=handleTextDecoder(textarea.value);
  textarea.value="";
}

function clickEncoder() {
  p.innerHTML=handleTextEncoder(textarea.value);
  textarea.value="";
}

function handleCopy() {
  navigator.clipboard.writeText(p.innerText);
}




buttonEncrypt.addEventListener("click", clickDecoder);
buttonCopy.addEventListener("click", handleCopy);
buttonDecrypt.addEventListener("click", clickEncoder);