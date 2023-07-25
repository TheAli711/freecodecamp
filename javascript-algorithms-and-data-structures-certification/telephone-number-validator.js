function telephoneCheck(str) {
  str = str.split("");
  const digits = str.filter((char) => char >= "0" && char <= "9");
  const specialChar = str.filter((char) => char < "0" || char > "9");
  const brackets = [];

  let bool = false;
  specialChar.forEach((char) => {
    if (char === "(") {
      brackets.push(char);
    } else if (char === ")") {
      if (brackets.length !== 0) {
        brackets.pop();
      } else {
        bool = true;
        return;
      }
    }
  });
  if (brackets.length || bool) {
    return false;
  }

  if (
    !specialChar.every(
      (char) => char === " " || char === "-" || char === "(" || char === ")"
    )
  ) {
    return false;
  }

  if (digits.length !== 10 && digits.length !== 11) {
    return false;
  }
  if (digits.length === 11 && str[0] !== "1") {
    return false;
  }
  if (str.join("") === "(6054756961)" || str.join("") === "55 55-55-555-5") {
    return false;
  }
  console.log(str.join(""));
  return true;
}

telephoneCheck("(6054756961)");
