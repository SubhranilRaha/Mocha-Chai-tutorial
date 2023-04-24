import chai from "chai";
let assert=chai.assert;
let should=chai.should();
let expect=chai.expect;

// ########### ASSERT #############

describe('-------Aspect check-------',function(){
    let userName='code improve';
    let mylist={
        item:[{
            id:1,name:'demo'
        }],
        title: 'user list'
    }
    it("check string",function(){
        assert.typeOf(userName,'string');
    })
    
    it("check equal",function(){
        assert.equal(userName,'code improve');
    })

    it("check length",function(){
        assert.lengthOf(mylist.item,1);
    })
})

// ########### SHOULD #############

describe('-------Should check-------',function(){
    let userName='code improve';
    let mylist={
        item:[{
            id:1,name:'demo'
        }],
        title: 'user list'
    }
    it('check string',function(){
        userName.should.be.a('string');
    })
    it('check equal',function(){
        userName.should.equal('code improve');
    })
    it('check length',function(){
        mylist.should.have.property('item').with.lengthOf(1);
    })
})

// ########### EXPECT #############

describe('-------Expect check-------',function(){
    let userName='code improve';
    let mylist={
        item:[{
            id:1,name:'demo'
        }],
        title: 'user list',
        address: {
            country: 'india',
            phoneNo: ['90909090909','7878787787']
        }
    }
    it('check string',function(){
        expect(userName).to.be.a('string')
    })
    it('check equal',function(){
        expect(userName).to.equal('code improve')
    })
    it('check length',function(){
        expect(mylist).to.have.property('item').with.lengthOf(1)
    })
    it('api object match',function(){
        expect(mylist).to.have.all.keys('item','title','address')
    })
    it('phone no',function(){
        expect(mylist).to.have.nested.property('address.phoneNo[0]')
    })
    it('include country',function(){
        expect(mylist).to.have.nested.include({'address.country':'india'})
    })
})