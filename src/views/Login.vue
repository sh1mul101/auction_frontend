<template>
  <form @submit.prevent="handleSubmit">
    <div class="login">
      <body class=" bg-white flex-1 font-sans ">
        <div class="flex flex-col items-center justify-center">
          <div class="pt-12">
            <router-link to="/" class="text-4xl font-semibold font-sans uppercase text-green-200">
            Auction
            <!-- <img
                class="w-16 py-4"
                src="../image/auction-final.png"
                alt="auction logo"/> -->
            </router-link>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/4 border-2 border-green-200 m-4 rounded-xl shadow-xl">
            <h1 class="font-sans text-center text-gray-500 text-2xl p-4">Sign-In to our Website</h1>
            <div class="px-6 bg-white mb-6 rounded-lg">
              <div class="mb-4">
                <label class="text-gray-900 block mb-2 text-m">
                  Enter Your Email

                </label>
                <input
                  type="text"
                  v-model="email"
                  class="w-full bg-white border px-2 py-2 rounded shadow text-sm"
                  placeholder="your@example.com"/>
              </div>

              <div class="mb-4">
                <label class="text-gray-900 block mb-2 text-m"
                  >Password</label
                >
                <input
                  type="text"
                  v-model="password"
                  class="w-full bg-white border border-gray-200 text-sm px-2 py-2 rounded shadow"
                  placeholder="Your Password"
                />
              </div>

              <div
                class="flex items-center justify-center w-full bg-green-400 rounded hover:bg-green-500"
              >
                <button
                  class="text-white font-bold py-2 px-4 text-lg focus:outline-none"
                  type="submit"
                >
                  Continue
                </button>
              </div>
              <div>
                <a
                  class="text-green-500 no-underline inline-block align-baseline font-semibold text-sm float-left pt-2" 
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div class="text-center">
              <p class="text-gray-900 text-sm py-4" >
                Don't have an account?
                <router-link to="/register" class="text-green-500 font-bold"
                  >Create an Account</router-link
                >
              </p>
            </div>
            <hr class="my-2 mx-6 pb-2" />
          </div>
        </div>
      </body>
  </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login",
  /** props: {
    data: String,
    msg: String
  }, **/


  data() {
    return {
      email:'',
      password:''
    }
  },


  methods: {
    async handleSubmit() {
      const response = await axios.post('login', {
        email: this.email,
        password: this.password,
      });

      localStorage.setItem('token',response.data.token);
      this.$store.dispatch('user', response.data.user);
      this.$router.push('/hellouser');
      
    },

   /** methods: {
      hello(data)
      {
        alert(data)
      }
    }, **/

  }
};
</script>
