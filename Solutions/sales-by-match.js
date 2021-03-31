function sockMerchant(n, ar) {
  let totalCount = 0;
  let temp = [];

   for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar.length; j++) {
      if (ar[i] === ar[j] && i!== j && !temp.includes(i) && !temp.includes(j)) {
        totalCount++;
        temp.push(i);
        temp.push(j);
      }
    }
  }
  return totalCount;
}