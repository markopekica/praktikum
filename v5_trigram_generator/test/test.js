var chai = require('chai')
var expect = chai.expect
const trigramGenerator = require('../index')

describe('trigram funkcija', () => {
    it('trigramGenerator treba biti funkcija', () => {
        //trigramGenerator()
        expect(trigramGenerator).to.be.an('function')
    })
    it('baci gresku ako je parametar broj (ako nije string)', () =>  {
        expect( () => trigramGenerator(1) ).to.throw()
    })
    it('baci gresku ako parametar nije predan', () =>  {
        expect( () => trigramGenerator() ).to.throw()
    })
    it('ako parametar ima manje od 3 rijeci vrati prazno polje', () => {
        expect( trigramGenerator("cuz u") ).to.eql( [] )
    })
    it('ako parametar ima 3 rijeci vrati zadnju', () => {
        expect( trigramGenerator("i know you") ).to.equal( ["you"] )
    })
})