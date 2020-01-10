const chai = require('chai')
const expect = chai.expect;

var Hotel = require('../models/hotel')

describe('Hotel', () => {
    it('new Hotel returns a Hotel',()=>{
        expect(new Hotel()).to.be.an.instanceOf(Hotel)
    })
    it('should give the hotel a name',()=>{
        expect(new Hotel('my hotel').name).to.equal('my hotel')
    })
    it('should give the hotel a city',()=>{
        expect(new Hotel('london').name).to.equal('london')
    })
    it('should return an array from Hotel reviews',()=>{
        expect(new Hotel('my Hotel','London').reviews).to.be.an('array')
    })
})
describe('Hotel methods',()=>{
    it('should return a number from reviewCount()',()=>{
        expect(new Hotel('my Hotel','London').reviewCount()).to.be.a('number')
    })
    it('should return a number from rating()',()=>{
        expect(new Hotel('my Hotel','London').rating()).to.be.a('number')
    })
    it('should return a string from ratingAsStars()',()=>{
        expect(new Hotel('my Hotel','London').ratingAsStars()).to.be.a('string')
    })
    it('should return a number from urlSlug()',()=>{
        expect(new Hotel('my Hotel','London').urlSlug()).to.be.a('string')
    })
})