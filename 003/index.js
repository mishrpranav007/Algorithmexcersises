class Stack{

    constructor()
    {
        this.items = [];
    }

    push(element)
    {
        this.items.push(element);
    }
    pop()
    {
        if(this.items.length === 0)
        {
            return -1;
        }
        else{

            this.items.pop();
        }
    }

    peek()
    {
        return this.items[this.items.length-1];
    }

    functionforprecedence(input)
   {
    if(input === '^')
    {
        return 3;
    }
    else if(input === '*' || input === '/')
    {
        return 2;
    }
    else if(input === '+' || input === '-')
    {
        return 1;
    }
    else
    {
        return -1;
    }
}
functioninfixtopostfix(str)
{
    let index = 0;

    var stk = new Stack();
    stk.push('#');

    let finalstring = " ";


    for(index = 0;index<str.length;index += 1)
    {
        if((str[index]>='a' && str[index]<='z') || (str[index]>='A' && str[index]<='Z'))
        {
            finalstring += str[index];
        }
        else if(str[index] === '(')
        {
             stk.push(str[index]);
        }
        
        else if(str[index] === ')')
        {
            while(stk.peek() !== '#' && stk.peek() != '(')
            {
                let char1 = stk.peek();
                stk.peek();
                finalstring += char1;
            }
            if(stk.peek() === '(')
            {
                let char2 = stk.peek();
                stk.peek();
            }
        }
        else{
            while(stk.peek() !== '(' && functionforprecedence(str[index])<=functionforprecedence(stk.peek()))
            {
                let char3 = stk.peek();
                stk.peek();
                finalstring += char3;
            }

            stk.push(str[i]);
        }

        while(stk.peek() !== '#')
        {
            let char1 = stk.peek();
            stk.peek();
            finalstring += char1;
        }
    }

    return finalstring;
}
}
 

newFunction();



console.log(stk1.functioninfixtopostfix("2+3*4"));

function newFunction() {
    Stack;
    stk1 = new Stack();
}

module.exports.Stack = Stack;
