class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const storeMap = new Map()
        strs.forEach((str) => {
            const sortedString = Array.from(str).sort().join('')
            storeMap.set(sortedString,[...(storeMap.get(sortedString) || []) , str])
        })
        return Array.from(storeMap.values())
     
    }   
}
