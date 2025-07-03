let x = -121
x = 12345321
x = 12235321
x = "babad"
// x = 1015101
// x = 1001
// x = 0


var isPalindrome = (x) => {
    let number = String(x)
    const answer = number.slice(0,number.length/2)
    let target = []
    
    console.log(answer)
    console.log(number.length/2)

    if (number.length < 2) {
        return true
    } 
    // else if (number.length == 2){
        
    // }
    for (let i = number.length-1; i >= number.length/2; --i) {
        target.push(number[i])
    }
    
    target = target.join('')
    if (target == answer) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome(x))

// BETUL