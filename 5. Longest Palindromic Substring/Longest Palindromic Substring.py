class Solution:
	@staticmethod
	def expan(l,r,s):
		while l >= 0 and r < len(s) and s[l] == s[r]:
			l -= 1
			r += 1
			print(l,r)
		
		# print(s[l+1],s[r])
		# print("+++++++++++++++++++")
		print(f"++> {s[l+1:r]}")
		return s[l+1:r]
    
	def longestPalindrome(self, s: str) -> str:
		result = []
		for i in range(len(s)):
			sub = self.expan(i,i,s)
			print(f"====> {sub}")
			if len(sub) > len(result):
				result = sub
				print(f"==== {result} ====")
			sub2 = self.expan(i,i+1,s)
			if len(sub2) > len(result):
				result = sub2
				print(f"==== {result} ====")
		
		return result

result = Solution().longestPalindrome("babad")
# result = Solution().longestPalindrome("cbbd")
print(result)
# a = "cbbd"
# print(a[-1],a[4])