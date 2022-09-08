// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(val, currentNode = this.root) {
        let insertNode = new TreeNode(val)
        // if there is no root
        if (!this.root) {
            this.root = insertNode
            return this
        }
        // check if the val is less than the current node val
        if (val < currentNode.val) {
            if (!currentNode.left) {
                currentNode.left = insertNode;
            } else {
                return this.insert(val, currentNode.left)
            }
        }
        if (val > currentNode.val) {
            if (!currentNode.right) {
                currentNode.right = insertNode;
            } else {
                return this.insert(val, currentNode.right);
            }
        }
    }


    search(val, currentNode = this.root) {
        while (currentNode) {
            if (currentNode.val === val) {
                return true;
            } else if (currentNode.val > val) {
                return this.search(val, currentNode.left);
            } else {
                return this.search(val, currentNode.right);
            }
        }
        return false;
    }


    preOrderTraversal(currentNode = this.root) {
        if (!currentNode) return;
        console.log(currentNode.val);
        this.preOrderTraversal(currentNode.left);
        this.preOrderTraversal(currentNode.right);
    }


    inOrderTraversal(currentNode = this.root) {
        if (!currentNode) return this;
        this.inOrderTraversal(currentNode.left);
        console.log(currentNode.val);
        this.inOrderTraversal(currentNode.right);
    }


    postOrderTraversal(currentNode = this.root) {
        if (!currentNode) return this;
        this.postOrderTraversal(currentNode.left);
        this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val);
    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
        // if theres no root just return
        if (!this.root) return;
        // create an array of queued nodes
        const queue = [];
        // push the initial root values into the array
        queue.push(this.root);
        // while our array has length
        while (queue.length) {
            // use shift to grab first value in our queue array
            let curr = queue.shift();
            // log the value of each shifted element to satisfy mocha
            console.log(curr.val);
            // if the current element has a left, push that left
            if (curr.left) queue.push(curr.left);
            // if the current element has a right, push that right
            if (curr.right) queue.push(curr.right);
        }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
        if (!this.root) return;
        const stack = [this.root];

        while (stack.length) {
            let curr = stack.pop();
            console.log(curr.val);
            if (curr.left) stack.push(curr.left);
            if (curr.right) stack.push(curr.right);
        }
    }
}

module.exports = { BinarySearchTree, TreeNode };
