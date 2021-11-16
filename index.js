//write your code here
function replaceWithYerr (array, startIndex, deleteCount) {
    let newArray = [...array];
    if(startIndex === undefined && deleteCount === undefined) {
        for (let i = 0; i < newArray.length; i++) {
            newArray[i] = 'yerr';
        }
    } else if(deleteCount === undefined){
     for (let i = startIndex; i < newArray.length; i++) {
        newArray[i] = 'yerr';
        }
    }else {
        for(let i = startIndex; i < startIndex + deleteCount; i++){
            newArray[i] = 'yerr'
        }
    }
    return newArray;
}
 const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];
 
 console.log(replaceWithYerr(months, 1, 3));