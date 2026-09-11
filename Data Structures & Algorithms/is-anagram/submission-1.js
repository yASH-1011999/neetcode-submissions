class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s?.length !== t?.length) return false
        const sMap = new Map();
        s.split('').forEach((i) => {
            const iVal = sMap.get(i)
            if(iVal) {
                sMap.set(i , iVal+1)
            }else {
                sMap.set(i, 1)
            }
        })
         const tMap = new Map();
        t.split('').forEach((i) => {
            const iVal = tMap.get(i)
            if(iVal) {
                tMap.set(i , iVal+1)
            }else {
                tMap.set(i, 1)
            }
        })
    for( const val of  sMap){
        const tVal = tMap.get(val[0])
        if(!tVal) return false
        if(tVal !== val[1]) return false
        }
    return true
    }
}
