function jumpingOnClouds(c) {
  let count = 0;
  for (let i = 0; i < c.length - 1; i++) {
    if (c[i] === 0 && c[i + 2] === 0) {
      count++;
      i = i + 1;
      continue;
    }
    if (c[i] === 0 && c[i + 1] === 0) {
      count++;
      continue;
    }
  }
  return count;
}
