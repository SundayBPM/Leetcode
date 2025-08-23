class Solution:
    def intToRoman(self, num: int) -> str:
        # List pasangan angka dan romawinya, urut dari besar ke kecil
        val_map = [
            (1000, "M"),
            (900, "CM"),
            (500, "D"),
            (400, "CD"),
            (100, "C"),
            (90, "XC"),
            (50, "L"),
            (40, "XL"),
            (10, "X"),
            (9, "IX"),
            (5, "V"),
            (4, "IV"),
            (1, "I")
        ]
        
        res = ""
        for val, sym in val_map:
            print(sym)
# result = Solution().intToRoman(3749)
# print(result)

num_map = {
    1000:"M", 900:"CM", 500:"D", 400:"CD",
    100:"C", 90:"XC", 50:"L", 40:"XL",
    10:"X", 9:"IX", 5:"V", 4:"IV", 1:"I"
}

for k, v in num_map.items():
    print(k, v)