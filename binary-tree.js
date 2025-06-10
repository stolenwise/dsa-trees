/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
  
    const queue = [[this.root, 1]];          // [node, depth]
  
    while (queue.length) {
      const [node, depth] = queue.shift();
  
      if (!node.left && !node.right) return depth;   // first leaf -> min depth
  
      if (node.left)  queue.push([node.left,  depth + 1]);
      if (node.right) queue.push([node.right, depth + 1]);
    }

  }
  

  

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (this.root === null) {
      return 0;
  }

  let depth = 0;
  let currentLevel = [this.root];

  while (currentLevel.length > 0) {

      // Start a new level, increment depth 
      depth++;
    
      // Empty array to collect all the children of the current level
      const nextLevel = [];

      // Visit each node that lives in this level
      for (const node of currentLevel) {
        if (node.left !== null) {
          nextLevel.push(node.left);
        }
        if (node.right !== null) {
          nextLevel.push(node.right);
        }
      }

      // Move on to the next level
      currentLevel = nextLevel;

    }

    // Return the depth
    return depth;

    }

  




  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let max = 0;
    
    function helper(node) {
      if (!node) return 0;

      const leftGain = Math.max(0, helper(node.left));
      const rightGain = Math.max(0, helper(node.right));

      const pathSum = node.val + leftGain + rightGain;
      max = Math.max(max, pathSum);

      return node.val + Math.max(leftGain, rightGain);

    }

    helper(this.root);
    return max;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let candidate = null;
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();

      if (node.val > lowerBound &&
        (candidate === null || node.val < candidate)) {
        candidate = node.val;
      }

      if (node.left)  queue.push(node.left);
      if (node.right) queue.push(node.right);
  

      }
      
      return candidate;

    }

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

//   areCousins(node1, node2) {




//   }

//   /** Further study!
//    * serialize(tree): serialize the BinaryTree object tree into a string. */

//   static serialize() {



//   }

//   /** Further study!
//    * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

//   static deserialize() {

//   }

//   /** Further study!
//    * lowestCommonAncestor(node1, node2): find the lowest common ancestor
//    * of two nodes in a binary tree. */

//   lowestCommonAncestor(node1, node2) {
    
//   }


module.exports = { BinaryTree, BinaryTreeNode };
