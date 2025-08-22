let x = -121
x = 12345321
x = 1234321
x = 101101

// temp_var = [index pertama terakhir, indeks keddua terakhir, index ketiga terakhir]
// if temp var == real_var
//     maka polindrome

const plindrome_checker2 = (number) => {
    const num = String(number)
    const mid_value = Math.floor(num.length/2)
    const temp_value = []
    const target = num.split('').slice(0,mid_value).join()
    console.log(`middle value = ${mid_value}`)
    console.log(target)
    // console.log(`Target= ${target}`)
    // console.log(target.slice(mid_value+1))
    if (num.length < 2){
        return true
    } else if (num.length == 2) {
        const num_arr = num.split('')
        if (num_arr[0] == num_arr[1]) {
            return true
        } else {
            return false
        }

    }
    for (let i = num.length-1; i > mid_value; --i) {
        temp_value.push(num[i])
        console.log(` looping: ${num[i]}`)
    }
    console.log(`Hasil akhir= ${temp_value}`)
    if (temp_value.join() == target) {
        return true
    } else {
        return false
    }
}

console.log(plindrome_checker2(x))

// const y = "abcdef"
// for (let i=y.length - 1; i >= 0; i--) {
//     console.log(i)
// }