const chai = require('chai')
const expect = chai.expect;

var Hotel = require('../models/hotel')

describe('Hotel Class', () => {
    it('should return a Hotel from new Hotel',()=>{
        expect(new Hotel()).to.be.an.instanceOf(Hotel)
    })
    it('should give the Hotel a name', ()=>{
        expect(new Hotel('my Hotel').name).to.equal('my Hotel')
    })
    it('should give the Hotel a city', ()=>{
        expect(new Hotel('my Hotel','London').city).to.equal('London')
    })
    it('should return an array from Hotel reviews', ()=>{
        expect(new Hotel('my Hotel','London').reviews).to.be.an('array')
    })
})
describe('Hotel Methods', ()=>{
    it('should return a number from reviewCount()',()=>{
        expect(new Hotel('my Hotel','London').reviewCount()).to.be.a('number')
    })
    it('should return a number from rating()',()=>{
        expect(new Hotel('my Hotel','London').rating()).to.be.a('number')
    })
    it('should return a string from ratingAsStars()',()=>{
        expect(new Hotel('my Hotel','London').ratingAsStars()).to.be.a('string')
    })
    it('should return a string from urlSlug()',()=>{
        expect(new Hotel('my Hotel','London').urlSlug()).to.be.a('string')
    })
})