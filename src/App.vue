<template>
  <div class="App">
    <SideBar />
    <router-view class="portal" />
  </div>
</template>

<script>
import SideBar from "./components/SideBarComponent.vue";
export default {
  components: { SideBar },
};
</script>

<style>
.checkbox {
  width: 1.5rem;
  height: 1.5rem;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.testr {
  border: 1px solid red;
}
.wrapper {
  background-color: rgba(244, 244, 244, 0.437);
  border: 1.5px solid rgba(232, 232, 232, 0.844);
  border-radius: 5px;
}
.App {
  display: flex;
  min-height: 100vh;
  /* min-width: 100vw; */
}
.backdrop {
  background-color: rgba(0, 0, 0, 0.8);
}
.portal {
  display: flex;
  flex-direction: column;
}
</style>
