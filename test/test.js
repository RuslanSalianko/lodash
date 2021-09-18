import { equal } from 'assert';
import chai from 'chai';
import compact from '../array/compact.js';
import drop from '../array/drop.js';

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

  describe('#drop(). Creates a slice of array with n elements dropped from the beginning.', () => {
    it("drop([1, 2, 3]) => [2, 3]", () => {
      expect(drop([1, 2, 3])).to.eql([2, 3]);
    });

    it("drop([1, 2, 3], 2) => [3]", () => {
      expect(drop([1, 2, 3], 2)).to.eql([3]);
    });

    it("drop([1, 2, 3], 5) => []", () => {
      expect(drop([1, 2, 3], 5)).to.eql([]);
    });

    it("drop([1, 2, 3], 0) => [1, 2, 3]", () => {
      expect(drop([1, 2, 3], 0)).to.eql([1, 2, 3]);
    });
  });
});