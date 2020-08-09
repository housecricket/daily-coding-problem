const k_longest_substring = function(string, k) {
    let l = 0
    let r = 0
    const charCount = new Map()
    let longestSubstring = ''
  
    while (r < string.length) {
      const char = string.charAt(r)
  
      // update count
      if (charCount.has(char)) {
        charCount.set(char, charCount.get(char) + 1)
      } else {
        charCount.set(char, 1)
      }
  
      // size of the char count is equal to k
      // start moving left pointer until the window substring has at most distinct k characters
      if (charCount.size > k) {
        while (charCount.size > k && l < r) {
          const leftChar = string.charAt(l)
          const count = charCount.get(leftChar)
  
          if (count === 1) charCount.delete(leftChar)
          else charCount.set(leftChar, count - 1)
  
          l++
        }
      }
  
      const substring = string.substring(l, r + 1)
      longestSubstring =
        substring.length > longestSubstring.length ? substring : longestSubstring
      r++
    }
    return longestSubstring
  }
  
  console.log(k_longest_substring("abcba", 2))