import { expect } from 'chai';
import { makeHello } from '../src';

describe('makeHello', () => {
  it('returns hello world when called without a param', () => {
    expect(makeHello()).to.equal('Hello world');
  });
  it('returns hello world when called with an empty string', () => {
    expect(makeHello('')).to.equal('Hello world');
  });
  it('returns hello bob when given the name bob', () => {
    expect(makeHello('bob')).to.equal('Hello bob');
  });
});
