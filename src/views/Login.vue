<template>
  <form action="">
    <div class="login">
    <body class="bg-gray-300 h-screen font-sans">
      <div class="flex flex-col items-center justify-center">
        <div>
          <router-link to="/"><img
              class="w-16 py-4"
              src="../image/auction-final.png"
              alt="auction logo"/>
              </router-link>
        </div>
        <div class="w-1/4">
          <h1 class="font-sans mb-6 text-center">Sign-In to our Website</h1>
          <div class="p-8 bg-white mb-6 rounded-lg shadow-lg">
            <div class="mb-4">
              <label class="font-bold text-gray-900 block mb-2 text-sm">
                Email or mobile phone number

              </label>
              <input
                type="text"
                class="w-full bg-white border px-2 py-2 rounded shadow"
                placeholder="Your Username"/>
            </div>

            <div class="mb-4">
              <label class="font-bold text-gray-900 block mb-2 text-sm"
                >Password</label
              >
              <input
                type="text"
                class="w-full bg-white border border-gray-200 px-2 py-2 rounded shadow"
                placeholder="Your Password"
              />
            </div>

            <div
              class="flex items-center justify-center w-full bg-red-900 rounded shadow-lg hover:bg-red-800"
            >
              <button
                class="text-gray-900 font-bold py-2 px-4 text-lg 
                hover:text-blue-50 focus:outline-none"
                type="submit"
              >
                Continue
              </button>
            </div>
            <div>
              <p class="font-sans text-xs py-1">
                By continuing, you agree to Auction's
                <a class="text-blue-500" href="#">Conditions of Use</a> and
                <a class="text-blue-500" href="#">Privacy Notice.</a>
              </p>
            </div>
            <div>
              <a
                class="text-blue-500 no-underline inline-block align-baseline font-semibold text-sm float-left"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <div class="text-center">
            <p class="text-gray-900 text-sm">
              Don't have an account?
              <router-link to="/register" class="text-blue-500 font-bold"
                >Create an Account</router-link
              >
            </p>
          </div>
          <hr class="my-2" />
        </div>
      </div>
    </body>
  </div>
  </form>
</template>

<script>
export default {
  name: "Login",
};
</script>
