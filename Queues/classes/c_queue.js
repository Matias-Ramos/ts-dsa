"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.storage = [];
    }
    enqueue(item) {
        this.storage.push(item);
    }
    dequeue() {
        const dequeued = this.storage.shift();
        if (dequeued === undefined)
            throw new Error("Cannot dequeue on empty queue.");
        return dequeued;
    }
    size() {
        return this.storage.length;
    }
    reverse() {
        let auxArr = [...this.storage];
        const len = this.storage.length - 1;
        for (let i = len; i >= 0; i--) {
            const dequeued = this.dequeue();
            auxArr[i] = dequeued;
        }
        this.storage = auxArr;
    }
}
exports.default = Queue;
//# sourceMappingURL=c_queue.js.map