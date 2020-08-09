class Queue {

    // Initialize an empty queue, with two stacks.

    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

    /**
     * Inserts an element into the queue
     * @param {*} value
     */
    enqueue(value) {
        this.stack1.push(value);
    }

    /**
     * Removes an element from the the queue
     * @return {*}
     */
    dequeue() {
        if (this.stack1.length === 0 && this.stack2.length === 0) throw new Error();
        // If stack2 is empty, put everything from stack1 onto stack2
        if (this.stack2.length === 0) {
            while (this.stack1.length !== 0) {
                const num = this.stack1.pop()
                this.stack2.push(num)
            }
        }

        return this.stack2.pop()
    }
}


var queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(4)
console.log(queue)

queue.dequeue()
console.log(queue)

queue.enqueue(8)
console.log(queue)

queue.dequeue()
console.log(queue)
