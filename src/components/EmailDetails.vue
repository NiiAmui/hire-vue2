<template>
  <div class="emailDetail">
    <button class="esc" @keydown.esc="closeEmailDetails">Close (Esc)</button>

    <div class="emailDetails__button" v-if="$route.path !== '/archive'">
      <button class="markRead wrapper" @keypress.r="markEmail(email.title)">
        Mark as read (r)
      </button>
      <button class="archive wrapper" @keypress.b="sendToArchive">
        Archive (a)
      </button>
    </div>
    <div class="emailDetail__paragraph">
      <p class="title">{{ email.title }}</p>
      <p>{{ email.detail }}</p>
      <p>details ooooo</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "EmailDetails",
  props: ["email"],
  methods: {
    ...mapActions(["archiveEmail", "markEmail"]),
    sendToArchive() {
      this.$router.push("/");
      this.archiveEmail(this.email.title);
    },
    closeEmailDetails(){
      this.$emit("closeEmailDetails")
    }
  },
};
</script>

<style scoped>
.emailDetail {
  background-color: white;
  width: 45vw;
  padding: 3rem 3.5rem;
  height: 100vh;
}
.esc {
  text-decoration: underline;
  border: none;
  background-color: transparent;
}
.emailDetails__button {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
button {
  padding: 0.3rem 0.5rem;
}
.title {
  font-size: large;
  font-weight: 600;
  margin-bottom: 1rem;
}
</style>
