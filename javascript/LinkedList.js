/**
 * 初始化一个节点
 */
class Node{
    constructor(val){
        this.value = val;
        this.prev = null;
        this.next = null;  
    }
}

class LinkedList{
    /**
     * 初始化一个双向链表
     */
    constructor(){
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }

    /**
     * 从尾部新增一个元素
     * @param {*} item 
     */
    push(item){
        const tempNode = new Node(item);
        const prev = this.tail.prev;
        prev.next = tempNode;
        tempNode.prev =prev;
        tempNode.tail = this.tail;
        this.tail.prev = tempNode;
        this.size++;
    }

    unshift(item){
        const tempNode = new Node(item);
        const next = this.head.next;
        next.prev = tempNode;
        tempNode.next =next;
        this.head.next = tempNode;
        tempNode.prev = this.head;
        this.size++;
    }

    insert(index, item){
        this.checkPositionIndex(index);
        if (index === this.size) {
            this.push(item);
            return;
        } 
        const node = this.getNode(index);
        const prev = node.prev;
        const tempNode = new Node(item);
        prev = tempNode;
        prev.next = tempNode;
        tempNode.prev = prev;
        tempNode.next = node;
        this.size++;
    }

    shift(){
        if (this.size < 1) {
            throw new Error("No elements to remove");
        }
        const next = this.head.next;
        const tempNode = next.next;
        this.head.next = tempNode;
        tempNode.prev = this.head;
        this.size--;
        return tempNode.value; 
    }
    pop(){
        if (this.size < 1) {
            throw new Error("No elements to remove");
        }
        const next = this.tail.prev;
        const tempNode = next.prev;
        this.tail.prev = tempNode;
        tempNode.next = this.tail;
        this.size--;
        return tempNode.value; 
    }
    remove(index){
        this.checkElementIndex(index);
        const node = this.getNode(index)
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--;
        return node.value
    }
    
    getNode(index) {
        this.checkElementIndex(index);
        let p = this.head.next;
        for (let i = 0; i < index; i++) {
            p = p.next;
        }
        return p;
    }

    isValidIndex(index) {
        return index >= 0 && index <= this.size;
    } 

    checkElementIndex(index) {
        if (!this.isValidIndex(index)) {
            throw new Error(`Index: ${index}, Size: ${this.size}`);
        }
    }
    
    isValidIndex(index) {
        if (!this.isPositionIndex(index)) {
            throw new Error(`Index: ${index}, Size: ${this.size}`);
        }
    }

}