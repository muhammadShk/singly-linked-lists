lass Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
}

class SList {
    constructor() {
        this.head = null;
    }

    //Building on the previous Linked List algorithms, please complete
    //the following methods.

    contains(data){
        let runner=this.head;
        
        while(runner!==null)
        {
            if(runner.data==data)
                return true;
            // if(runner.next!==null)
                runner=runner.next;
              
        }
        return false;

    }
    //given data, traverse the current list and return true if that
    //data is present in our list, else return false

    count(){
        let counter = 0;
        let runner = this.head;
        while(runner!=null){
            count+=1;
            runner = runner.next
        }
        return counter; 
    }
    //return the total number of nodes in the current list

    middle(){
        len = this.count()
        if (len%2==0){
            return this.head;
        }
        let runner =this.head;
        
        for (let i= 1; i<len/2; i++){
            runner= runner.next;
        }
        
        return runner;
        
    }
    //if odd, return the middle node of a list. return the node, not
    //the value

    //BONUS
    rotateFrontAndBack(){

        if(this.count() >=2){
            
        let temp = this.head;
        let swaprunner=this.head;
        while(swaprunner.next.next!==null)
        {
            swaprunner=swaprunner.next;
        }
        this.head = swaprunner.next;
        this.head.next = temp.next;
        swaprunner.next = temp;
        temp.next = null;
        }
        return this;

    }
    //if the total number of nodes in a linked list are 2 or more,
    //swap the head with the last node on the list.

    //ADVANCED BONUS
    recursiveContains(data, runner){
        if(data==runner.data)
            return true;
        if(runner.next!==null)
            this.recursiveContains(data,runner.next);
        else
            return false;

    }
    //try to refactor contains with a function that calls itself

    isEmpty(){
        if(this.head === null){
            return false;
        }
        return true;
    }

    removeFront(){
        if(!this.isEmpty()){
            this.head = this.head.next;
            this.length--;
        }
        return this;
    }

    display(){
        var runner = this.head;
        while(runner !== null){
            console.log(runner.data);
            runner = runner.next;
        }

        return this;
    }
}