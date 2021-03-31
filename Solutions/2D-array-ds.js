function hourglassSum(arr) {
  let counter = 0;
  let hourglassSumArr = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      counter += arr[i][j];
      counter += arr[i][j + 1];
      counter += arr[i][j + 2];
      counter += arr[i + 1][j + 1];
      counter += arr[i + 2][j];
      counter += arr[i + 2][j + 1];
      counter += arr[i + 2][j + 2];
      hourglassSumArr.push(counter);
      counter = 0;
    }
  }
  return Math.max(...hourglassSumArr);
}