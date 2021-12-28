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
    let actual = linkedList.head.value;
    let expected = 3;
    expect(actual).toBe(expected);
});

test('after inserting values 1,2,3, the tail of the linked list should be the first value inserted 1',()=>{
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    let actual = linkedList.head.next.next.value;
    let expected = 1; 
    expect(actual).toBe(expected);
});

// test('ecxpect show command to throw inputerror if no linked list', ()=>{
//     ll = new LinkedList();
//     expect(ll.show().toThrow('This is an empty list'));
// });

test('should print pretty linked list "{1} -> {2} -> {3} -> null" ', ()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    let actual = ll.show();
    let expected = '{3} -> {2} -> {1} -> null';
    expect(actual).toBe(expected);
});

test('addToEnd should add value to end of linked list. expected value is "{2} -> {1} -> {3} -> null" ', ()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.addToEnd(3);
    let actual = ll.show();
    let expected = '{2} -> {1} -> {3} -> null';
    expect(actual).toBe(expected);
});