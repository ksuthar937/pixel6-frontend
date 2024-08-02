import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clients: [
    {
      id: 1,
      pan: "APTPS8674C",
      fullName: "Kailash Hukmaram Suthar",
      email: "ksuthar937@gmail.com",
      mobile: "9370672382",
      addresses: {
        addressLine1: "25, Raviraj Society",
        addressLine2: "Dattanagar Katraj",
        postCode: "411046",
        city: "Pune",
        state: "Maharashtra",
      },
    },

    {
      id: 2,
      pan: "APTP674C",
      fullName: "Hukmaram Suthar",
      email: "ksu937@gmail.com",
      mobile: "9370672382",
      addresses: {
        addressLine1: " Society",
        addressLine2: "Dattanagar Katraj",
        postCode: "411046",
        city: "Pune",
        state: "Maharashtra",
      },
    },
    {
      id: 3,
      pan: "APT8674C",
      fullName: "Kailash Suthar",
      email: "ksutr937@gmail.com",
      mobile: "9370672382",
      addresses: {
        addressLine1: ", Raviraj ",
        addressLine2: " Katraj",
        postCode: "411046",
        city: "Pune",
        state: "Maharashtra",
      },
    },
  ],
};

const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    addClient(state, action) {
      const lastId = state.clients[state.clients.length - 1]?.id;
      const id = lastId + 1;
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
