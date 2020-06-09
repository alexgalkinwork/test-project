import { Component, Prop, Vue } from 'vue-property-decorator';
import ResultListDataService from '@/Services/ResultListDataService';
import TableHeader from '@/Types/TableHeader';
import ResultListData from '@/Types/ResultListData';
import ResultListService from '@/Services/ResultListService';

@Component
export default class ResultList extends Vue {
  @Prop() public number!: string;
  @Prop() public text!: string;

  @ResultListDataService()
  private list!: ResultListService;

  private snackbar = false;
  private headers: Array<TableHeader> = [];
  private data: Array<ResultListData> = [];
  private observer: IntersectionObserver | null = null;

  private created() {
    this.populateTable();
  }

  private mounted() {
    this.createObserver();
  }

  private destroyed() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  /**
   * Creates an observer that displays a snackbar when a selected element comes into the viewport
   */
  private createObserver() {
    const elementToTrigger = 10;
    const trigger = this.$el.querySelector(`tr:nth-child(${elementToTrigger})`);
    if (trigger) {
      this.observer = new IntersectionObserver((entry, observer) => {
        if (entry[0].isIntersecting) {
          this.snackbar = true;
        }
      });

      this.observer.observe(trigger);
    }
  }

  /**
   * Populates the table with data generated from user input
   */
  private populateTable() {
    this.data = this.list.createList(this.number, this.text);

    this.headers = [
      { text: 'ID', value: 'id' },
      { text: 'Text', value: 'text' }
    ];
  }
}
