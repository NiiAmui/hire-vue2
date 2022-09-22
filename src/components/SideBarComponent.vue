<template>
  <div class="sidebar backdrop">
    <div class="sidebar__links">
      <div class="sidebar__links-inbox">
        <router-link to="/">Inbox ({{ emailCount }})</router-link>
      </div>
      <div class="sidebar__links-archive">
        <router-link to="/archive">Archive ({{ archivedCount }})</router-link>
      </div>
    </div>
    <div class="sidebar__logout"><router-link to="/">Logout</router-link></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SidebarComponent",
  computed: {
    ...mapGetters(["emailCount", "archivedCount"]),
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: 500;
}
.sidebar {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  width: fit-content;
}
.sidebar__links div,
.sidebar__logout {
  background-color: rgb(230, 230, 230);
  width: 10rem;
  margin-bottom: 0.5rem;
  padding: 0.3rem 1.2rem;
  border-radius: 3px;
}
</style>
