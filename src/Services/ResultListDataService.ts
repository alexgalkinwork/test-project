import ResultListService from './ResultListService';

export default function ResultListDataService(): Function {
  return (obj: any, property: any) => {
    obj[property] = ResultListService.create();
  };
}
