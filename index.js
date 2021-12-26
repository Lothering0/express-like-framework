const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11
          }
        ]
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1
              }
            ]
          }
        ]
      }
    ]
  },
  {
    v: 5,
    c: [
      {
        v: 10
      },
      {
        v: 15
      }
    ]
  }
]// 69

const recursive = tree => {
  let total = 0

  tree.forEach(el => {
    total += el.v

    if (!el.c) return total

    total += recursive(el.c)
  })

  return total
}

// console.log(recursive(tree))

const iteration = tree => {
  if (!tree.length) return 0

  const stack = []
  let total = 0

  tree.forEach(node => {
    stack.push(node)
  })

  while (stack.length) {
    const node = stack.pop()
    total += node.v
    if (node.c) {
      node.c.forEach(el => {
        stack.push(el)
      })
    }
  }

  return total
}

console.log(iteration(tree))
