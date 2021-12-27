const Node = require('./singleNode');

test('should initialize a node', () => {
    const node = new Node(1);
    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
});