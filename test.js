it("should calculate the smallest number", function(){
 expect(findMin(1,4,12,-3)).toEqual(-3)
})
it("should calculate the smallest number", function(){
    expect(findMin(1,-1)).toEqual(-1)
   })
it("should calculate the smallest number", function(){
    expect(findMin(1,3)).toEqual(1)
   })
it("should merge objects correctly", function(){
    const obj1 = {a:1, b:2}
    const obj2 = {c:3, d:4}
    expect(mergeObjects(obj1,obj2)).toEqual(obj3 = {a:1,b:2, c:3, d:4})
})
it("should double and return arguments", function(){
    expect(doubleAndReturnArgs([1,2,3],4,4)).toEqual([1,2,3,8,8])
})
it("should double and return arguments", function(){
    expect(doubleAndReturnArgs([2],10,4)).toEqual([2, 20, 8])
})