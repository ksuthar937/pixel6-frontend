import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clients: [],
};

const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    addClient(state, action) {
      const lastId = state.clients[state.clients.length - 1]?.id;
      console.log(lastId);
      let id = !lastId ? 1 : lastId + 1;
      state.clients.push({ id, ...action.payload });
    },
    removeClient(state, action) {
      const id = action.payload;
      state.clients = state.clients.filter((client) => client.id !== id);
    },
    editClient(state, action) {
      const { id, ...data } = action.payload;
      const index = state.clients.findIndex(
        (client) => Number(client.id) === Number(id)
      );
      if (index !== -1) {
        state.clients[index] = { ...state.clients[index], ...data };
      }
    },
  },
});

export const { addClient, removeClient, editClient } = clientSlice.actions;

export default clientSlice.reducer;
