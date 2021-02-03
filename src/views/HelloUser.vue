<template>
  <div class="hellouser">
      <body class="h-screen bg-green-100">
          <Header />
          <NavUser />
          <div class="flex items-center justify-center">
              <h1 class="flex items-center justify-center text-3xl pt-5 text-green-500" v-if="user">Hello!! {{user.name}}, Magi!! Fuck You!!</h1>
              <h1 v-if="!user">You are not logged in!!</h1>
          </div>
      </body>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import NavUser from '../components/NavUser'
import {mapGetters} from 'vuex'
import 'es6-promise/auto'
export default {
  name: "HelloUser",

    components: {
      Header,
      NavUser
  },

  computed: {
      ...mapGetters(['user'])
  }
  


  /*data() {
      return {
          user: null
      }
  },

  async created() {
      const response = await axios.get('user');

      this.user = response.data;
  },
*/

};
</script>
