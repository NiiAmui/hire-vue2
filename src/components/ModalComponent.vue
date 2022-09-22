<template>
  <transition name="modal__animation">
    <div v-show="modalActive" @click.self="close" class="modal">
      <transition name="modal__animation__inner">
        <div v-show="modalActive" class="">
          <slot class="" />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["modalActive"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  min-height: fit-content;
  overflow: scroll;
}
.modal__inner {
}
</style>
