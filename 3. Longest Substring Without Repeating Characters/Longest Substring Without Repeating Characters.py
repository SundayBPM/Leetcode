class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        result = 0
        for i in range(len(s)):
            y = i
            temp = []
            while y < len(s):
                if s[y] not in temp:
                    temp.append(s[y])
                else:
                    break
                y += 1

            if result < len(temp):
                result = len(temp)

        return result

# result = Solution().lengthOfLongestSubstring("abcabcbb")
# result = Solution().lengthOfLongestSubstring("pwwkew")
result = Solution().lengthOfLongestSubstring(" ")
print(f'hasil akhir {result}')
# print(result)