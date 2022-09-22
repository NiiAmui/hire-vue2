<template>
  <div class="email wrapper" @click.self="openModal">
    <input
      type="checkbox"
      id="checkAll"
      name="checkAll"
      value="checked"
      class="checkbox"
      v-model="email.selected"
      @click.self="markEmail(email.title)"
      v-if="$route.path !== '/archive'"
    />
    <p @click.self="$emit('openModal')">{{ email.title }}</p>
    <ModalComponent :modalActive="modalActive" @close="closeModal">
      <EmailDetails :email="email" @closeEmailDetails="closeModal"/>
    </ModalComponent>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ModalComponent from "./ModalComponent.vue";
import EmailDetails from "./EmailDetails.vue";
export default {
  name: "EmailComponent",
  components: { ModalComponent, EmailDetails },
  props: ["email"],
  data() {
    return {
      modalActive: false,
    };
  },
  methods: {
    closeModal() {
      console.log('closing modal')
      this.modalActive = false;
    },
    openModal() {
      this.modalActive = true;
    },
    ...mapActions(["markEmail"]),
  },
};
</script>

<style scoped>
.email {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  min-width: 100%;
  margin-bottom: 1rem;
}
.email:hover {
  cursor: pointer;
}
</style>
