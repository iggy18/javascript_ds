const LinkedList = require('./linkedList');

function setupData(num){
    const linkedList = new LinkedList();
    current = 1;
    for (let i = 0; i < num; i++) {
        linkedList.insert(current);
        current++;
    }
    return linkedList;
}

test('should instanciate a linked list with a head where the next == null', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
});

test('after inserting values 1,2,3, the head of the linked list should be the last value inserted 3',()=>{
    let ll = setupData(3);
    let actual = ll.head.value;
    let expected = 3;
    expect(actual).toBe(expected);
});

test('after inserting values 1,2,3, the tail of the linked list should be the first value inserted 1',()=>{
    let ll = setupData(3);
    let actual = ll.head.next.next.value;
    let expected = 1; 
    expect(actual).toBe(expected);
});

test('.show should let user know when asked to show empty list', ()=>{
    ll = new LinkedList();
    let actual = ll.show();
    let expected = 'This is an empty list';
    expect(actual).toBe(expected);
});

test('should print pretty linked list "{1} -> {2} -> {3} -> null" ', ()=>{
    let ll = setupData(3);
    let actual = ll.show();
    let expected = '{3} -> {2} -> {1} -> null';
    expect(actual).toBe(expected);
});

test('addToEnd should add value to end of linked list. expected value is "{2} -> {1} -> {3} -> null" ', ()=>{
    let ll = setupData(2);
    ll.addToEnd(3)
    let actual = ll.show();
    let expected = '{2} -> {1} -> {3} -> null';
    expect(actual).toBe(expected);
});