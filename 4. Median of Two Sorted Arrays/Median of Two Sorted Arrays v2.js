// FAIL

const nums1 = [1,3]
const nums2 = [2]

const findMedianSortedArrays = (nums1,nums2) => {
    let nums_concat = nums1.concat(nums2)
    let output = []
    const len_arr = nums_concat.length
    
    // while ( x < y)
    
    for (let l = 0; l < len_arr; ++l) {
        console.log(`> ${l}`)
        for (let r = 0; r < len_arr; ++r) {
            console.log(`==> ${r}`)
            if ( nums_concat[l] > nums_concat[r]) {
                console.log(`====> ${nums_concat[l]} > ${nums_concat[r]}`)
                output.splice(nums_concat[l])
                console.log(`====> push ${nums_concat[l]}`)
            } else if (nums_concat[l] < nums_concat[r]) {
                output.splice(r,1,nums_concat[l])
                console.log(`----> ${nums_concat[l]} < ${nums_concat[r]}`)
            }
            console.log(`++++> ${output}`)

        }
    }
};

findMedianSortedArrays(nums1,nums2)

// nums2.splice(0,0,1)
// nums2.splice(5,0,33)
// nums2.splice(2,0,5)
// nums2.splice(2,1,33)

// console.log(nums2)
// console.log(nums1+nums2)