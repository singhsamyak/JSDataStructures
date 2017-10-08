import Node from '../src/Node';

describe('Unit tests for the Node class', () => {
  it ('ensures Node is properly constructed', () => {
    const node = new Node('apple');

    expect(node.value).toBe('apple');
    expect(node.next).toBe(null);
  });

  it ('ensures isEqual correctly compares two nodes', () => {
    const node1 = new Node('apple');
    const node2 = new Node('orange');
    const node3 = new Node('apple');

    expect(node1.isEqual(node2)).toBe(false);
    expect(node1.isEqual(node3)).toBe(true);
  });
});
