<template>
  <div>
    <button
      v-for="_ of NAMES"
      :key="_"
      :disabled="_ === name"
      @click="handleChoose(_)"
    >
      {{ _ }}
    </button>

    <!--    <img src="@/assets/images/spring.jpg"/>-->
    <img :src="require(`@/assets/images/${name}.jpg`)" />
  </div>
</template>

<script>
const NAMES = ["1", "2", "3", "4"];

export default {
  name: "ImgDynamicUrl",
  data() {
    return {
      NAMES,
      name: NAMES[0],
    };
  },
  methods: {
    handleChoose(name) {
      console.log(name);
      this.name = name;
    },
  },
};
</script>

<style scoped>
img {
  display: block;
  width: 100%;
  border-radius: 5px;
}
button {
  line-height: 16px;
  padding: 5px 10px;
  margin: 0.25rem;
}
</style>
