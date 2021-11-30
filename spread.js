const filterOutOdds = (...arguements) => arguements.filter(num => num % 2 === 0)

function findMin (...args){
   return Math.min(...args)
}

function mergeObjects(obj1,obj2){
    let newobj={} 
    newobj = ({...obj1,...obj2})
    return newobj
}

function doubleAndReturnArgs(arr,...args){
    let newArr= [...arr,...args.map(function(index){
        return index * 2
    })]
    return newArr
}

const removeRandon = (items) => {
    let toBeRemoved = Math.floor(random() *items.length)
    return [...items.slice(0,toBeRemoved),...items.slice(toBeRemoved+1)]
}

const extend = (array1,array2) =>{
    return[...array1,...array2]
}

const addKeyVal = (obj,key,val) => {
    let newObj = {...obj}
    newObj[key] = val
    return newObj
}

const removeKey = (obj,key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj
}

const comebine =(obj1,obj2) => {
    return {...obj1,...obj2} 
}

const update = (obj,key,val) => {
    let newObj = {...obj}
    newObj[key] = val
    return newObj
}