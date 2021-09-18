import { equal } from 'assert';
import chai from 'chai';
import compact from '../array/compact.js'
import initial from '../array/initial.js';

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

  describe('#initial(). Gets all but the last element of array.', () => {
    it("initial([1, 2, 3] => [1, 2])", () => {
      expect(initial([1, 2, 3])).to.eql([1, 2]);
    });
    it("initial([Nan, 2, 100, undefine]) => [NaN, 2, 100]", () => {
      expect(initial([NaN, 2, 100, undefined])).to.eql([NaN, 2, 100]);
    })
  });
});