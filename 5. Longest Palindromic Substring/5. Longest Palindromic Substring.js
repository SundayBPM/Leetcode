let x = "cbuubd"
// x = "babad"
x = "abaab"

// console.log(x.slice(0,2))


const longestPalindrome = (s) => {
    let expan = (l,r) => { 
        // console.log(`expan ${l,r}`)
        // let expan_out = ""
        while ( l >= 0 && r < s.length && s[l] == s[r]) {
            // expan_out = s.slice(l+1, r)
            // console.log(expan_out)
            l -= 1
            r += 1

        }
        console.log(l,r)
        console.log(s[l+1],s[r])
        const out_slice = s.slice(l+1, r)
        console.log(`out_slice = ${out_slice}`)
        return out_slice
    }

    let result = ""

    for (let i=0 ; i < s.length; i++) {
        console.log(i)
        const sub1 = (expan(i,i))
        if (sub1.length > result.length) {
            result = sub1
        }
        const sub2 = (expan(i,i+1))
        if (sub2.length > result.length) {
            result = sub2
        }
        console.log("============================================")
    }
    return result 

}
// var longestPalindrome = (s) => {
//     // looping len tapi sekip index pertama awal dan terakhir
//     // looping lagi loping lagi
//     let list_word = []
//     for (let i=0; i < s.length/2; i++){
//         console.log(s[s.length-1-i])
//         console.log(s[i])
//         // console.log(s.length-1-i)
//     }

// }

// console.log(longestPalindrome(x))
console.log(longestPalindrome(x))
