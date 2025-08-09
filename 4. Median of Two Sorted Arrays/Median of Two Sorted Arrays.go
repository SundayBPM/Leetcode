package main

import "fmt"

func main(){
	nums1 := []int{1,2,5,8}
	nums2 := []int{3,4,7,6}
	
	result := findMedianSortedArrays(nums1,nums2)
	fmt.Println("ini output akhir ==>", result)
}




func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    
	var output float64

	arr := append(nums1,nums2...)
	// arr := []string{"a","b","c"}
	for {
		sorted := true
		fmt.Println("sebelum sort =>", arr)

		// for i,x := range arr {
		for i:=0; i < len(arr)-1; i++{
			if arr[i] > arr[i+1] {
				temp := arr[i]
				arr[i] = arr[i+1]
				arr[i+1] = temp
				sorted = false
			}
		}
		fmt.Println("Sesudah sort => ", arr)
		if sorted == true {break}
	}

	odd := len(arr)
	indeks := (odd/2)
	if odd%2 == 0 {
		output = ((float64(arr[indeks])+float64(arr[indeks-1]))/2)
	} else {
		output = float64(arr[indeks])
	}
	// fmt.Println(odd)

	return output
}