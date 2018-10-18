class StackDataStructure {
  constructor() {
    this.stackControl = []
    this.MAX_SIZE = 10
  }
  isEmpty() {
    if (this.stackControl.length > 0) return false;
    return true
  };
  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) return true;
    return false
  };
  push(el) {
    if (this.canPush()) {
      this.stackControl.push(el)
    } else {
      return 'Stack Overflow'
    }
    return this.stackControl
  };
  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow"
    }
    let lastElement = this.stackControl.pop()
    return lastElement
  };
}
// stack = new StackDataStructure();
// stack.push(19);
// stack.push(88);
// console.log(stack.stackControl)


// console.log(stack.pop())
