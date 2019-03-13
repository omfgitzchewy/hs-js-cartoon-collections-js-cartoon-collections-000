function dwarfRollCall(dwarves) {
  var str = ""
  for (var i = 0; i < dwarves.length; i++){
    str += (i+1 + ". " + dwarves[i] + " ")
  }
  return str
}

function summonCaptainPlanet(planeteerCalls){
  var arr = []
  for (var i = 0; i < planeteerCalls.length; i++){
    var changed = planeteerCalls[i].toUpperCase() + "!"
    arr.push(changed)
  }
  return arr
}

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++){
    if (words[i].length <= 4){
      return true
    } 
  }
  return false
}

function findTheCheese (foods) {
}
