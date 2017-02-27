<style scoped>
  .container {
    text-align: center;
  }
  #item-0:hover {
    color: #2973b7;
    font-weight: 200;
  }
  #item-1:hover {
    color: #cb3837;
    font-weight: 200;
  }
  #item-2:hover {
    color: #42b983;
    font-weight: 200;
  }
  #item-3:hover {
    color: #00d1b2;
    font-weight: 200;
  }
  #item-4:hover {
    color: #FF7619;
    font-weight: 200;
  }
  .items {
    transition-duration:1s;
    color: gray;
  }
  .items:hover {
    transform: scale(2);
    cursor: pointer;
  }
</style>
<template>
  <div class="landing">
    <section class="hero is-fullheight is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <p class="title">
            Jackel's Vue-Cli Template
          </p>
          <p class="subtitle">
            <img src="../assets/logo.png" alt="">
          </p>
          <div class="container">
            <ul>
              <li v-for="(item, index) in includes" class="items" :id="'item-' + index">
                <a :href="item.url" target="_blank">{{item.name}}</a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'landing',
  data () {
    return {
      includes: [
        {
          'name': 'Vue 2.0',
          'url': 'https://vuejs.org/'
        },
        {
          'name': 'VueResource',
          'url': 'https://github.com/pagekit/vue-resource'
        },
        {
          'name': 'VueRouter',
          'url': 'https://github.com/vuejs/vue-router'
        },
        {
          'name': 'Bulma',
          'url': 'http://bulma.io/'
        },
        {
          'name': 'FontAwesome',
          'url': 'http://fontawesome.io/'
        }
      ]
    }
  }
}
</script>
