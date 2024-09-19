import { ReverseStringPipe } from './reverseString.pipe';

describe('ReverseStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseStringPipe();
    expect(pipe).toBeTruthy();
  });
});
