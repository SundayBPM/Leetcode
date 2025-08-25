from typing import List
from pprint import pprint

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # output = []
        output_ind = set()
        n = len(nums)
        # while len(output) != target_len:
        for i in range(n):
            for j in range(i+1,n):
                for k in range(j+1,n):
                    # if i == j or j == k or k == i:
                    #     continue
                    # else:
                    triplet = nums[i] + nums[j] + nums[k]
                    tripplet_inds = sorted([nums[i],nums[j],nums[k]])
                    
                    if triplet == 0 :
                        # output.append(tripplet_inds)
                        output_ind.add(tuple(tripplet_inds))


        # pprint(output) 
        return list(list(i) for i in output_ind)

nums = [-1,0,1,2,-1,-4]
# nums = [0,1,1]
# nums = [-2,0,1,1,2]
# nums = [0,1,1]
result = Solution().threeSum(nums)
pprint(result)
# print(ind)



# logika agar outputnya nol
# hasil = [] 
# selama hasil != 0:
#     i 