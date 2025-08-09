package main

import "fmt"

func main(){
    var s string = "abcabcbb"
	// var s string = "bbbbb"
	// var s string = "pwwkew"
    var result int = lengthOfLongestSubstring(s)
    fmt.Println(result)
}


func lengthOfLongestSubstring(s string) int {
    var output int = 0
	length_inp := []byte(s)
	var temp []byte
	fmt.Println(length_inp)

	for i:=0; i < len(length_inp); i++ {
	
		if len(length_inp)-i <= output {break}
		
		fmt.Println("Looping ke-",i+1)

		temp = []byte{}
		// for _, y := range length_inp {
		for y:=i; y < len(length_inp); y++ {
			val := length_inp[y]
			if !byteInSlice(val,temp) {
				temp = append(temp,val)
				fmt.Println("Hasil append ==>",string(temp))
				if output < len(temp) {
					output = len(temp)
				}
			} else {
				break
			}
		}
	}

	return output
}

func byteInSlice(target byte, slice []byte) bool {
	for _, val := range slice {
		if val == target {
			return true
		}
	}
	return false
}