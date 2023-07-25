function checkCashRegister(price, cash, cid) {
  let totalCiD = Number(
    cid
      .map((item) => item[1])
      .reduce((acc, val) => acc + val)
      .toFixed(2)
  );
  cid = Object.fromEntries(cid);
  let change = {};
  let ctg = cash - price;
  if (totalCiD < Number(ctg.toFixed(2))) {
    console.log(12, { status: "INSUFFICIENT_FUNDS", change: [] });
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (Number(ctg.toFixed(2)) === totalCiD) {
    console.log(8, { status: "CLOSED", change: Object.entries(cid) });
    return { status: "CLOSED", change: Object.entries(cid) };
  } else {
    console.log(Number(ctg.toFixed(2)));
    while (Number(ctg.toFixed(2)) > 0) {
      if (Number(ctg.toFixed(2)) >= 100) {
        while (cid["ONE HUNDRED"] >= 100 && Number(ctg.toFixed(2)) >= 100) {
          ctg -= 100;
          cid["ONE HUNDRED"] -= 100;
          if (!change["ONE HUNDRED"]) {
            change["ONE HUNDRED"] = 0;
          }
          change["ONE HUNDRED"] += 100;
        }
      }
      if (Number(ctg.toFixed(2)) >= 20) {
        while (cid["TWENTY"] >= 20 && Number(ctg.toFixed(2)) >= 20) {
          ctg -= 20;
          cid["TWENTY"] -= 20;
          if (!change["TWENTY"]) {
            change["TWENTY"] = 0;
          }
          change["TWENTY"] += 20;
        }
      }
      if (Number(ctg.toFixed(2)) >= 10) {
        while (cid["TEN"] >= 10 && Number(ctg.toFixed(2)) >= 10) {
          ctg -= 10;
          cid["TEN"] -= 10;
          if (!change["TEN"]) {
            change["TEN"] = 0;
          }
          change["TEN"] += 10;
        }
      }
      if (Number(ctg.toFixed(2)) >= 5) {
        while (cid["FIVE"] >= 5 && Number(ctg.toFixed(2)) >= 5) {
          ctg -= 5;
          cid["FIVE"] -= 5;
          if (!change["FIVE"]) {
            change["FIVE"] = 0;
          }
          change["FIVE"] += 5;
        }
      }
      if (Number(ctg.toFixed(2)) >= 1) {
        while (cid["ONE"] >= 1 && Number(ctg.toFixed(2)) >= 1) {
          ctg -= 1;
          cid["ONE"] -= 1;
          if (!change["ONE"]) {
            change["ONE"] = 0;
          }
          change["ONE"] += 1;
        }
      }
      if (Number(ctg.toFixed(2)) >= 0.25) {
        while (cid["QUARTER"] >= 0.25 && Number(ctg.toFixed(2)) >= 0.25) {
          ctg -= 0.25;
          cid["QUARTER"] -= 0.25;
          if (!change["QUARTER"]) {
            change["QUARTER"] = 0;
          }
          change["QUARTER"] += 0.25;
        }
      }
      if (Number(ctg.toFixed(2)) >= 0.1) {
        while (cid["DIME"] >= 0.1 && Number(ctg.toFixed(2)) >= 0.1) {
          ctg -= 0.1;
          cid["DIME"] -= 0.1;
          if (!change["DIME"]) {
            change["DIME"] = 0;
          }
          change["DIME"] += 0.1;
        }
      }
      if (Number(ctg.toFixed(2)) >= 0.05) {
        while (cid["NICKEL"] >= 0.05 && Number(ctg.toFixed(2)) >= 0.05) {
          ctg -= 0.05;
          cid["NICKEL"] -= 0.05;
          if (!change["NICKEL"]) {
            change["NICKEL"] = 0;
          }
          change["NICKEL"] += 0.05;
        }
      }
      if (Number(ctg.toFixed(2)) >= 0.01) {
        while (cid["PENNY"] >= 0.01 && Number(ctg.toFixed(2)) >= 0.01) {
          ctg -= 0.01;
          cid["PENNY"] -= 0.01;
          if (!change["PENNY"]) {
            change["PENNY"] = 0;
          }
          change["PENNY"] += 0.01;
        }
      }
      if (Number(ctg.toFixed(2)) !== 0) {
        console.log(112, { status: "INSUFFICIENT_FUNDS", change: [] });
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      } else {
        console.log(115, { status: "OPEN", change: Object.entries(change) });
        return { status: "OPEN", change: Object.entries(change) };
      }
    }
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
