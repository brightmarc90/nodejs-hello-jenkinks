import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);
const { expect } = chai;

describe("GET /", () => {
  it("should return Hello World", (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.be.equal('Hello World!');
        done();
      });
  });
});