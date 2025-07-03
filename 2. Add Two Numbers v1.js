const l1 = [2,4,3]
const l2 = [5,6,4]

var addTwoNumbers = (l1, l2) => {
    // console.log(`Input= ${l1}, ${l2}`)
    let index = 0
    let output = []

    if (l1.length > l2.length) {
        console.log("masuk kesini")
        index = l1.length-1
        for (let i = l2.length; i <= index; i++) {
            // console.log(i)
            l2.push(0)
        }
        // console.log(l2)
    } else if (l1.length < l2.length) {
        console.log("masuk kesini")
        index = l2.length-1
        for (let i = l1.length; i <= index; i++) {
            // console.log(i)
            l1.push(0)
        }
        // console.log(l1)
    } else {
        index = l1.length-1
    }
    // console.log(`Index= ${index}`)

    let tempVal = 0 
    for (let i = 0; i <= index; i++) {
        let sum = l1[i]+l2[i]+tempVal
        console.log(`${l1[i]}+${l2[i]}+${tempVal}`)
        console.log(sum)
        if (sum < 10) {
            output.push(sum)
            tempVal = 0
        } else {
            // let to_string = 
            // console.log(` ==> ${to_string}`)
            tempVal = parseInt(String(sum)[0])
            // console.log(`masuk kesini ${tempVal}`)
            sum = sum % 10
            output.push(sum)
        }
        console.log(output)
        console.log("================================================================")
    }

    if (tempVal != 0) {
        output.push(tempVal)
    }
    return output

};

console.log(addTwoNumbers(l1,l2))












// let index = 0
//     let output = []

//     if (l1.length > l2.length) {
//         index = l1.length-1
//         for (let i = l2.length; i <= index; i++) {
//             l2.push(0)
//         }
//     } else if (l1.length < l2.length) {
//         index = l2.length-1
//         for (let i = l1.length; i <= index; i++) {
//             l1.push(0)
//         }
//     } else {
//         index = l1.length-1
//     }

//     let tempVal = 0 
//     for (let i = 0; i <= index; i++) {
//         let sum = l1[i]+l2[i]+tempVal
//         if (sum < 10) {
//             output.push(sum)
//             tempVal = 0
//         } else {
//             // let to_string = 
//             // console.log(` ==> ${to_string}`)
//             tempVal = parseInt(String(sum)[0])
//             // console.log(`masuk kesini ${tempVal}`)
//             sum = sum % 10
//             output.push(sum)
//         }
//     }

//     if (tempVal != 0) {
//         output.push(tempVal)
//     }
//     console.log(output)