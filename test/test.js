import { equal } from 'assert';
import chai from 'chai';

import compact from '../array/compact.js'
import initial from '../array/initial.js';
import drop from '../array/drop.js';
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

  describe('#initial(). Gets all but the last element of array.', () => {
    it("initial([1, 2, 3] => [1, 2])", () => {
      expect(initial([1, 2, 3])).to.eql([1, 2]);
    });
    it("initial([Nan, 2, 100, undefine]) => [NaN, 2, 100]", () => {
      expect(initial([NaN, 2, 100, undefined])).to.eql([NaN, 2, 100]);

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