import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class LoginForm extends Vue {
  private valid = false;
  private username = '';
  private password = '';
  private usernameRules = [(v: any) => !!v || 'Username darf nicht leer sein'];
  private passwordRules = [(v: any) => !!v || 'Password darf nicht leer sein'];

  private login() {
    axios
      .post('http://localhost:3000/login', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        const token = 'Bearer ' + response.data.token;
        localStorage.jwtToken = token;
        axios.defaults.headers.common.Authorization = token;
        this.$router.push({
          name: 'BaseForm'
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
