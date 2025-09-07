
var FreqStack = function() {
       this.freqMapData = new Map();  
    this.groupMapData = new Map(); 
    this.maxFreqData = 0;   
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
      let freq = (this.freqMapData.get(val) || 0) + 1;
    this.freqMapData.set(val, freq);

    if (freq > this.maxFreqData) {
        this.maxFreqData = freq;
    }

    // Add to groupMap
    if (!this.groupMapData.has(freq)) {
        this.groupMapData.set(freq, []);
    }
    this.groupMapData.get(freq).push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
     let stack = this.groupMapData.get(this.maxFreqData);
    let val = stack.pop();

    this.freqMapData.set(val, this.freqMapData.get(val) - 1);

    if (stack.length === 0) {
        this.groupMapData.delete(this.maxFreqData);
        this.maxFreqData--;
    }

    return val;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */