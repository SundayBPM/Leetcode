class Solution:
    def romanToInt(self, s: str) -> int:
        output = 0
        i = 0
        # for i in range(len(s)):
        while i < len(s):
            if s[i] == "M":
                output += 1000
                i += 1
            
            elif s[i] == "D":
                output += 500
                i += 1
            
            elif s[i] == "C":
                if i+1 < len(s) and s[i+1] =="M":
                    output += 900
                    i += 2
                elif i+1 < len(s) and s[i+1] =="D":
                    output += 400
                    i += 2
                else:
                    output += 100
                    i += 1
            
            elif s[i] == "L":
                output += 50
                i += 1
            
            elif s[i] == "X":
                if i+1 < len(s) and s[i+1] == "C":
                    output += 90
                    i += 2
                elif i+1 < len(s) and s[i+1] == "L":
                    output += 40
                    i += 2
                else:
                    output += 10
                    i += 1
            
            elif s[i] == "V":
                output += 5
                i += 1

            elif s[i] == "I":
                if i+1 < len(s) and s[i+1] == "X":
                    output += 9
                    i += 2
                elif i+1 < len(s) and s[i+1] == "V":
                    output += 4
                    i += 2
                else:
                    output += 1
                    i += 1
        
        return output
    

# result = Solution().romanToInt("LVIII")
result = Solution().romanToInt("MMCDXXV")
print(result)