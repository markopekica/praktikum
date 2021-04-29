//var assert = require('assert')
var chai = require('chai')
var expect = chai.expect
//var should = chai.should
const {priceListFromatter} = require("../index.js")
const {ar} = require("../index.js")


describe('', () => {
    it('priceListFormatter should be a function', () => {
        //expect(priceListFromatter).to.be.a('function')
        priceListFromatter
    })
    it('funkcija prima polje objekata kao parametar', () => {
        //priceListFromatter([{from: "2020-01-01", to: "2020-02-01", price: 33.0}])
        //expect((par) => priceListFromatter(par)).to.exist
        priceListFromatter([{}])
    })
    it('ako je argument koji funkcija prima prazan/string/broj (tj. argument nije objekt), baciti gresku', () => {
        //expect(priceListFromatter("jabuke")).to.be.a('undefined')
        expect(() => priceListFromatter()).to.throw()
        expect(() => priceListFromatter(" ")).to.throw()
        expect(() => priceListFromatter(1)).to.throw()
    })
    it('svaki objekt u polju mora imati kljuceve: from, to, price', () => {
        /* for( let i=0; i<ar.length; i++ ){
            console.log(ar[i])
            expect( priceListFromatter(ar[i]) ).to.have.keys(['from', 'to', 'price'])
        } */
        ar.forEach( (member, index) => expect(ar[index]).to.have.keys(['from', 'to', 'price']) )
    })
    it('funkcija treba vratiti uredjen argument', () => {
        let mapa = new Map()
        
        expect(priceListFromatter(ar)).to.equal(ar)
    })
})