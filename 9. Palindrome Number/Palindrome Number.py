class Solution:
    def isPalindrome(self, x: int) -> bool:
        con_x = str(x)
        # print(len(con_x)//2)
        for i in range(len(con_x)//2):
            left = con_x[i]
            right = con_x[-(i+1)]
            if left != right:
                return False
        return True


param = -121
result = Solution().isPalindrome(param)
print(result)
