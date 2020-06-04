import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseForm extends Vue {
  // @Prop() private phrase: Phrase;

  private valid = false;
  private number = '';
  private text = '';
  private textRules = [
    (v: any) => !!v || 'Text darf nicht leer sein',
    (v: any) => /^[A-Za-zäöüÄÖÜß]+$/.test(v) || 'Eingabe muss ein String sein'
  ];

  private numberRules = [
    (v: any) => !!v || 'Zahl darf nicht leer sein',
    (v: any) => /^\d+$/.test(v) || 'Eingabe muss eine Zahl sein'
  ];
  // private textRule = [(v) => (v && v.length >= 3) || 'Bitte ausfüllen'];

  // private created() {}

  private validate() {
    const form: any = this.$refs.form;
    form.validate();

    if (this.valid) {
      this.$router.push({
        name: 'ResultList',
        params: { number: this.number, text: this.text }
      });
    }
  }

  private goBack() {
    this.$router.go(-1);
  }
}
