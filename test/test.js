var request = require('supertest');
var app = require('../index.js');
describe('GET /', function () {
    it('respond with hello world,cicd on', function (done) {
        //navigate to root and check the the response is "hello world"
        request(app).get('/').expect('hello world,testing for BA', done);
    });
});
