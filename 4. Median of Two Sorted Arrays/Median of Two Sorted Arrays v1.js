// const nums1 = [1,3]
// const nums1 = [1,3]
// const nums1 = [0,0]
const nums1 = [2,2,4,4]
// const nums2 = [2,4]
// const nums2 = [2]
// const nums2 = [0,0]
const nums2 = [2,2,4,4]

const findMedianSortedArrays = (nums1,nums2) => {
    let median
    let nums_concat = nums1.concat(nums2)
    let len = nums_concat.length-1
    let sorted = false
    do {
        sorted = true
        for (let i=0; i < len; i++) {
            if (nums_concat[i] > nums_concat[i+1]) {
                const temp = nums_concat[i]
                nums_concat[i] = nums_concat[i+1]
                nums_concat[i+1] = temp 
                sorted = false
            }
            // console.log(nums_concat)
        }
        console.log(nums_concat)
    } while (!sorted)

    if ((len+1)%2 == 0) {
        const middle_value = nums_concat.length/2
        console.log(`masuk sini ${nums_concat[middle_value]}`)
        median = (nums_concat[middle_value]+nums_concat[middle_value-1])/2
        // console.log(median)
        return median
    } else {
        median = Math.trunc(nums_concat.length/2)
        // console.log(nums_concat[median])
        return nums_concat[median]
    }
};

console.log(findMedianSortedArrays(nums1,nums2))

// console.log(20%2)

