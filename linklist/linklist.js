// 由于JS没有指针类型，所以使用静态链表，
//   链表：
//   每一个节点有两个内存空间，一个是数据（data），一个是指针(地址)

//创建一个node类，实际上是构造函数Node
function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node('head')
    this.display = display
    this.insert = insert
    this.find = find
    this.remove = remove
    this.findPrev = findPrev
}

// 查找节点
function find(item) {
    var currNode = this.head
    while (currNode.element != item) {
        currNode = currNode.next
    }
    return currNode
}

// 插入前要实现查找
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next
    currNode.next = newNode
}

// 删除 删除时需要前驱结点，因此要先获取前驱节点
function remove(item) {
    var prevNode = this.findPrev(item)
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}

function findPrev(item) {
    var prevNode = this.head
    while (!(prevNode.next == null) && prevNode.next.element != item) {
        prevNode = prevNode.next
    }
    return prevNode
}

function display(params) {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

var list = new LList()

list.insert("小明", "head")
list.insert("小红", "小明")

list.display()
list.remove("小明")
list.display()
