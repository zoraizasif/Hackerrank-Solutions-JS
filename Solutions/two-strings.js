function twoStrings(s1, s2) {
  let string1 = s1.split("");
  let string2 = s2.split("");
  let result = false;
  let obj1 = {};
  string1.forEach(s => {
    obj1[s] = 1;
  });
  string2.forEach(s2 => {
    if (obj1[s2] === 1) {
      result = true;
      return;
    }
  });
  return !result ? "NO" : "YES";
}