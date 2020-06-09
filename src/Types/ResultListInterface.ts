import ResultListData from '@/Types/ResultListData';

export interface ResultListInterface {
  createList(numberAsString: string, text: string): Array<ResultListData>;
}
