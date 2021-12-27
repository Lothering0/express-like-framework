const arr = [4.2, 6.7, 4.5]

function groupBy(arr, cb) {
  const finalObj = {}

  arr.forEach(el => {
    if (!Array.isArray(finalObj[cb(el)])) {
      finalObj[cb(el)] = []
    }

    return finalObj[cb(el)].push(el)
  })

  return finalObj
}

console.log(groupBy(arr, Math.floor))
