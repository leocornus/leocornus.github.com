/**
 * the Vue apps from Vue.js introduction.
 */

/**
 * the very first app, just render data to DOM by using
 * the straightforward template syntax.
 *  {{message}}
 * 
 * the syntax to load template.
 */
var app = new Vue({
  el: '#app',
  data: {
    ready: 'none',
    staticMessage: 'Hello Vue.js!',

    usaPresent: '',
    canadaPrime: '',
    dougTitle: ''
  },
  // computed will binding dynamic data, it just like 
  // data, but could use function.
  computed: {
    dynamicMessage: function() {
      return "I am from a function";
    }
  }
});

