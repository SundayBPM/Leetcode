let nums = [2,7,11,15]
nums = [3,2,4]
const target = 9

// const two_sum = (nums,target) => {
//     for x in numx:
//         for y in numnx:
//             sum = x + y
//                 if sum == target
//                     return sum

// }

const two_sum = (nums,target) => {
    // outer:
    for (let i=0; i < nums.length; i++) {
        // console.log(nums[i]);
        for (let x=0; x < nums.length; x++){
            if  (i != x) {
                // console.log(`--> ${x}`)
                sum = nums[i] + nums[x]
                console.log(`${nums[i]} + ${nums[x]} = ${nums[i] + nums[x]}`)
                if (sum === target) {
                    const koor = [i,x]
                    console.log("Test")
                    console.log(koor)
                    // break outer
                    return koor
                }
            }
        }
    }
}

console.log(two_sum(nums,target))
// console.log("Hello World")