import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseForm extends Vue {
  private valid = false;
  private number = '';
  private text = '';
  private textRules = [
    (v: any) => !!v || 'Text darf nicht leer sein',
    (v: any) => /^[A-Za-zäöüÄÖÜß ]+$/.test(v) || 'Eingabe muss ein String sein'
  ];

  private numberRules = [
    (v: any) => !!v || 'Zahl darf nicht leer sein',
    (v: any) => /^\d+$/.test(v) || 'Eingabe muss eine Zahl sein'
  ];

  // Validates the form
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
}
