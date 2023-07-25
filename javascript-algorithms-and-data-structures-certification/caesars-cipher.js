function rot13(str) {
  str = str.split("");
  str = str.map((char) => {
    const code = char.charCodeAt();
    let newCode;
    if (code >= 65 && code <= 90) {
      newCode = code - 13;
      if (newCode < 65) {
        newCode = newCode + 26;
      }
      return String.fromCharCode(newCode);
    } else {
      return char;
    }
  });
  return str.join("");
}

rot13("SERR PBQR PNZC");
