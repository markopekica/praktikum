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
    it('za 01.03.2000. potrebno je vratiti 61', function () {
        // leap year
        expect(dayOfYear(2000, 3, 1)).to.equal(61)
    });
    it('za 01.03.2001. potrebno je vratiti 60', function () {
        expect(dayOfYear(2001, 3, 1)).to.equal(60)
    });
    //1600-ta godina
    it('za 1.3.1600. potrebno je vratiti 61', () => {
        expect(dayOfYear(1600, 3, 1)).to.equal(61)
    })
    it('za 29.2.1600. treba vratiti 60', () => {
        expect(dayOfYear(1600, 2, 29)).to.equal(60)
    })
    it("za 29.2.1601. treba vratiti 'greska - 29.2. ne postoji u godini koja nije prjestupna'", () => {
        expect(dayOfYear(1601, 2, 29)).to.equal('greska - 29.2. ne postoji u godini koja nije prjestupna')
    })
    //1900-ta godina !leapYear
    //12-ti mjesec
    it('za 31.12.1600. treba vratiti 366', () => {
        expect(dayOfYear(1600, 12, 31)).to.equal(366)
    })
    it('za 31.12.1601. treba vratiti 365', () => {
        expect(dayOfYear(1601, 12, 31)).to.equal(365)
    })
    it('za 31.12.1900. treba vratiti 365', () => {
        expect(dayOfYear(1900, 12, 31)).to.equal(365)
    })
    it('za 1.3.1900. treba vratiti 60', () => {
        expect(dayOfYear(1900, 3, 1)).to.equal(60)
    })
    it('za 29.2.1900. treba vratiti gresku; 1900 nije prestupna', () => {
        expect(dayOfYear(1900, 2, 29)).to.equal('greska - 29.2. ne postoji u godini koja nije prjestupna')
    })
});
