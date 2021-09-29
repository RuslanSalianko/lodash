import { equal } from 'assert';
import chai from 'chai';
import compact from '../array/compact.js'
import concat from '../array/concat.js';

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

  describe('#concat(). Creates a new array concatenating array with any additional arrays and/or values.', () => {
    it("concat([1], 2, [3], [[4]]) => [1, 2, 3, [4]]", () => {
      expect(concat([1], 2, [3], [[4]])).to.eql([1, 2, 3, [4]]);
    });

    it("concat([1, 2, 3], [4, 5, 6], 7, [8, 9]) => [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
      expect(concat([1, 2, 3], [4, 5, 6], 7, [8, 9])).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

  });
});