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
