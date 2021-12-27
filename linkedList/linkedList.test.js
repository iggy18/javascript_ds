const LinkedList = require('./linkedList');

test('should instanciate a linked list with a head where the next == null', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
});

test('after inserting values 1,2,3, the head of the linked list should be the last value inserted 3',()=>{
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.head.value).toBe(3);
});

test('after inserting values 1,2,3, the tail of the linked list should be the first value inserted 1',()=>{
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.head.next.next.value).toBe(1);
});

test('should print pretty linked list "{1} -> {2} -> {3} -> null" ', ()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    expect(ll.show()).toBe('{3} -> {2} -> {1} -> null');
});