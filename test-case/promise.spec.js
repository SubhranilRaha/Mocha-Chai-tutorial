import sinon from "sinon";
import chai from "chai";
import Student from "../controllers/studentCtrl.js";

let studobj = new Student();

let expect = chai.expect;

import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised)

describe('------Promise-----', function () {
    
    it('function value check',function(done) {
        // expect(studobj.dbData()).to.be.equal(10)
        this.timeout(1000)
        studobj.dbData().then(function(result){
            expect(result).to.be.equal(10)
            done()
        })
    })
    it('chai promise value check',function() {
        this.timeout(0)
        return expect(studobj.dbData()).to.eventually.equal(10)
    })


})