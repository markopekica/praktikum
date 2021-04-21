var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
const dayOfYear = require("../index.js");


describe('funkcija koja za dani datum vraca redni broj tog dana u godini', function() {
    it('za 01.01.2012. potrebno je vratiti 1', function () {
        expect(dayOfYear(2012, 1, 1)).to.equal(1)
    });
    it('za 01.02.2012. potrebno je vratiti 32', function () {
        expect(dayOfYear(2012, 2, 1)).to.equal(32)
    });
    it('za 01.03.2000. potrebno je vratiti 60', function () {
        // leap year
        expect(dayOfYear(2000, 3, 1)).to.equal(61)
    });
    it('za 01.03.2001. potrebno je vratiti 59', function () {
        expect(dayOfYear(2001, 3, 1)).to.equal(60)
    });
});