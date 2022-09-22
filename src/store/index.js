import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      emails: [
        {
          title: "Your 7-figure plan goes bye-bye at midnight",
          detail:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo iste dolores, enim odio, tenetur facere quis quas praesentium commodi sed velit earum libero in cumque maxime! Eveniet, assumenda dignissimos?",
          selected: true,
          archived: false,
        },
        {
          title: "[WEEKEND ONLY] Get this NOW before",
          detail:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo iste dolores, enim odio, tenetur facere quis quas praesentium commodi sed velit earum libero in cumque maxime! Eveniet, assumenda dignissimos?",
          selected: false,
          archived: false,
        },
        {
          title: "Uh-oh, your prescription is expiring",
          detail:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo iste dolores, enim odio, tenetur facere quis quas praesentium commodi sed velit earum libero in cumque maxime! Eveniet, assumenda dignissimos?",
          selected: false,
          archived: false,
        },
      ],
      archived: [],
    };
  },
  getters: {
    emails(state) {
      return state.emails;
    },
    archived(state) {
      return state.archived;
    },
    emailCount(state) {
      return state.emails.length;
    },
    selected(state) {
      let count = 0;
      state.emails.forEach((email) => {
        if (email.selected === true) {
          count++;
        }
      });
      return count;
    },
    archivedCount(state) {
      return state.archived.length;
    },
  },
  mutations: {
    MARKALL(state) {
      state.emails.forEach((email) => {
        email.selected = true;
      });
    },
    UNMARKALL(state) {
      state.emails.forEach((email) => {
        email.selected = false;
      });
    },
    MARKEMAIL(state, payload) {
      state.emails.forEach((email) => {
        console.log('markemail title',payload)
        if (email.title === payload) {
          console.log('email title in markemail', email.title)
          email.selected = true;
        }
      });
    },
    ARCHIVEALL(state) {
      const emails = state.emails;
      emails.forEach((email) => {
        email.archived = true;
      });
      state.archived = state.archived.concat(emails);
      state.emails = [];
    },
    ARCHIVEEMAIL(state, payload) {
      const emails = state.emails;
      emails.forEach((email) => {
        if (email.title === payload) {
          email.archived = true;
          state.archived.push(email);
        }
      });
      let result = emails.filter((email) => {
        return email.archived !== true;
      });
      state.emails = result;
    },
    UNARCHIVEEMAIL(state, payload) {
      let index = null;
      let archemail = [];
      state.archived.forEach((email, idx) => {
        if (email.title === payload) {
          index = idx;
          archemail = email;
        }
      });
      console.log("unarchiving mail", archemail);

      state.emails.push(archemail);
      state.archived.splice(index - 1, 1);
    },
    UNARCHIVEALL(state) {
      state.emails = state.archived;
      state.archived = [];
    },
  },
  actions: {
    markAll(context) {
      context.commit("MARKALL");
    },
    unmarkAll(context) {
      context.commit("UNMARKALL");
    },
    markEmail(context, payload) {
      context.commit("MARKEMAIL", payload);
    },
    archiveAll(context) {
      context.commit("ARCHIVEALL");
    },
    archiveEmail(context, payload) {
      context.commit("ARCHIVEEMAIL", payload);
    },
    unArchiveEmail(context, payload) {
      context.commit("UNARCHIVEEMAIL", payload);
    },
    unArchiveAll(context) {
      context.commit("UNARCHIVEALL");
    },
  },
});

export default store;
