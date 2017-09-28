const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const StringBuilder = require('../StringBuilder');

describe('StringBuilder', function(){

  var sb;
  beforeEach(function(){
    sb = new StringBuilder("foo bar");
  });

  it('should be a function', function(){
    expect(StringBuilder).to.be.a('function');
  });

  it('should take in a string', function(){
    sb.string.should.be.a('string');
  });
})

describe('.trimString', function(){
  it('should have a trimString method', function(){
    var sb = new StringBuilder("foo bar");
    expect(sb.trimString).to.be.a('function');
  })
  it('should return a trimmed string', function(){
    var sb = new StringBuilder("  foo bar");
    expect(sb.trimString()).to.equal("foo bar");
  });
});

describe('.reverse', function(){
  it('should have reverse method', function(){
    var sb = new StringBuilder("foo bar");
    expect(sb.reverse).to.be.a('function');
  });
  it('should reverse the string', function(){
    var sb = new StringBuilder("foo bar");
    expect(sb.reverse()).to.equal("rab oof");
  });
});

describe('.capitalize', function(){
  it('capitalize should be a function', function(){
    var sb = new StringBuilder("foo bar");
    expect(sb.capitalize).to.be.a('function');
  });
  it('should capitalize the first letter of each word', function(){
    var sb = new StringBuilder("foo bar");
    expect(sb.capitalize()).to.equal("Foo Bar");
  });
});

describe('.toArray', function(){
  it('toArray should be a function', function(){
    var sb = new StringBuilder("foo bar");
    expect(sb.toArray).to.be.a('function');
  });
  it('should return an array of the words', function(){
    var sb = new StringBuilder("foo bar");
    expect(sb.toArray()).to.deep.equal(["foo", "bar"]);
  });
})