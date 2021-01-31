<template>
  <div>
    <body class="bg-white h-screen-full font-sans">
      <div class="flex flex-col items-center justify-center">
        <div>
          <router-link to="/">
            <div class="text-4xl pt-4 font-semibold font-sans uppercase text-green-200 ">
              Auction
            </div>
          <!-- <img
              class="w-16 py-4"
              src="../image/auction-final.png"
              alt="auction logo"
          /> -->
          </router-link>
        </div>
        <div class="w-full md:w-1/3 border-2 border-green-200 m-4 rounded-xl shadow-xl">
          <h1 class="font-sans text-gray-500 text-center text-2xl p-4">
            Create an Account
          </h1>
          <form @submit.prevent="handleSubmit">
            <div class="px-8 bg-white mb-6 rounded-lg">
              <div class="mb-4">
                <label class=" text-gray-900 block mb-2 text-m"
                  >Your Name</label
                >
                <input
                  type="text"
                  class="w-full text-sm bg-white border px-2 py-2 rounded shadow"
                  v-model="name"
                  placeholder="Your Name"
                />
              </div>

              <div class="mb-4">
                <label class=" text-gray-900 block mb-2 text-m"
                  >E-mail</label
                >
                <input
                  type="text"
                  class="w-full text-sm bg-white border px-2 py-2 rounded shadow"
                  v-model="email"
                  placeholder="you@example.com"
                />
              </div>

              <div class="mb-4">
                <label class=" text-gray-900 block mb-2 text-m"
                  >Mobile Number</label
                >
                <input
                  type="text"
                  class="w-full text-sm bg-white border px-2 py-2 rounded shadow"
                  v-model="mobile_no"
                  placeholder="Mobile Number"
                />
              </div>

              <div class="mb-4">
                <label class=" text-gray-900 block mb-2 text-m"
                  >Password</label
                >
                <input
                  type="text"
                  class="w-full text-sm bg-white border border-gray-200 px-2 py-2 rounded shadow"
                  v-model="password"
                  placeholder="At least 8 characters"
                />
              </div>

              <div class="mb-4">
                <label class=" text-gray-900 block mb-2 text-m"
                  >Confirm password</label
                >
                <input
                  type="text"
                  v-model="c_password"
                  class="w-full text-sm bg-white border border-gray-200 px-2 py-2 rounded shadow"
                  placeholder="Re-enter password"
                />
              </div>

              <div class="mb-4">
                <label class=" text-gray-900 block mb-2 text-m"
                  >Types of account</label
                >
                <input
                  type="radio"
                  id="one"
                  value="1"
                  name="actype"
                  v-model="acc_type"
                  class="form-radio h-3 w-3"
                  checked
                /><span class="ml-2 text-sm text-gray-900">Personal</span>
                <input
                  type="radio"
                  name="actype"
                  value="2"
                  v-model="acc_type"
                  class="form-radio h-3 w-3 ml-4"
                  unchecked
                /><span class="ml-2 text-sm text-gray-900 ">Company</span>
              </div>

              <div class="mb-4">
                <label class=" text-gray-900 block mb-2 text-m"
                  >NID card No(In case company, head of the company)</label
                >
                <input
                  type="text"
                  v-model="nid_no"
                  class="w-full text-sm bg-white border border-gray-200 px-2 py-2 rounded shadow"
                  placeholder="NID No"
                />
              </div>
              <!-- add image work -->
              <div class="mb-4">
                <label class=" text-gray-900 block mb-2 text-m"
                  >NID card front part(Scan copy)</label
                >

                <div>
                  <!-- <Imageup v-model="nid_ft" /> -->
                  
                  <input
                    type="file"
                    accept="image/*"
                    @change="onFileSelected"
                    class="w-full bg-white border border-gray-200 px-2 py-2 rounded shadow"
                  />
                  <!-- <img
                    v-show="imageUrl"
                    :src="imageUrl"
                    class="w-32 h-32 object-cover"
                  /> -->
                </div>
              </div>

              <div class="mb-4">
                <label class=" text-gray-900 block mb-2 text-m">
                  NID card back part(Scan copy)
                </label>
                <!-- <Imageup2 v-model="nid_bk" /> -->

                <input
                    type="file"
                    accept="image/*"
                    @change="onFileSelected2"
                    class="w-full bg-white border border-gray-200 px-2 py-2 rounded shadow"
                  />
                  <!-- <img
                    v-show="imageUrl"
                    :src="imageUrl"
                    class="w-32 h-32 object-cover"
                  /> -->

              </div>

              <div class="mb-4">
                <label class=" text-gray-900 block mb-2 text-m"
                  >VAt registration number</label
                >
                <input
                  type="text"
                  v-model="vat_no"
                  class="w-full text-sm bg-white border border-gray-200 px-2 py-2 rounded shadow"
                  placeholder="VAT No"
                />
              </div>

              <div class="mb-4">
                <label class=" text-gray-900 block mb-2 text-m">
                  VAT registration(Scan copy)
                </label>
                <!-- <Imageup3 v-model="vat_img" /> -->
                <input
                    type="file"
                    accept="image/*"
                    @change="onFileSelected3"
                    class="w-full bg-white border border-gray-200 px-2 py-2 rounded shadow"
                  />
                  <!-- <img
                    v-show="imageUrl"
                    :src="imageUrl"
                    class="w-32 h-32 object-cover"
                  /> -->
              </div>

              <!-- <div class="mb-4">
                <label class=" text-gray-900 block mb-2 text-sm"
                  >Bank statement(Scan copy)</label
                >
                <imageup4 />
              </div> -->

              <div
                class="flex items-center justify-center w-full bg-green-500 rounded hover:bg-green-600"
              >
                <button
                  class="text-white  py-2 px-4 text-lg focus:outline-none" type="submit"
                >
                  Create your account
                </button>
              </div>
              <!-- <div class="pt-2">
                <p class="font-sans text-xs py-1">
                  By continuing, you agree to Auction's
                  <a class="text-green-500" href="#">Conditions of Use</a> and
                  <a class="text-green-500" href="#">Privacy Notice.</a>
                </p>
              </div> -->
              <div class="text-center pt-2">
                <p class="text-gray-900 text-sm">
                  Already have an account?
                  <router-link
                    to="/login"
                    class="no-underline text-green-500 font-bold"
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
import axios from 'axios';

export default {
  name: "Register",

  data() {
    return {
      name: '',
      email:'',
      mobile_no:'',
      password:'',
      c_password:'',
      acc_type:'',
      nid_no:'',
      nid_front_img: null,
      nid_bk_img: null,
      vat_no:'',
      vat_img: null
    }
  },

    methods: {
      onFileSelected(event) {
        this.nid_front_img = event.target.files[0]
      },
      onFileSelected2(event) {
        this.nid_bk_img = event.target.files[0]
      },
      onFileSelected3(event) {
        this.vat_img = event.target.files[0]
      },
      handleSubmit() { 
        const data = new FormData();
        data.append('name', this.name);
        data.append('email', this.email);
        data.append('mobile_no', this.mobile_no);
        data.append('password', this.password);
        data.append('c_password', this.c_password);
        data.append('acc_type', this.acc_type);
        data.append('nid_no', this.nid_no);
        data.append('nid_front_img', this.nid_front_img);
        data.append('nid_bk_img', this.nid_bk_img);
        data.append('vat_no', this.vat_no);
        data.append('vat_img', this.vat_img);
          /**name : this.name,
          email : this.email,
          mobile_no : this.mobile_no,
          password: this.password,
          acc_type : this.acc_type,
          nid_no : this.nid_no,
          nid_ft : this.nid_ft,
          nid_bk : this.nid_bk,
          vat_no : this.vat_no,
          vat_img : this.vat_img,**/


        axios.post('http://127.0.0.1:8000/api/users', data)
          .then(
            res => {
              console.log(res)
            }
            
          ).catch(
            err => {
              console.log(err)
            }
          )
      }
    },
    components: {
      // Imageup,
      // Imageup2,
      // Imageup3,
      // Imageup4,
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
