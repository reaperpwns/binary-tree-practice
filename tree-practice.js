const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  let node = rootNode;
  while (node.left) {
    node = node.left;
  }
  return node.val;
}

function findMaxBST(rootNode) {
  let node = rootNode;
  while (node.right) {
    node = node.right;
  }
  return node.val;
}

function findMinBT(rootNode) {
  let stash = [rootNode]
  if (!rootNode) return
  let lowest = Infinity
  while (stash.length) {
    let current = stash.shift()
    if (current.val < lowest) lowest = current.val
    if (current.left) stash.push(current.left)
    if (current.right) stash.push(current.right)
  }
  return lowest
}

function findMaxBT(rootNode) {
  let stash = [rootNode]
  if (!rootNode) return
  let lowest = -Infinity
  while (stash.length) {
    let current = stash.shift()
    if (current.val > lowest) lowest = current.val
    if (current.left) stash.push(current.left)
    if (current.right) stash.push(current.right)
  }
  return lowest
}

// function getHeight(rootNode) {
//   if (!rootNode) return -1;
//   const stack = [rootNode];
//   let height = 0;

//   while (stack.length) {
//     let curr = stack.pop();
//     if (!curr.right && !curr.left) {
//       return height;
//     }
//     height++;
//     if (curr.left) {
//       stack.push(curr.left);
//     }
//     if (curr.right) {
//       stack.push(curr.right);
//     }
//   }
// }

function getHeight(rootNode) {
  if (!rootNode) return -1;
  let height = 0;
  const queue = [];
  queue.push(rootNode);
  console.log(queue)
  console.log('PP')
  while (queue.length) {
    let curr = queue[height]
    // if (!curr.left && !curr.right) break;
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  console.log(queue)
  return height;
}

function balancedTree(rootNode) {
  // Your code here
}

function countNodes(rootNode) {
  // Your code here
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
