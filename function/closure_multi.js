function counter(){
    let count = 0
    function increment(){
        count ++
    }
    function decrement(){
        count --
    }
    function getCount(){
        return count
    }

    return {
        increment,decrement,getCount
    }
}

let c = counter()
c.increment()
c.increment()
c.decrement()
console.log(c.getCount())