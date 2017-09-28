const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const StringBuilder = require('../StringBuilder');

describe('StringBuilder', function(){

  var sb;
  beforeEach(function(){
    sb = new StringBuilder("foo");
  });

  it('should be a function', function(){
    expect(StringBuilder).to.be.a('function');
  });

  it('should take in a string', function(){
    expect("foo").to.be.a('string');
  });
})

describe('.trimString', function(){
  it('should have a trimString method', function(){
    var sb = new StringBuilder("hello");
    expect(sb.trimString).to.be.a('function');
  })
  it('should return a trimmed string', function(){
    var sb = new StringBuilder("  hello");
    expect(sb.trimString()).to.equal("hello");
  });
});

describe('.reverse', function(){
  it('should have reverse method', function(){
    var sb = new StringBuilder("hello");
    expect(sb.reverse).to.be.a('function');
  });
  it('should reverse the string', function(){
    var sb = new StringBuilder("hello");
    expect(sb.reverse()).to.equal("olleh");
  });
});
