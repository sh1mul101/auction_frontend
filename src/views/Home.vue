<template>
  <div class="home">
    <body class="h-screen bg-green-100">
      <Header />
      <Nav />
      <main>
        <div class="w-full bg-green-100">
          <div class="grid grid-cols-6 gap-6 my-4 mx-6 bg-green-100">
            <div class="w-44 bg-green-100">
              <div class="h-80"></div>
            </div>
            <div class="col-span-4">
              <router-link to="/collection"
                ><img class="w-120 h-80" src="../image/car-side1.jpg"
              /></router-link>
            </div>
            <div class="w-44">
              <div class="h-80"></div>
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

  }

};
</script>

