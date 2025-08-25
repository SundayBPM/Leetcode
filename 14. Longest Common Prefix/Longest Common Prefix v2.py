from typing import List

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        pref = strs[0]
        pref_len = len(pref)

        for s in strs[1:]:
            print(s)
            print("+++>",s[0:pref_len])
            while pref != s[0:pref_len]:
                print(pref,pref_len)
                print("tidak sama")
                pref_len -= 1
                if pref_len == 0:
                    return ""
                
                pref = pref[0:pref_len]
                print("------------------------")
            print("===============================================")
        return pref 

strs = ["flower","flow","flight"]
result=Solution().longestCommonPrefix(strs)
print(result)
