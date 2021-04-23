class Stack{
    constructor(){
        this.stack= [];
    }
    add(item){
        this.stack.push(item)
    }
    remove(){
        if(this.stack.length){
            return this.stack.pop()
        }
    }
}

const friends = new Stack()

friends.add('Alamin');
friends.add('nirob');
friends.add('shohan');
console.log(friends.stack)

const unFriend = friends.remove();
console.log(unFriend)