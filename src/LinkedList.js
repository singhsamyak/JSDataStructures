import Node from './Node';

class LinkedList {
  constructor() {
    this._length = 0;
    this._head = null;
    this._errorMessages = {
      indexOutOfBounds: 'Error: Instance of node is invalid',
      invalidInstance: 'Error: Instance of node is invalid',
      emptyList: 'Error: List is empty'
    };
  }

  /**
   * Inserts a node to the end of the list.
   * Time complexity: O(n)
   * @param {Node} node to insert
   * @return {boolean} true if successful insertion, false otherwise
   */
   add(node) {
     // Case 1: Invalid instance of node
     if (!(node instanceof Node)) {
       console.error(this._errorMessages.invalidInstance);
       return false;
     }

     // Case 2: Empty list
     let currentNode = this._head;
     if (!currentNode)  {
       this._head = node;
       this._length++;
       return true;
     }

     // Case 3: Non-empty list
     while (currentNode.next) { // traverse to the end of the list
       currentNode = currentNode.next;
     }
     currentNode.next = node;
     this._length++;
     return true;
   }

   /**
    * Inserts a node to the head of the list.
    * Time complextiy: O(1)
    * @param {Node} node to insert
    * @return {boolean} true if successful insertion, false otherwise
    */
   addFirst(node) {
     // Case 1: Invalid instance of node
     if (!(node instanceof Node)) {
       console.error(this._errorMessages.invalidInstance);
       return false;
     }

     // Case 2: Valid insertion
     const tempHead = this._head;
     this._head = node;
     this._head.next = tempHead;
     this._length++;
     return true;
   }

   /**
    * Returns the node at the specified index.
    * Time complexity: O(n) worst case, O(1) best case.
    * @param {number} index of node
    * @return {Node} node to retrieve
    */
    get(index) {
      // Case 1: Index out of bounds
      if (index < 0 || index >= this._length) {
        console.error(this._errorMessages.indexOutOfBounds);
        return null;
      }

      // Case 2: Empty list
      if (this._head === null) {
        console.error(this._errorMessages.emptyList);
        return null;
      }

      // Case 3: Non-empty list
      let currentNode = this._head,
          i = 0;

      for (i; i < index; i++) { // traverse till specified index
        currentNode = currentNode.next;
      }

      return currentNode;
    }

    /**
     * Returns the first instance of the specified node.
     * Time complexity: O(n) worst case, O(1) best case.
     * @param {Node} node to retrieve
     * @return {Node} node retrieved
     */
     getNode(node) {
       // Case 1: Invalid instance of node
       if (!(node instanceof Node)) {
         console.error(this._errorMessages.invalidInstance);
         return null;
       }

       // Case 2: Empty list
       if (this._head === null) {
         console.error(this._errorMessages.emptyList);
         return null;
       }

       // Case 3: Node exists
       let currentNode = this._head;
       while(currentNode) {
         if (currentNode.isEqual(node)) {
           return currentNode;
         }
         currentNode = currentNode.next;
       }

       // Case 4: Node does not exist
       console.log('Node not found in the list');
       return null;
     }

    /**
     * Removes the node at the specified index.
     * Time complexity: O(n) worst case, O(1) best case.
     * @param {number} index of node
     * @return {node} node removed
     */
     remove(index) {
       // Case 1: Index out of bounds
       if (index < 0 || index >= this._length) {
         console.error(this._errorMessages.indexOutOfBounds);
         return null;
       }

       // Case 2: Removing head
      if (index === 0) {
        let tempHead = this._head;
        this._head = tempHead.next;
        this._length--;
        return tempHead;
      }

       // Case 3: Removing non-head node
       let currentNode = this._head,
           i = 0;
       for (i; i < index - 1; i++) {
         currentNode = currentNode.next;
       }
       const nodeToRemove = currentNode.next;
       const nextNode = nodeToRemove.next; // node to reattach to
       currentNode.next = nextNode;
       this._length--;
       return nodeToRemove;
     }

     /**
      * Removes the specified node from the list
      * @param {Node} node to remove
      * @return {Node} node removed
      */
      removeNode(node) {
        // Case 1: Invalid instance of node
        if (!(node instanceof Node)) {
          console.error(this._errorMessages.invalidInstance);
          return null;
        }

        // Case 2: Removing head
        if (node.isEqual(this._head)) {
          let tempHead = this._head;
          this._head = tempHead.next;
          this._length--;
          return tempHead;
        }

        // Case 3: Removing non-head node
        let currentNode = this._head;
        while(currentNode.next !== null) {
          if (currentNode.next.isEqual(node)) {
            const nodeToRemove = currentNode.next;
            const nextNode = nodeToRemove.next;
            currentNode.next = nextNode;
            this._length--;
            return nodeToRemove;
          }
          currentNode = currentNode.next;
        }
      }

     /**
      * Prints out human readable list
      */
      print() {
        let currentNode = this._head,
            llString = '[';

        while(currentNode) {
          llString += currentNode.next ? `${currentNode.value} -> ` : `${currentNode.value}`;
          currentNode = currentNode.next;
        }
        llString += ']';

        console.log(llString);
      }
 }

 export default LinkedList;
