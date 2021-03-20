<template>
<div class="wrapper">
  <h1>Play the MadLib Game!</h1>
  <h2>Enter 5 adjectives</h2>
  <form v-if="creating" @submit.prevent="addAdj1">
    Adjective: <input v-model="adj1">
    <br />
    <p></p>
    Adjective: <input v-model="adj2">
    <br />
    <p></p>
    Adjective: <input v-model="adj3">
    <br />
    <p></p>
    Adjective: <input v-model="adj4">
    <br />
    <p></p>
    Adjective: <input v-model="adj5">
    <br />
    <p></p>
    Click 'submit' to save your answers, then click 'See Your Madlib'
    <p></p>
    <button type="submit">Submit</button>
    <p></p>
    <router-link to="/create"><button type="button">See Your MadLib</button></router-link>
  </form>
</div>
</template>

<script>
export default {
  name: 'create',
  data() {
    return {
      creating: true,
      adj1: '',
      adj2: '',
      adj3: '',
      adj4: '',
      adj5: '',
      story: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    addAdj1() {
      this.$root.$data.madlibitems.adj1 = this.adj1;
      this.$root.$data.madlibitems.adj2 = this.adj2;
      this.$root.$data.madlibitems.adj3 = this.adj3;
      this.$root.$data.madlibitems.adj4 = this.adj4;
      this.$root.$data.madlibitems.adj5 = this.adj5;
      this.$root.$data.story = this.$root.$data.madlibitems.text1 + this.$root.$data.madlibitems.adj1 +
      this.$root.$data.madlibitems.text2 + this.$root.$data.madlibitems.adj2 +
      this.$root.$data.madlibitems.text3 + this.$root.$data.madlibitems.adj3 +
      this.$root.$data.madlibitems.text4 + this.$root.$data.madlibitems.adj4 +
      this.$root.$data.madlibitems.text5 + this.$root.$data.madlibitems.adj5 + this.$root.$data.madlibitems.text6;
      this.$root.$data.history.push(this.$root.$data.story);
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

button {
  font-size: 1.2em;
}
</style>
