function sampleFunc () {
  console.info ( `Symbols in my code: ${arguments.callee + 0}` )
}

function modificator ( func ) {
  func.valueOf = function () {
    return  func.toString ().length
  }
}

modificator( sampleFunc )

sampleFunc()