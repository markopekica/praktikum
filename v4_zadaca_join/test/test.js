var chai = require('chai')
var expect = chai.expect
const {join} = require("../index.js")
const {array, token} = require("../index")


describe('funkcija join - povezuje elemente polja pomocu token-a', () => {
    it('join treba biti funkcija', () => {
        join
    })
    it('array (prvi argument) treba biti polje', () => {
        expect(array).to.be.an('array')
    })
    it('token (drugi argument) bi trebao postojati', () => {
        expect(token).to.exist
    })
    it('token ne bi trebao biti: polje, objekt', () => {
        expect(token).to.not.be.a('array')
        expect(token).to.not.be.a('object')
    })
    it('funkcija treba vratiti string', () => {
        expect( join(array, token) ).to.be.an('string')
    })
    it('funkcija treba vratiti elemente polja povezane tokenom', () => {
        let joinedArrayElements = array.reduce( (accumulator, currentValue) => {
            return String(accumulator) + String(token)   + String(currentValue) 
        })
        expect( join(array, token) ).to.equal(joinedArrayElements)  // joinedArrayElements ili concatenatedArray?
    })
})