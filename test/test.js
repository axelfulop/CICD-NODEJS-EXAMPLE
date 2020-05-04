var request = require('supertest');
var app = require('../index.js');
describe('GET /', function () {
    it('respond with hello world', function (done) {
        //navigate to root and check the the response is "hello world"
<<<<<<< HEAD
        request(app).get('/').expect('hello world,cicd on', done);
=======
        request(app).get('/').expect('hello world,testing build ^^', done);
>>>>>>> f00057f6fb778a282bf5d376adc0a387806c0c8d
    });
});
