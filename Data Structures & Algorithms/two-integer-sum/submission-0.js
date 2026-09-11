class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        const result = []
        for (let i = 0; i < nums?.length; i++){
            const minus  = target - nums?.[i]
            const minusValInMap= map.get(minus)
            if(minusValInMap){
             return [minusValInMap - 1, i]
            }
            else {
                map.set(nums[i],i+1)
            }
        }
    }
}
