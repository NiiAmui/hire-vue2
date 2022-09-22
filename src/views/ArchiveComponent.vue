<template>
  <div class="archivedComponent">
    <div class="noArchived" v-if="archived.length < 1">
      <h1>No Archived Emails</h1>
    </div>
    <div class="alternative" v-else>
      <h3>Right click to unarchive</h3>
      <div
        class="archived__emails"
        v-for="email in archived"
        :key="email.title"
      >
        <EmailComponent
          :email="email"
          @click.right="unArchiveEmail(email.title)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EmailComponent from "../components/EmailComponent.vue";

import { mapActions, mapGetters } from "vuex";
export default {
  components: { EmailComponent },
  computed: {
    ...mapGetters(["archived", "archivedCount"]),
  },

  data() {
    return {
      modalActive: false,
    };
  },
  methods: {
    ...mapActions(["unArchiveEmail"]),
    closeModal() {
      this.modalActive = false;
    },
    openModal() {
      this.modalActive = true;
    },
  },
};
</script>

<style scoped>
.archivedComponent {
  padding: 2rem 5rem;
  min-width: 80%;
}
.noArchived {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
}
h3 {
  margin-bottom: 1rem;
}
</style>
