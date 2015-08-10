var assert = require('assert')
  , should = require('should')
  , request = require('supertest')
  , app = require('../app')

describe('Express Test', function(){
  var server
  before(function(){
    server = app.listen(3000)
  })

  after(function(){
    server.close()
  })

  describe('Get tests', function(){
    it('Get / should return 200', function(done){
      request('localhost:3000')
        .get('/')
        .expect(200)
        .end(function(err, res){
          if(err) throw err
          res.text.should.equal('Hello World!')
          done()
        })
    })

    it('Get /body should return 200', function(done){
      request('localhost:3000')
        .get('/body')
        .expect(200)
        .end(function(err, res){
          if(err) throw err
          res.body.should.have.property('message')
          res.body.should.have.property('createdBy')
          res.body.message.should.equal('hi this is a message')
          res.body.createdBy.should.equal('User Test')
          done()
        })
    })
  })
})
