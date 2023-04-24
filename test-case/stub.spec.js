import sinon from "sinon";
import chai from "chai";
import Student from "../controllers/studentCtrl.js";

let studobj = new Student();

let expect = chai.expect;

describe('------stub-----', function () {
    
    it('function arguments check',function() {
        let stub=sinon.stub(studobj,'getExternal')
        
        stub.withArgs(40).returns(5);
        expect(studobj.finalMarks(40)).to.be.equal(54);
    })
})