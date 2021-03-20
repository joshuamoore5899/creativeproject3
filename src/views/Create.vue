<template>
<div>
  <h1>MadLibs</h1>
    <hr>
    <div class="content">
      <div class="madlibtext">
        <i>Current MadLib:</i>
        <p></p>
        <div class="current-story">
          {{this.$root.$data.story}}
        </div>
        <p></p>
        <router-link to="/"><button type="button">Create New MadLib</button></router-link>
        <p></p>
        <button type="button" v-on:click="clear">Clear MadLib History</button>
        <p></p>
        <i>MadLib History:</i>
        <p></p>
        <div v-if="this.$root.$data.history.length===0">No saved MadLibs</div>
        <div v-for="story in history" v-bind:key="history.indexOf(story)">
          {{story}}<p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {}
  },
  methods: {
    clear() {
      this.$root.$data.history = [];
    }
  },
  computed: {
    madlibs() {
      return this.$root.$data.getMadLibs();
    },
    history() {
      return this.$root.$data.history;
    }
  }
}
</script>

<style scoped>

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .madlibtext {
    width: 90%;
    font-size: 1.0em;
  }
  button {
    font-size: 1em;
  }
  @media only screen and (min-width: 700px) {
  .madlibtext {
    width: 50%;
    font-size: 1.4em;
  }
  }
</style>
