import chai from "chai";
let expect=chai.expect;
import chaiHttp from "chai-http";
chai.use(chaiHttp)

describe('Task api',function(){
    it('get users',function(done){
        chai.request('http://localhost:8080').get('/user').end((err,res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body).to.have.all.keys('data','statusText')
            done()
        })
    })
})