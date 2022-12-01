class LargeInt {
   constructor(str = '', digit = 3, arr = []) {
      this.digit = digit
      this.arr = arr
      if (str.length % this.digit != 0) {
         this.arr.push(str.substring(0, str.length % this.digit))
      }

      for (let i = str.length % digit; i < str.length; i += this.digit) {
         this.arr.push(str.substring(i, i + this.digit))
      }
   }

   plus(num) {
      let big, small, result = []
      if (this.arr.length > num.arr.length) {
         big = [...this.arr]
         small = [...num.arr]
      } else {
         big = [...num.arr]
         small = [...this.arr]
      }
      let remember = 0
      for (let i = 0; i < small.length; i++) {
         let sum = parseInt(small[small.length - 1 - i]) + parseInt(big[big.length - 1 - i])
         if (remember == 1) {
            sum += 1; remember = 0
         }
         console.error(Math.pow(10, this.digit));
         if (sum >= Math.pow(10, this.digit)) {
            sum -= Math.pow(10, this.digit)
            remember = 1
         }
         //  checking case if sum needs zeros
         if (sum.toString().length < this.digit) {
            sum = "0".repeat(this.digit - sum.toString().length) + sum
         }


         result.unshift(sum)
         console.log("Sum and remember", sum, remember)
      }
      for (let i = small.length; i < big.length; i++) {
         let sum = big[big.length - 1 - i]
         if (remember == 1) {
            sum += 1; remember = 0
         }
         result.unshift(sum)
      }
      if (remember == 1) {
         result.unshift(1)
      }
      console.log("Result " + result)
      let resultObj = new LargeInt('', this.digit, result)
      return resultObj
   }

   divide(num) {
      let big, small, times = 0

      if ((this.arr.length > num.arr.length) || (this.arr.length == num.arr.length && parseInt(this.arr[0]) > parseInt(num.arr[0]))) {
         big = [...this.arr]
         small = [...num.arr]
      }

      // minus section
      console.log(big.length);
      while (big.length > small.length && big[0] >= small[0]) {
         console.log('debug');
         times++
         let remember = 0, result = []
         for (let i = 0; i < small.length; i++) {
            let bigOne = parseInt(big[big.length - 1 - i])
            let smallOne = parseInt(small[small.length - 1 - i])
            console.log(smallOne, bigOne);
            if (remember == -1) {
               bigOne--
            }
            if (bigOne - smallOne < 0) {
               bigOne = bigOne * 10 + bigOne
               remember = -1
            }
            let dif;
            dif = bigOne - smallOne
            if (dif.toString().length < this.digit) {
               dif = "0".repeat(this.digit - dif.toString().length) + dif
            }

            result.unshift(dif)
            console.log("Res", result)

         }
         for (let i = small.length; small.length < big, length; i++) {
            let x = parseInt(big[big.length - 1 - i])
            if (remember == -1) {
               x--
               if (x < Math.power(10, this.digit)) {
                  x += Math.power(10, this.digit)
                  remember = -1
               } else {
                  remember = 0
               }

            }
            result.unshift(x)
            big = [...result]
         }
         console.log(result)
      }

      console.log(times);

   }





}



// const num1 = new LargeInt("30")
// const num2 = new LargeInt("140")

// const num4 = num1.plus(num2)
// const num3 = new LargeInt('830')
// const num5 = num4.plus(num3)

const num6 = new LargeInt("1540")
const num7 = new LargeInt("175")

num6.divide(num7)