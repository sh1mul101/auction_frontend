<template>
  <div>
    <div>
      <input
        type="file"
        accept="image/*"
        @change="handleImageSelected"
        class="w-full bg-white border border-gray-200 px-2 py-2 rounded shadow"
      />
      <img v-show="imageUrl" :src="imageUrl" class="w-32 h-32 object-cover" />
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "Imageup",
  setup() {
    let imageFile = ref("");
    let imageUrl = ref("");

    function handleImageSelected(event) {
      if (event.target.files.length === 0) {
        imageFile.value = "";

        imageUrl.value = "";

        return;
      }

      imageFile.value = event.target.files[0];
    }

    watch(imageFile, (imageFile) => {
      if (!(imageFile instanceof File)) {
        return;
      }

      let fileReader = new FileReader();

      fileReader.readAsDataURL(imageFile);

      fileReader.addEventListener("load", () => {
        imageUrl.value = fileReader.result;
      });
    });

    return {
      imageUrl,
      handleImageSelected,
    };
  },
};
</script>
