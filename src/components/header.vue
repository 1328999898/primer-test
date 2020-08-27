<template>
  <ul>
    <li v-for="item in routes" :key="item.path">
      <router-link :to="{path: item.path}">
        {{ item.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'headerComp',
  props: {
    msg: String
  },
  computed: {
    routes() {
      return this.$router.options.routes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding: 0 !important;
  margin: 0;
  /* border-bottom: 1px solid #ccc; */
  background-color: #ccc;
}
ul, li {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}
</style>
