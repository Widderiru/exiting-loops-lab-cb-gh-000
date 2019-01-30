function breakOut(array, changeValue, stopValue) {
  array.forEach((element, index) => {
      if(element == stopValue) {
        break;
      }
      array[index] = changeValue
  })
}
