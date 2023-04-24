import sinon from "sinon";
import chai from "chai";
import Student from "../controllers/studentCtrl.js";

let studobj = new Student();

let expect = chai.expect;

describe('------spay-----', function () {
    it('test user function',function() {
        expect(studobj.userId()).to.be.equal(12)
    })
    // it('function count',function() {
    //     let spyobj=sinon.spy(studobj,'getInfo')
    //     studobj.home(5);
    //     expect(spyobj.calledOnce).to.be.true;
    // })
    it('function arguments check',function() {
        let spyobj=sinon.spy(studobj,'getInfo')
        studobj.home(12);
        expect(spyobj.calledWith(12,1)).to.be.true;
    })
})