const item = {
  left: {
    value: 2,
    left: {
      value: 4,
    },
    right: {
      value: 5,
    },
  },

  right: {
    value: 3,
    left: {
      value: 6,
    },
    right: {
      value: 7,
    },
  },
};

function invertTree(node) {
  const init_left = node.left.value;
  const init_left_left = node.left.left.value;
  const init_left_right = node.left.right.value;
  //left side
  node.left.value = node.right.value;
  node.left.left.value = node.right.right.value;
  node.left.right.value = node.right.left.value;
  //right side
  node.right.value = init_left;
  node.right.left.value = init_left_right;
  node.right.right.value = init_left_left;

  return node;
}

console.log(invertTree(item));
