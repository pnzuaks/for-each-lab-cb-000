function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log('${index}: ${element}')
  })
}

function iterate(callback) {
  array = [1, 2, 3, 4]
  array.forEach(callback);
  return array
}
