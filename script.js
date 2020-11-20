//SOLUTION 1
function cleanString(s) {
    //convert string to an array and split it, more array operators available
    let stringArray=s.split('')
    let tempArr=[];
    //loop through array and check for '#', if found perform backspace, else do nothing
    for(let i=0; i<stringArray.length;i++){
        if(stringArray[i]=="#") {
            //backspace
            tempArr.pop();
        }
        else{
            tempArr.push(stringArray[i]);
        }
    }
    // console.log(tempArr);
    return tempArr.join(' ');

}

console.log(cleanString('abc#d##c'));
console.log(cleanString('abc##d######'));
console.log(cleanString('#######'));
console.log(cleanString(''));
console.log(cleanString('a#bc#d'));

//SOLUTION 2
function cleanString2(s){
    let tempArr=[];
    s.split('').map(element => {
        element ==='#' ? tempArr.pop() : tempArr.push(element)
    });

    return tempArr.join(' ');
}

console.log(cleanString2('abc#d##c'));
console.log(cleanString2('abc##d######'));
console.log(cleanString2('#######'));
console.log(cleanString2(''));
console.log(cleanString2('a#bc#d'));

//SOLUTION 3  ==>recursive, calling the function onto itself again and again
function cleanString3(s){
    return s.includes("#")?cleanString3(s.replace(/[\s\S]?\#/,"")):s; //spacing caused issues
};

console.log(cleanString3('abc#d##c'));
console.log(cleanString3('abc##d######'));
console.log(cleanString3('#######'));
console.log(cleanString3(''));
console.log(cleanString3('a#bc#d'));