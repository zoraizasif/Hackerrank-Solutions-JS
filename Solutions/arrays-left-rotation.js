function rotLeft(a, d) {
  let arrayLength = a.length;
    for (let i = 0; i < d; i++) {
      let firstIndexValue = a[0];
      for (let index = 0; index < arrayLength - 1; index++) {
        a[index] = a[index + 1];
      }
      a[arrayLength - 1] = firstIndexValue;
    }
    return a;
}
