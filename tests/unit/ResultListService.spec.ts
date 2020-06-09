import ResultListService from '@/Services/ResultListService.ts';

const resultListService = new ResultListService();

describe('Creates a list', () => {
  it('Returns an array with 3 objects', () => {
    expect(resultListService.createList('3', 'hallo')).toEqual([
      { id: 1, text: 'hallo' },
      { id: 2, text: 'hallo' },
      { id: 3, text: 'hallo' }
    ]);
  });

  it('Returns an array with empty text', () => {
    expect(resultListService.createList('3', '')).toEqual([
      { id: 1, text: '' },
      { id: 2, text: '' },
      { id: 3, text: '' }
    ]);
  });

  it('Returns an empty array when a negative number gets entered', () => {
    expect(resultListService.createList('-1', 'hallo')).toEqual([]);
  });

  it('Returns an empty array when not numeric char is entered as number', () => {
    expect(resultListService.createList('a', 'hallo')).toEqual([]);
  });
});
