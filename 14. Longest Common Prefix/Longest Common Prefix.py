from typing import List

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        pref = strs[0]
        len_pref = len(pref)

        for i in strs[1:]:
            while pref != i[0:len_pref]:
                print("tidak sama")
                len_pref -= 1
                if len_pref == 0 :
                    print("zonk")
                    return ""
                
                pref = pref[0:len_pref]
                print(pref)
                print("====================")
            print("Akhirnya sama")
        
        return pref


strs = ["flower","flight","flow"]
result=Solution().longestCommonPrefix(strs)
print(result)
