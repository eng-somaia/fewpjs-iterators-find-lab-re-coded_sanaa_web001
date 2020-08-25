const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(x){
  x.find(a => {
    if(a.result === "W")
    return a.year;
  });
}