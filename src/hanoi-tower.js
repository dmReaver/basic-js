module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    let turns_ = (2**disksNumber) -1
    let seconds_ = turns_/(turnsSpeed/(3600));
    return {turns: turns_, seconds: seconds_}
}

// let a = calculateHanoi(736, 78853564) //, {turns: 3.6147378671465184e+221, seconds: 1.6502813140731933e+217})
// console.log(a);