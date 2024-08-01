import { Box, Button, Container, TextField, Typography } from "@mui/material";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addClient } from "../redux/clientSlice";

const intialAddress = {
  addressLine1: "",
  addressLine2: "",
  postCode: "",
  city: "",
  state: "",
};

const intialClientData = {
  fullName: "",
  email: "",
  pan: "",
  mobile: "",
};

const FormInput = () => {
  const dispatch = useDispatch();

  const [clientAddress, setClientAddress] = useState(intialAddress);

  const [client, setClient] = useState(intialClientData);

  const handleInfo = (e) => {
    setClient((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddress = (e) => {
    setClientAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addClient({ ...client, addresses: clientAddress }));
    setClientAddress(intialAddress);
    setClient(intialClientData);
  };

  return (
    <Container maxWidth="lg">
      <Box component="form" onSubmit={handleSubmit}>
        <Typography
          variant="h5"
          mb={4}
          component="p"
          sx={{ textAlign: "left", fontWeight: 600 }}
        >
          Create New Client
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginRight: { sm: 5, lg: 60 },
            justifyContent: "center",
          }}
        >
          {/* FullName  */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              gap: 3,
            }}
          >
            <Typography
              width={300}
              margin="dense"
              sx={{ textAlign: "right", fontWeight: 600 }}
            >
              Full Name
            </Typography>
            <TextField
              name="fullName"
              variant="outlined"
              placeholder="Full Name"
              color="secondary"
              size="small"
              margin="dense"
              required
              sx={{
                backgroundColor: "var(--color-secondary2)",
                borderRadius: "5px",
              }}
              fullWidth
              value={client.fullName}
              onChange={handleInfo}
            />
          </Box>

          {/* Email  */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              gap: 3,
            }}
          >
            <Typography
              width={300}
              margin="dense"
              sx={{ textAlign: "right", fontWeight: 600 }}
            >
              Email
            </Typography>
            <TextField
              name="email"
              variant="outlined"
              placeholder="Email Address"
              color="secondary"
              size="small"
              margin="dense"
              required
              sx={{
                backgroundColor: "var(--color-secondary2)",
                borderRadius: "5px",
              }}
              fullWidth
              value={client.email}
              onChange={handleInfo}
            />
          </Box>

          {/* PAN  */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              gap: 3,
            }}
          >
            <Typography
              width={300}
              margin="dense"
              sx={{ textAlign: "right", fontWeight: 600 }}
            >
              PAN
            </Typography>
            <TextField
              name="pan"
              variant="outlined"
              placeholder="PAN Details"
              color="secondary"
              size="small"
              margin="dense"
              required
              sx={{
                backgroundColor: "var(--color-secondary2)",
                borderRadius: "5px",
              }}
              fullWidth
              value={client.pan}
              onChange={handleInfo}
            />
          </Box>

          {/* Mobile  */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              gap: 3,
            }}
          >
            <Typography
              width={300}
              margin="dense"
              sx={{ textAlign: "right", fontWeight: 600 }}
            >
              Mobile
            </Typography>
            <TextField
              name="mobile"
              variant="outlined"
              placeholder="Contact Number"
              color="secondary"
              size="small"
              margin="dense"
              required
              sx={{
                backgroundColor: "var(--color-secondary2)",
                borderRadius: "5px",
              }}
              fullWidth
              value={client.mobile}
              onChange={handleInfo}
            />
          </Box>

          {/* Address  1*/}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              gap: 3,
            }}
          >
            <Typography
              width={300}
              margin="dense"
              sx={{ textAlign: "right", fontWeight: 600 }}
            >
              Address
            </Typography>
            <TextField
              name="addressLine1"
              variant="outlined"
              placeholder="Address Line 1"
              color="secondary"
              size="small"
              margin="dense"
              required
              sx={{
                backgroundColor: "var(--color-secondary2)",
                borderRadius: "5px",
              }}
              fullWidth
              value={clientAddress.addressLine1}
              onChange={handleAddress}
            />
          </Box>

          {/* Address 2 */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              gap: 3,
            }}
          >
            <Typography
              width={300}
              margin="dense"
              sx={{ textAlign: "right", fontWeight: 600 }}
            ></Typography>
            <TextField
              name="addressLine2"
              variant="outlined"
              placeholder="Address Line 2 (Optional)"
              color="secondary"
              size="small"
              margin="dense"
              sx={{
                backgroundColor: "var(--color-secondary2)",
                borderRadius: "5px",
              }}
              fullWidth
              value={clientAddress.addressLine2}
              onChange={handleAddress}
            />
          </Box>

          {/* PostCode  */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              gap: 3,
            }}
          >
            <Typography
              width={300}
              margin="dense"
              sx={{ textAlign: "right", fontWeight: 600 }}
            >
              Post Code
            </Typography>
            <TextField
              name="postCode"
              variant="outlined"
              placeholder="Pin Code"
              color="secondary"
              size="small"
              margin="dense"
              required
              sx={{
                backgroundColor: "var(--color-secondary2)",
                borderRadius: "5px",
              }}
              fullWidth
              value={clientAddress.postCode}
              onChange={handleAddress}
            />
          </Box>

          {/* City  */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              gap: 3,
            }}
          >
            <Typography
              width={300}
              margin="dense"
              sx={{ textAlign: "right", fontWeight: 600 }}
            >
              City
            </Typography>
            <TextField
              name="city"
              variant="outlined"
              placeholder="City"
              color="secondary"
              size="small"
              margin="dense"
              required
              sx={{
                backgroundColor: "var(--color-secondary2)",
                borderRadius: "5px",
              }}
              fullWidth
              value={clientAddress.city}
              onChange={handleAddress}
            />
          </Box>

          {/* State  */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              gap: 3,
            }}
          >
            <Typography
              width={300}
              margin="dense"
              sx={{ textAlign: "right", fontWeight: 600 }}
            >
              State
            </Typography>
            <TextField
              name="state"
              variant="outlined"
              placeholder="State"
              color="secondary"
              size="small"
              margin="dense"
              required
              sx={{
                backgroundColor: "var(--color-secondary2)",
                borderRadius: "5px",
              }}
              fullWidth
              value={clientAddress.state}
              onChange={handleAddress}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              marginTop: 1,
            }}
          >
            <Button color="secondary" type="submit" variant="contained">
              Add Client
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default FormInput;
