class QueueDataStructure {
  constructor() {
    this.queueControl = []
    this.MAX_SIZE = 10
  };
  isEmpty() {
    if (this.queueControl.length > 0) return false;
    return true
  };
  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) return true;
    return false
  };
  enqueue(el) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(el)
    } else {
      return 'Queue Overflow'
    }
    return this.queueControl
  };
  dequeue() {
    if (this.isEmpty()) {
      return "Queue Underflow"
    }
    let firstElement = this.queueControl.shift()
    return firstElement
  };
}


// stack = new QueueDataStructure()
// stack.enqueue(19);
// stack.enqueue(88);
// console.log(stack.queueControl)

// // stack.dequeue();
// console.log(stack.dequeue())
// // console.log(stack)
