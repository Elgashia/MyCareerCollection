<template>
  <div role="group">
    <b-row class="my-1">
      <b-col sm="1"><label for="input-none">Name:</label></b-col>
      <b-col sm="2">
        <b-form-input id="input-none" :state="null" type="text" placeholder="username"></b-form-input>
      </b-col>
    </b-row>
    <b-form-input id="inputLive"
                  v-model.trim="name"
                  type="text"
                  placeholder="Enter Comment"></b-form-input>
    <div v-for="(content, idx) in commentli" :key="idx">test: {{ content }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      commentli: [1, 2, 3, 4, 5]
    }
  }
}
</script>
