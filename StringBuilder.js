class StringBuilder {
  constructor(string) {
    this.string = string;
  }

  trimString(){
    return this.string.trim();
  }

  reverse(){
    let splitString = this.string.split("");
    let revArr = splitString.reverse();
    let revString = revArr.join("");
    return revString;
  }

  capitalize(){
    let splitString = this.string.split(" ");
    for(let i = 0; i < splitString.length; i++){
      let letters = splitString[i].split("");
      letters[0] = letters[0].toUpperCase();
      splitString[i] = letters.join("");
    }
    let capString = splitString.join(" ");
    return capString;
  }

  toArray(){
    let splitString = this.string.split(" ");
    return splitString;
  }

}



module.exports = StringBuilder;