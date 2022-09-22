<template>
  <div class="inbox">
    <p>Inbox</p>
    <h1>Emails selected ({{ selected }})</h1>
    <div class="inbox__cockpit">
      <CockpitComponent />
    </div>
    <div class="inbox__emails" v-for="email in emails" :key="email.title">
      <EmailComponent :email="email" />
    </div>
  </div>
</template>

<script>
import CockpitComponent from "../components/CockpitComponent.vue";
import EmailComponent from "../components/EmailComponent.vue";
import { mapGetters } from "vuex";
export default {
  name: "InboxComponent",
  components: {
    CockpitComponent,
    EmailComponent,
  },
  computed: {
    ...mapGetters(["emails", "selected"]),
  },
  data() {
    return {
      modalActive: false,
    };
  },
  methods: {
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
.inbox {
  padding: 2rem 5rem;
  min-width: 80%;
}
.inbox__cockpit,
h1 {
  margin-bottom: 2rem;
}
</style>
