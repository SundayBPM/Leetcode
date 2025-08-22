from typing import List  # biar List bisa dipakai

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        output = nums1+nums2
        x = 0
        while x < len(output):
            print(output[x])
            y = x
            while y < len(output):
            # for y in range(len(output)):
                if output[x] > output[y]:
                    output[x],output[y] = output[y],output[x]
                print(output) 
                y += 1
            x += 1
        
        if len(output)%2 == 0:
            dev = (len(output)//2)
            return ((output[dev-1]+output[dev])/2)
        else:
            return output[len(output)//2]


result = Solution().findMedianSortedArrays([1,2], [3])
# print(result)