function breakOut(array, changeValue, stopValue) {
  for (var counter = 0; counter< array.length; counter ++){
      if (array[counter] === stopValue) {
        break
      }
      array[counter] = changeValue
  }
}
