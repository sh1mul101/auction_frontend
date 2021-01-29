<template>
  <div>
    <body class="bg-gray-300 h-screen font-sans">
      <div class="flex flex-col items-center justify-center">
        <div>
          <router-link to="/"
            ><img
              class="w-16 py-4"
              src="../image/auction-final.png"
              alt="auction logo"
          /></router-link>
        </div>
        <div class="w-1/3">
          <h1 class="font-sans mb-6 text-center text-2xl font-semibold">
            Create an Account
          </h1>
          <form>
            <div class="p-8 bg-white mb-6 rounded-lg shadow-lg">
              <div class="mb-4">
                <label class="font-bold text-gray-900 block mb-2 text-sm"
                  >Your Name</label
                >
                <input
                  type="text"
                  class="w-full bg-white border px-2 py-2 rounded shadow"
                  placeholder="Your Name"
                />
              </div>

              <div class="mb-4">
                <label class="font-bold text-gray-900 block mb-2 text-sm"
                  >E-mail</label
                >
                <input
                  type="text"
                  class="w-full bg-white border px-2 py-2 rounded shadow"
                  placeholder="E-mail"
                />
              </div>

              <div class="mb-4">
                <label class="font-bold text-gray-900 block mb-2 text-sm"
                  >Mobile Number</label
                >
                <input
                  type="text"
                  class="w-full bg-white border px-2 py-2 rounded shadow"
                  placeholder="Mobile Number"
                />
              </div>

              <div class="mb-4">
                <label class="font-bold text-gray-900 block mb-2 text-sm"
                  >Password</label
                >
                <input
                  type="text"
                  class="w-full bg-white border border-gray-200 px-2 py-2 rounded shadow"
                  placeholder="At least 8 characters"
                />
              </div>

              <div class="mb-4">
                <label class="font-bold text-gray-900 block mb-2 text-sm"
                  >Re-enter password</label
                >
                <input
                  type="text"
                  class="w-full bg-white border border-gray-200 px-2 py-2 rounded shadow"
                  placeholder="Re-enter password"
                />
              </div>

              <div class="mb-4">
                <label class="font-bold text-gray-900 block mb-2 text-sm"
                  >Types of account</label
                >
                <input
                  type="radio"
                  value="1"
                  name="actype"
                  class="form-radio h-3 w-3 text-gray-600"
                  checked
                /><span class="ml-2 text-gray-700">Personal</span>
                <input
                  type="radio"
                  name="actype"
                  value="2"
                  class="form-radio h-3 w-3 ml-4 text-gray-600"
                  unchecked
                /><span class="ml-2 text-gray-700">Company</span>
              </div>

              <div class="mb-4">
                <label class="font-bold text-gray-900 block mb-2 text-sm"
                  >NID card No(In case company, head of the company)</label
                >
                <input
                  type="text"
                  class="w-full bg-white border border-gray-200 px-2 py-2 rounded shadow"
                  placeholder="NID No"
                />
              </div>
              <!-- add image work -->
              <div class="mb-4">
                <label class="font-bold text-gray-900 block mb-2 text-sm"
                  >NID card front part(Scan copy)</label
                >

                <div>
                  <imageup />
                  <!-- <input
                    type="file"
                    accept="image/*"
                    @change="handleImageSelected"
                    class="w-full bg-white border border-gray-200 px-2 py-2 rounded shadow"
                    placeholder=""
                  />
                  <img
                    v-show="imageUrl"
                    :src="imageUrl"
                    class="w-32 h-32 object-cover"
                  /> -->
                </div>
              </div>

              <div class="mb-4">
                <label class="font-bold text-gray-900 block mb-2 text-sm"
                  >NID card back part(Scan copy)</label
                >
                <imageup2 />
              </div>

              <div class="mb-4">
                <label class="font-bold text-gray-900 block mb-2 text-sm"
                  >VAt registration number</label
                >
                <input
                  type="text"
                  class="w-full bg-white border border-gray-200 px-2 py-2 rounded shadow"
                  placeholder="VAT No"
                />
              </div>

              <div class="mb-4">
                <label class="font-bold text-gray-900 block mb-2 text-sm"
                  >VAT registration(Scan copy)</label
                >
                <imageup3 />
              </div>

              <div class="mb-4">
                <label class="font-bold text-gray-900 block mb-2 text-sm"
                  >Bank statement(Scan copy)</label
                >
                <imageup4 />
              </div>

              <div
                class="flex items-center justify-center w-full bg-red-900 rounded shadow-lg hover:bg-red-800"
              >
                <button
                  class="text-gray-900 font-bold py-2 px-4 text-lg hover:text-blue-50 focus:outline-none" type="submit"
                >
                  Create your account
                </button>
              </div>
              <div>
                <p class="font-sans text-xs py-1">
                  By continuing, you agree to Auction's
                  <a class="text-blue-500" href="#">Conditions of Use</a> and
                  <a class="text-blue-500" href="#">Privacy Notice.</a>
                </p>
              </div>
              <div class="text-center">
                <p class="text-gray-900 text-sm">
                  Already have an account?
                  <router-link
                    to="/login"
                    class="no-underline text-blue-500 font-bold"
                    >Sign In</router-link
                  >
                </p>
              </div>
              <hr class="my-2" />
            </div>
          </form>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import Imageup from "../components/Imageup.vue";
import Imageup2 from "../components/Imageup2.vue";
import Imageup3 from "../components/Imageup3.vue";
import Imageup4 from "../components/Imageup4.vue";

export default {
  name: "Register",
  components: {
    Imageup,
    Imageup2,
    Imageup3,
    Imageup4,
  },
};

// import { useImageUpload } from "@/composables/useImageUpload.js";

// export default {
//   name: "Register",

//   setup() {
//     let { imageFile, imageUrl, handleImageSelected } = useImageUpload();

//     return {
//       handleImageSelected,
//       imageUrl,
//       imageFile,
//     };
//   },
// };
</script>
