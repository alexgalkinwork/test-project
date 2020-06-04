import { Component, Prop, Vue } from 'vue-property-decorator';
import ResultListDataService from '@/Services/ResultListDataService';
import TableHeader from '@/Types/TableHeader';
import ResultListData from '@/Types/ResultListData';
import { ResultListInterface } from '@/Types/ResultListInterface';

@Component
export default class ResultList extends Vue {
  @Prop() public number!: string;
  @Prop() public text!: string;

  @ResultListDataService()
  private list!: ResultListInterface;

  private snackbar = false;
  private headers: TableHeader[] = [];
  private data: ResultListData[] = [];
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

  private populateTable() {
    this.data = this.list.createList(this.number, this.text);

    this.headers = [
      { text: 'ID', value: 'id' },
      { text: 'Text', value: 'text' }
    ];
  }
}
