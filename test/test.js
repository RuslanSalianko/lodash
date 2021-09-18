import { equal } from 'assert';
import chai from 'chai';
import compact from '../array/compact.js';
import head from '../array/head.js';

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

  describe('#head(). Gets the first element of array', () => {
    it("head([1,2,3] => 1", () => {
      equal(head([1, 2, 3]), 1);
    });
    it("head([NaN,2,3] => NaN", () => {
      equal(head([NaN, 2, 3]), NaN);
    });
    it("head([]) => undefine", () => {
      equal(head([]),undefined);
    })
  });
});