<template>
  <div class="home">
    <body class="h-screen bg-gray-800">
      <Header />
      <Nav />
      <main>
        <div class="w-full">
          <div class="grid grid-cols-6 gap-6 bg-yellow-900 my-4 mx-6">
            <div class="w-44">
              <div class="h-80 bg-green-800"></div>
            </div>
            <div class="col-span-4 bg-green-800">
              <router-link to="/collection"
                ><img class="w-full h-80" src="../image/car-side1.jpg"
              /></router-link>
            </div>
            <div class="w-44">
              <div class="h-80 bg-green-800"></div>
            </div>
          </div>
        </div>
      </main>
    </body>
  </div>
</template>

<script>
import Header from "../components/Header";
import Nav from "../components/Nav";
export default {
  name: "Home",
  components: {
    Header,
    Nav,

  },
};
</script>

