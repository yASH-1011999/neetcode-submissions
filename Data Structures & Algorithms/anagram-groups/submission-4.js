class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const storeMap = new Map()
        strs.forEach((str) => {
            const sortedString = Array.from(str).sort().join('')
            if (storeMap.has(sortedString)) {
                storeMap.set(sortedString,[...storeMap.get(sortedString), str])
            }else{
                storeMap.set(sortedString, [str])
            }
        })
        return [...storeMap].map(([_,val]) => val)
     
    }   
}
