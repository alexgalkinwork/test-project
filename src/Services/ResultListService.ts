import ResultListData from '@/Types/ResultListData';

export default class ResultListService {
  private static resultListService: ResultListService;

  public static create() {
    if (!ResultListService.resultListService) {
      ResultListService.resultListService = new ResultListService();
    }
    return ResultListService.resultListService;
  }

  private createList(numberAsString: string, text: string): ResultListData[] {
    const number = Number(numberAsString);
    const numberTextArray: ResultListData[] = [];
    for (let i = 1; i <= number; i++) {
      numberTextArray.push({ id: i, text });
    }
    return numberTextArray;
  }
}
