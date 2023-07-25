function palindrome(inp) {
  inp = inp.split("");
  let str = inp.map((i) => i.toLowerCase());
  str = str.filter((char) => isAlphaNumeric(char.charCodeAt(0)));
  for (let i = 0; i < str.length / 2; i++) {
    console.log(str[i], str[str.length - 1 - i]);
    if (str[i] !== str[str.length - 1 - i]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

function isAlphaNumeric(code) {
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

palindrome("My age is 0, 0 si ega ym.");
