import LinkedList from '../src/LinkedList';
import Node from '../src/Node';

describe('Unit tests for the LinkedList class', () => {
  let linkedList, apple, banana, blackberry, kiwi, mango, strawberry;

  beforeEach(() => {
    linkedList = new LinkedList();

    apple = new Node('apple');
    banana = new Node('banana');
    blackberry = new Node('blackberry');
    kiwi = new Node('kiwi');
    mango = new Node('mango');
    strawberry = new Node('strawberry');
  });

  it ('ensures LinkedList is properly constructed', () => {
    expect(linkedList._length).toBe(0);
    expect(linkedList._head).toBe(null);
  });

  describe('tests for add(node):', () => {
    it ('ensures errors are properly handled', () => {
      const insertionSuccess = linkedList.add('not a node instance');
      expect(insertionSuccess).toBe(false);
      expect(linkedList._length).toBe(0);
    });

    it ('ensures insertion is successful in an empty list', () => {
      const insertionSuccess = linkedList.add(apple);
      expect(insertionSuccess).toBe(true);
      expect(linkedList._head).toEqual(apple);
      expect(linkedList._length).toEqual(1);
    });

    it ('ensures insertion is successful in a non-empty list', () => {
      linkedList.add(apple);
      linkedList.add(banana);
      linkedList.add(kiwi);
      linkedList.add(mango);
      expect(linkedList._head).toBe(apple);
      expect(linkedList._length).toBe(4);
    });
  });

  describe('tests for addFirst(node):', () => {
    it ('ensures errors are properly handled', () => {
      const insertionSuccess = linkedList.addFirst('not a node instance');
      expect(insertionSuccess).toBe(false);
      expect(linkedList._length).toBe(0);
    });

    it ('ensures insertion is successful in an empty list', ()=> {
      linkedList.addFirst(apple);
      expect(linkedList._head).toBe(apple);
      expect(linkedList._head.next).toBe(null);
    });

    it ('ensures insertion is successful in a non-empty list', () => {
      const head = apple;
      const newHead = strawberry;

      linkedList.add(head);
      expect(linkedList._head).toBe(head);
      expect(linkedList._length).toBe(1);

      linkedList.addFirst(newHead);
      expect(linkedList._length).toBe(2);
      expect(linkedList._head.next).toBe(head);
    });
  });

  describe('tests for get(index):', () => {
    it ('ensures errors are properly handled', () => {
      // 1. Empty List
      expect(linkedList._length).toBe(0);
      expect(linkedList.get(blackberry)).toBe(null);

      // 2. Index out of bounds
      linkedList.add(kiwi);
      linkedList.add(strawberry);
      expect(linkedList.get(-4)).toBe(null);
      expect(linkedList.get(1000)).toBe(null);
    });

    it ('ensures retrieval is successful in a non-empty list', () => {
      linkedList.add(kiwi);
      linkedList.add(banana);
      linkedList.add(blackberry);
      linkedList.add(mango);
      linkedList.add(apple);
      expect(linkedList.get(0)).toBe(kiwi);
      expect(linkedList.get(4)).toBe(apple);
      expect(linkedList.get(2)).toBe(blackberry);
    });
  });

  describe('tests for get(node):', () => {
    it ('ensures errors are properly handled', () => {
      // 1. Empty List
      expect(linkedList._length).toBe(0);
      expect(linkedList.getNode(blackberry)).toBe(null);

      // 2. Invalid Instance
      linkedList.add(kiwi);
      linkedList.add(strawberry);
      expect(linkedList.getNode('not a valid instance')).toBe(null);
    });

    it ('ensures retrieval is successful in a non-empty list', () => {
      const prosciutto = new Node('prosciutto');

      linkedList.add(kiwi);
      linkedList.add(strawberry);
      linkedList.add(blackberry);
      linkedList.add(mango);
      linkedList.add(apple);

      // 1. Node is present in the list
      expect(linkedList.getNode(kiwi)).toBe(kiwi); // head
      expect(linkedList.getNode(blackberry)).toBe(blackberry);
      expect(linkedList.getNode(apple)).toBe(apple); // tail

      // 2. Node is not present in the list
      expect(linkedList.getNode(prosciutto)).toBe(null);
    });
  });

  describe('tests for remove(index):', () => {
    it ('ensures errors are properly handled', () => {
      // 1. Empty List
      expect(linkedList._length).toBe(0);
      expect(linkedList.remove(10)).toBe(null);

      // 2. Index out of bounds
      linkedList.add(kiwi);
      linkedList.add(strawberry);
      expect(linkedList.remove(-4)).toBe(null);
      expect(linkedList.remove(1000)).toBe(null);
    });

    it ('ensures removal is successful in a non-empty list', () => {
      linkedList.add(kiwi);
      linkedList.add(strawberry);
      linkedList.add(blackberry);
      linkedList.add(mango);
      linkedList.add(apple);

      // 1. Node is present in the list
      // [kiwi -> strawberry -> blackberry -> mango -> apple]
      expect(linkedList.remove(0)).toBe(kiwi);
      // [strawberry -> blackberry -> mango -> apple]
      expect(linkedList.remove(2)).toBe(mango);
      // [strawberry -> blackberry -> apple]
      expect(linkedList.remove(2)).toBe(apple);
      // [strawberry -> blackberry]
      expect(linkedList._length).toBe(2);
    });
  });

  describe('tests for remove(node):', () => {
    it ('ensures errors are properly handled', () => {
      linkedList.add(kiwi);
      linkedList.add(strawberry);
      expect(linkedList.removeNode('not a valid instance')).toBe(null);
    });

    it ('ensures removal is successful in a non-empty list', () => {
      linkedList.add(kiwi);
      linkedList.add(strawberry);
      linkedList.add(blackberry);
      linkedList.add(mango);
      linkedList.add(apple);

      // 1. Node is present in the list
      // [kiwi -> strawberry -> blackberry -> mango -> apple]
      expect(linkedList.removeNode(kiwi)).toBe(kiwi);
      // [strawberry -> blackberry -> mango -> apple]
      expect(linkedList.removeNode(mango)).toBe(mango);
      // [strawberry -> blackberry -> apple]
      expect(linkedList.removeNode(apple)).toBe(apple);
      // [strawberry -> blackberry]
      expect(linkedList._length).toBe(2);
    });
  });

  it ('calls the print() method', () => {
    linkedList.add(kiwi);
    linkedList.add(strawberry);
    linkedList.add(blackberry);
    linkedList.add(mango);

    linkedList.print();
    expect(true).toBe(true);
  });
});
