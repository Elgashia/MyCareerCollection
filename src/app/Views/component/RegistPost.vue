<template>
  <b-form @submit="onSubmit" @reset="onReset">
    <b-form-group id="email"
                  label="Email address:"
                  label-for="email"
                  description="We'll never share your email with anyone else.">
      <b-form-input type="email"
                    v-model="form.email"
                    required
                    placeholder="Enter email">
      </b-form-input>
    </b-form-group>
    <b-form-group id="name"
                  label="Your Name:"
                  label-for="exampleInput2">
      <b-form-input type="text"
                    v-model="form.name"
                    required
                    placeholder="Enter name">
      </b-form-input>
    </b-form-group>
    <b-form-group id="pw"
                  label="Password:"
                  label-for="exampleInput3">
      <b-form-input required
                    v-model="form.password"
                    placeholder="Enter Password">
      </b-form-input>
    </b-form-group>
    <b-form-group id="chkpw"
                  label="Password Check:"
                  label-for="exampleInput2">
      <b-form-input type="text"
                    v-model="form.chkPassword"
                    required
                    placeholder="Please, retyping password">
      </b-form-input>
    </b-form-group>
    <b-form-group id="checkBox">
      <b-form-checkbox-group v-model="form.checked">
        <b-form-checkbox value="0">Keep Id</b-form-checkbox>
        <b-form-checkbox value="1">Keep Login</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
</template>

<script>
export default {
  name: 'registpost',
  data () {
    return {
      form: {
        email: '',
        name: '',
        password: '',
        chkPassword: '',
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      if (this.form.password === this.form.chkPassword) {
        alert(JSON.stringify(this.form))
      } else {
        alert('비밀번호가 일치하지않습니다. 다시 입력바랍니다.')
      }
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.password = 'null'
      this.form.checked = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script>

<style>

</style>
