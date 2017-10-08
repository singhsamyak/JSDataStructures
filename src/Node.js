class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  /**
   * Determines if this node is equal to specified node
   * @param {Node} node to compare with
   * @return {boolean} true if is equal
   */
  isEqual(node) {
    return this.value === node.value;
  }
}

export default Node;
