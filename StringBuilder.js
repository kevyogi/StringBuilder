class StringBuilder {
  constructor(string) {
    this.string = string;
  }

  toString(){
    return this.string.trim();
  }

  reverse(){
    let splitString = this.string.split("");
    let revArr = splitString.reverse();
    let revString = revArr.join("");
    return revString;
  }



}



module.exports = StringBuilder;