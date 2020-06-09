import ResultListData from '@/Types/ResultListData';
import { ResultListInterface } from '@/Types/ResultListInterface';

export default class ResultListService implements ResultListInterface {
  private static resultListService: ResultListService;

  public static create() {
    if (!ResultListService.resultListService) {
      ResultListService.resultListService = new ResultListService();
    }
    return ResultListService.resultListService;
  }

  /**
   * Generates data from user input for a table
   * @param numberAsString
   * @param text
   */
  public createList(
    numberAsString: string,
    text: string
  ): Array<ResultListData> {
    const number = Number(numberAsString);
    const numberTextArray: Array<ResultListData> = [];
    for (let i = 1; i <= number; i++) {
      numberTextArray.push({ id: i, text });
    }
    return numberTextArray;
  }
}
