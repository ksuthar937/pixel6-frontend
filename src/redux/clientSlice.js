import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clients: [
    {
      id: 1,
      pan: "APTPS8674C",
      fullName: "Kailash Hukmaram Suthar",
      email: "ksuthar937@gmail.com",
      mobile: "+919370672382",
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
      mobile: "+919370672382",
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
      mobile: "+919370672382",
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
      let id = state.clients.length + 1;
      state.clients.push({ id, ...action.payload });
    },
  },
});

export const { addClient } = clientSlice.actions;

export default clientSlice.reducer;
