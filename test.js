const getEvenNum = () => {
    let evenNums = [];
    for(let i = 1; i < 51; i++) {
        if(i % 2 === 0) {
            evenNums.push(i) 
        }
    }
    return evenNums
}