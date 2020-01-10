const chai = require('chai')
const expect = chai.expect;

var Hotel = require('../models/hotel')

describe('Hotel', () => {
    it('should return a Hotel from new Hotel',()=>{
        expect(new Hotel()).to.be.an.instanceOf(Hotel)
    })
    it('should give the Hotel a name', ()=>{
        expect(new Hotel('my Hotel').name).to.equal('my Hotel')
    })
    it('should give the Hotel a city', ()=>{
        expect(new Hotel('my Hotel','London').city).to.equal('London')
    })
})