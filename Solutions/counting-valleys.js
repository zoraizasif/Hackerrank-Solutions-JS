function   countingValleys(steps, path) {
  let pathArray = path.split("");
  let level = 0;
  let valleyEnter = false;
  let valleyTraversed = 0;
  pathArray.forEach(el => {
    el === 'U' ? level++ : level--;
    console.log({el}, {level})
    if (level === -2) {
      valleyEnter = true;
    }
    if (valleyEnter && level === 0) {
      valleyTraversed ++;
      valleyEnter = false;
    }
  })
  
  return valleyTraversed;
}
