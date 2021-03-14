
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if((!matrix)){
    return [];
  }
  let newMatrix = [];
    matrix.forEach((item,index)=>{
      if ((index%2)==0){
        newMatrix.push(item);
    }
    else newMatrix.push(item.reverse());

    });

  // console.log(matrix.flat(Infinity).sort());
   return newMatrix.flat(Infinity);
}
