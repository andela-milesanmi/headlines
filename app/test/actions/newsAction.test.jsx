import chai from 'chai';
import chaiHttp from 'chai-http';
import expect from 'expect';
import { should } from 'chai';
import NewsAction from '../../actions/newsAction';
// import server from '../../../server.js';

// chai.use(chaiHttp);

describe('Sources Actions', function() {
  it('should exist', () => {
    expect(NewsAction).toExist();
  });
});
