<template>
  <div class="cockpitComponent">
    <input
      type="checkbox"
      id="checkAll"
      name="checkAll"
      class="checkbox"
      v-model="selectAll"
      @click="markUnmark"
    />
    <button class="markRead wrapper" @keypress.r="markUnmark">
      Mark as read (r)
    </button>
    <button class="archive wrapper" @keypress.a="archUnArch">
      Archive (a)
    </button>
  </div>
</template>

<script>
import { onUnmounted } from '@vue/runtime-core';
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CockPit",
  data() {
    return {
      selectAll: false,
      archAll: false,
    };
  },
  computed: {
    ...mapGetters(["emailCount"]),
  },
  methods: {
    ...mapActions(["markAll", "archiveAll", "unmarkAll", "unArchiveAll"]),
    markUnmark() {
      this.selectAll = !this.selectAll;
      if (this.selectAll) {
        this.markAll();
      } else {
        this.unmarkAll();
      }
    },
    archUnArch() {
      this.archAll = !this.archAll;
      if (this.archAll) {
        this.archiveAll();
      } else {
        this.unArchiveAll();
      }
    },
    keyListerner(event) {
      const keyName = event.key;

      // As the user releases the Ctrl key, the key is no longer active,
      // so event.ctrlKey is false.
      if (keyName === "r") {
        console.log('eventing in cockpit')
        this.markUnmark()
      }if (keyName === 'a'){
        this.archUnArch()
      }
    },
  },
  mounted(){
    window.addEventListener('keypress',($event)=>{this.keyListerner($event)})
    window.removeEventListener('keypress',($event)=>{this.keyListerner($event)})
  },
  beforeUnmount(){
    console.log('about to unmount')
  }
};
</script>

<style scoped>
.cockpitComponent {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 0.5rem;
}
.cockpitComponent button {
  padding: 0.3rem 0.5rem;
}
</style>
