let y = '';

for (let x = 100; x <= 200; x++) {
  if (x % 3 === 0 && x % 4 === 0) {
    y = "LoopyLighthouse";
  } else if (x % 3 === 0) {
    y = "Loopy"
  } else if (x % 4 === 0) {
    y = "Lighthouse"
  } else {
    y = x
  }
  console.log(y);
}