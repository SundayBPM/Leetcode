class Solution:
    def intToRoman(self, num: int) -> str:
        # Creating Dictionary for Lookunum_map = {p
        num_map = {
            "M": 1000,
            "CM": 900,
            "D": 500,
            "CD": 400,
            "C": 100,
            "XC": 90,
            "L": 50,
            "XL": 40,
            "X": 10,
            "IX": 9,
            "V": 5,
            "IV": 4,
            "I": 1
        }
                
        # Result Variable
        r = ''
        
        
        for k, v in num_map.items():
            print(v,k,r,num)
            if num >= v:
                x_dev = num//v
                print("===>",x_dev)
                if x_dev < 4:
                    for i in range(x_dev):
                        r += k
                        num -= v

            print("======================================")
        return r
        
        
            # print(v,r)
            # # If n in list then add the roman value to result variable
            # while v <= num:
            #     print("===>",v,num)
            #     print("++++>",v)
            #     print(f"===>{r} += {v}")
            #     r += k
            #     print(f"===>{num}-={v}")
            #     num-=v
        
        # if num >= 10:
        #     x_dev = num//10
        #     # print(x_dev)
        #     for i in range(x_dev):
        #         output.append("X")
        #     num = num - (x_dev*10)
        print(output,num)
result = Solution().intToRoman(3749)
print(result)