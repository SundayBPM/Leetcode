package main

import "fmt"

func main() {
	var s string = "babad"
	result := longestPalindrome(s)
	fmt.Println(result)
}

func longestPalindrome(s string) string {
    var expan = func(l int, r int) string {
		for l >= 0 && r < len(s) && string(s[l]) == string(s[r]) {
			fmt.Println(l," dan ", r)
			l -= 1
			r += 1
		}
		var out_slice string = s[l+1:r]
		return  out_slice
	}

	var result string

	for i,_ := range s {
		var evenPalind string = expan(i,i)
		if len(evenPalind) > len(result) {
			result = evenPalind
		}

		var oddPalind string = expan(i,i+1)
		if len(oddPalind) > len(result) {
			result = oddPalind
		}
	}

	return result

}