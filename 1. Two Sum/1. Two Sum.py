from typing import List  # biar List bisa dipakai


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for x in range(len(nums)):
            for y in range(len(nums)):
                if x == y:
                    continue
                add = nums[x] + nums[y]
                if add == target:
                    return [x,y]



result = Solution().twoSum([2,7,11,15],9)
# result = Solution().twoSum([3,2,4],6)
print(result)