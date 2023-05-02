import chai from "chai";
import Student from "../controllers/studentCtrl.js";
import nock from "../node_modules/nock/index.js";

let studobj = new Student();

let expect = chai.expect;

describe('------Nock-----', function () {
    
    it('api test',function(done) {
       let obj={status:'ok',statusCode:200,data:[]}
       const apihit=nock('https://api.sampleapis.com').get('/coffee/hot').reply(200,obj)
       studobj.thirdpartyApi().then(function(record){
        expect(record).to.be.eql(obj)
        done()
       })
       .catch(err=>{
        done(new Error(err))
       })
    })
})