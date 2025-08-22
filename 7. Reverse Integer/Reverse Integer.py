class Solution:
    def reverse(self, x: int) -> int:

        
        x_str  = str(x)
        temp = []
        for i in range(len(x_str)):
            if x_str[-(i+1)] == "-":
                temp.insert(0,x_str[-(i+1)])
            else: 
                temp.append(x_str[-(i+1)])
            print(x_str[-(i+1)])
        
        rev_str = "".join(temp)

        if int(rev_str) < -2**31 or int(rev_str) > 2**31:
            return 0

        return int(rev_str)

# param = 123
param = -321
result = Solution().reverse(param)
