package main

import "fmt"

func main(){
    var nums []int = []int{2,7,11,15}
    var target int = 9
    var result []int = twoSum(nums, target)
    fmt.Println(result)
}

func twoSum(nums []int, target int) []int {
    var sum int
    var result []int
    
    OuterLoop:
    for i, i_val := range nums {
        fmt.Println("index:", i_val, "value:", i_val)
        for x, x_val := range nums {
            sum = i_val + x_val
            if sum == target && i != x {
                fmt.Printf("%d + %d = %d\n",i_val,x_val,sum)
                result = append(result, i, x)
                break OuterLoop
            }
        }
    }
    
    fmt.Println(nums)   
    fmt.Println(target)
    return result
}