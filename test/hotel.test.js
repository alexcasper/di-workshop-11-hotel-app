const chai = require('chai')
const expect = chai.expect;

var Hotel = require('../models/hotel')

describe('Hotel', () => {
    it('new Hotel returns a Hotel',()=>{
        expect(new Hotel()).to.be.an.instanceOf(Hotel)
    })
})