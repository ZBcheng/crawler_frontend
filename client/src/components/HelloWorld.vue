<template>
  <form class="col s12" id="log_form" method="post" action="index.html"
    style="width: 60%; margin:auto; margin-top: 18%; background: black">
    <div id="app">
      <h1>{{message}}</h1>
      <div class="col s12">
        <div class="row">
          <div class="input-field col s12" onkeydown="submit">
            <i class="material-icons prefix">search</i>
            <input v-model="message" type="text" id="search_info" name="search_info" class="autocomplete">
            <label for="autocomplete-input">get start here....</label>
            <!-- <script src="/static/js/search.js"></script> -->
          </div>
        </div>
      </div>
    </div>

  </form>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>