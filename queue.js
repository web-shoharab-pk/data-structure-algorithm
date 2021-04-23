class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(item){
        this.queue.push(item)
    }
    dequeue(){
        if(this.queue.length){
            return this.queue.shift()
        }
    }
}

const lovers = new Queue();
lovers.enqueue('asik')
lovers.enqueue('amin')
lovers.enqueue('roby')
lovers.enqueue('masum')
lovers.enqueue('asik')
console.log(lovers.queue);

const cekaKhaa = lovers.dequeue();
console.log(cekaKhaa)