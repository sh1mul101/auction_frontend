<template>
  <div>
    <body class="h-screen">
      <Header />
      <Nav />
      <main>
        <div class="w-full">
          <div
            class="grid grid-cols-2 gap-2 my-4 mx-6 divide-x divide-black divide-opacity-20"
          >
            <div class="bg-gray-50">
              <img src="../image/car-side1.jpg" class="w-120" alt="prod1" />
            </div>
            <div class="w-120">
              <div class="mx-3 h-full">
                <h1 class="text-2xl font-semibold">
                  Tipmant Antique Vintage Car Tin Metal Truck Home Décor Accents
                  Decoration Ornaments Collections Collectible Vehicle Model
                </h1>
                <br />
                <h2 class="font-semibold">About this item</h2>
                <div>
                  <ul class="list-disc ml-4 mt-2 text-sm">
                    <li>
                      <p>
                        Vintage car vehicle model, used for home decoration,
                        room decor, kids toys, gifts or even collections.
                      </p>
                    </li>
                    <li>
                      <p>
                        Full handmade with plating technology which shows a
                        sense of age and history.
                      </p>
                    </li>
                    <li>
                      <p>
                        Handmade, excellent workmanship, fine handicrafts;It is
                        a great choice for gift of family, kids, friends, etc.
                      </p>
                    </li>
                    <li>
                      <p>
                        Material: Iron; Model Name: Vintage Fire Fighting Truck;
                        Color: Bronze
                      </p>
                    </li>
                    <li>
                      <p>
                        Car Size: 21 x 8.5 x 10 cm / 8.3 x 3.3 x 3.9 inch, Net
                        Weight: 0.55 kg / 1.2 lb
                      </p>
                    </li>
                  </ul>
                  <div class="grid grid-cols-4 gap-1">
                    <div class="mt-3">
                      <h2 class="font-semibold py-1 text-sm">Owner</h2>
                      <h2 class="font-semibold py-1 text-sm">Contact No</h2>
                      <h2 class="font-semibold py-1 text-sm">E-mail</h2>
                      <h2 class="font-semibold py-1 text-sm">Start Price</h2>
                      <h2 class="font-semibold py-1 text-sm">Current Price</h2>
                    </div>
                    <div class="col-span-3 mt-3">
                      <h2 class="px-1 text-sm py-1 font-semibold">
                        Shimul Chakraborty
                      </h2>
                      <h2 class="px-1 text-sm py-1 font-semibold">
                        01786227277
                      </h2>
                      <h2 class="px-1 text-sm py-1 font-semibold">
                        shimulckbt101@gmail.com
                      </h2>
                      <h2 class="px-1 text-sm py-1 font-semibold">5000 Taka</h2>
                      <h2 class="px-1 text-sm py-1 font-semibold">
                        21000 Taka
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-center py-4">
                  <button
                    class="flex items-center justify-center bg-green-400 hover:bg-green w-full rounded-sm focus:outline-none text-white font-bold text-2xl"
                  >
                    Bid Here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  </div>
</template>

<script>
import Header from '../components/Header'
import Nav from '../components/Nav'
export default {
  name: "Collection",

components: {
  Header,
  Nav
}

};
</script>

<style>
</style>