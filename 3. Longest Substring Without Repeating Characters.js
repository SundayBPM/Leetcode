// const s = "abcabcbb"
// const s = "bbbbb"
const s = "pwwkew"
// const s = 'dvdf'
// const s = 'asjrgapa'
// const s = 'wapdtutpbztygnsrxajjngcomikjzsdwssznovdruypcnjulkfuzmxnafamespckjc'




const lengthOfLongestSubstring = (s) => {
    let output = 0
    let temp = []
    const length_inp = s.length

    for (let y = 0; y < length_inp; ++y) {
        if (length_inp - y <= output) break;

        console.log(`Looping ke => ${y}`)
        temp = []
        for ( let i = y; i < length_inp; ++i) {
            console.log(`Looping ke => ${i} leng = ${output}`)
            if (!temp.includes(s[i])) {
                temp.push(s[i])
                console.log(temp)
                if (output < temp.length) {
                    output = temp.length
                }
            } 
            else if (temp.includes(s[i])) {
                break
            }
        }

    }
    return output;
};

console.log(lengthOfLongestSubstring(s))

// const lengthOfLongestSubstring2 = (s) => {
//     let seen = new Set();
//     let left = 0;
//     let maxLen = 0;

//     for (let right = 0; right < s.length; right++) {
//         while (seen.has(s[right])) {
//             seen.delete(s[left]);
//             left++;
//         }
//         seen.add(s[right]);
//         maxLen = Math.max(maxLen, right - left + 1);
//     }

//     return maxLen;
// };


// console.log(lengthOfLongestSubstring2(s))