import sinon from "sinon";
import chai from "chai";
let expect=chai.expect;
let i=1;
describe('----Hook-----',function(){
    after(function(){
        console.log("-----------last----------")
    })
    before(function(){
        console.log("----------first----------")
    })
    afterEach(function(){
        console.log("--after test case :"+i+"---")
        console.log(" ")
        i++
    })
    beforeEach(function() {
        sinon.restore;
        console.log("--before test case :"+i+"--")
    })
    let data='code';
    it('check string',function(){
        expect(data).to.be.a("string")
    })
    it.skip('check value',function(){
        expect(data).to.be.equal("code")
    })
    // it.only('check value 2',function(){
    //     expect(data).to.be.equal("code")
    // })
})
describe.skip('----Hook 2----',function(){
    after(function(){
        console.log("-----------last----------")
    })
    before(function(){
        console.log("----------first----------")
    })
    afterEach(function(){
        console.log("--after test case :"+i+"---")
        console.log(" ")
        i++
    })
    beforeEach(function() {
        sinon.restore;
        console.log("--before test case :"+i+"--")
    })
    let data='code';
    it('check string',function(){
        expect(data).to.be.a("string")
    })
    it.skip('check value',function(){
        expect(data).to.be.equal("code")
    })
    // it.only('check value 2',function(){
    //     expect(data).to.be.equal("code")
    // })
})