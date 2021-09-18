import { equal } from 'assert';
import chai from 'chai';
import compact from '../array/compact.js'

const expect = chai.expect;

describe('Array', () => {
  describe('#compact(). Creates an array with all falsey values removed.', () => {
    it("compact([0, 1, false, 2, '', 3]) => [1, 2, 3]", () => {
      expect(compact([0, 1, false, 2, '', 3])).to.eql([1, 2, 3]);
    });
    it("compact([20, NaN, false, 0, '', null]) => [20]", () => {
      expect(compact([20, NaN, false, 0, '', null])).to.eql([20]);
    });
  });
});