import sinon from "sinon";
import chai from "chai";
import Student from "../controllers/studentCtrl.js";

let studobj = new Student();

let expect = chai.expect;

describe('------Mock-----', function () {
    
    it('function call count',function() {
        let mock=sinon.mock(studobj)
        let expt=mock.expects('getExternal')
        expt.exactly(1)
        expt.withArgs(40)
        studobj.finalMarks(40);
        mock.verify();
    })
})