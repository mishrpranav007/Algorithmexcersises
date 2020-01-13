class Node{
    constructor(element)
    {
        this.element = element;
        this.next = null;
    }
}
class LinkedList{

    constructor()
    {
        this.head = null;
        this.size = 0;
    }
    addelementatend(value)
    {
        let node = new Node(value);

        let current = 0;
 
        if(this.head === null)
        {
            this.head = node;
        }
        else
        {
            current = this.head;
 
            while(current.next !== null)
            {
                current = current.next;
            }
 
            current.next = node;
        }
 
        this.size++;
    }
    addelementatgivenindex(index,value)
    {
        if(index>0 && index>this.size)
        {
            return false;
        }
        else
        {
            let node = new Node(value);

            let curr;
            let prev;

            curr = this.head;

            if(index === 0)
            {
                node.next = this.head;
                this.head = node;
            }
            else
            {
                let counter = 0;

                curr = this.head;

                while(counter < index)
                {
                    counter++;
                    prev = curr;
                    curr = curr.next;
                }

                node.next = curr;

                prev.next = node;
            }
        }

        this.size++;
    }
    Deleteanodefromthelist()
    {
        let current1,current2;

        if(this.head === null)
        {
            return false;
        }
        else if(this.head.next === null)
        {
                this.head = null;
    
                
        }
        else
        {
              current1 = this.head;
              while(current1.next !== null)
              {
                  current2 = current1;
                  current1 = current1.next;
              }
    
              current2.next = null;
        }
    
        this.size--;
    }
    findvalueatgivenindex(index)
    {
        let countindex = 0;

        let current  = this.head;
    
        while(current !== null)
        {
            if(countindex === index)
            {
                return current.element;
    
            }
            countindex++;
            current = current.next;
             
        } 
    }
    updatevalue(oldvalue,newvalue)
    {
      let current = this.head;

      while(current.next !== null)
      {
         if(current.element === oldvalue)
         {
             current.element = newvalue;

             return current.element;
         }

         current = current.next;
      }
    }

    reversethelinkedlist()
    {
        let current = this.head; 
        let prev = null;
        let next = null; 

        while (current != null) { 
          
        next = current.next; 

          
        current.next = prev; 

          
        prev = current; 
        current = next; 
    } 
    this.head = prev;
    }

    sizeoflist()
    {
        return this.size;
    }
    PrintList()
    {
        let current = this.head;
         

        let str = " ";

        while(current)
        {
            str += current.element + " ";

            current = current.next;
        }

        console.log(str);
        
    }

}

let ll = new LinkedList();

ll.addelementatend(10);

ll.addelementatend(20);

ll.addelementatend(30);

//ll.reversethelinkedlist();

//ll.updatevalue(20,50);


ll.PrintList();

//console.log(ll.PrintList());

module.exports.LinkedList = LinkedList;



     

    

 
 