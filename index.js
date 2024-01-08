// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
];
function superbowlWin(record){
    let result =record.find(winner =>winner.result === "W")

    if(result){
        return result.year;
    }
    else{
        return undefined
    }

}
console.log(superbowlWin(record));