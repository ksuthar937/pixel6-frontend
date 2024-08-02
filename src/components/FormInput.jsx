import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addClient } from "../redux/clientSlice";
import { AccountCircle } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import axios from "axios";
import toast, { LoaderIcon } from "react-hot-toast";
import { validateAddress, validateClientInfo } from "../utils/validation";
import ListIcon from "@mui/icons-material/List";
import PlaceIcon from "@mui/icons-material/Place";
import LocationCityIcon from "@mui/icons-material/LocationCity";

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
  const navigate = useNavigate();

  const [clientAddress, setClientAddress] = useState(intialAddress);
  const [client, setClient] = useState(intialClientData);

  const [isPostLoading, setIsPostLoading] = useState(false);
  const [isPanLoading, setIsPanLoading] = useState(false);

  const handleInfo = (e) => {
    setClient((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddress = (e) => {
    setClientAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!validateClientInfo(client)) {
      return;
    }
    if (!validateAddress(clientAddress)) {
      return;
    }
    dispatch(addClient({ ...client, addresses: clientAddress }));
    setClientAddress(intialAddress);
    setClient(intialClientData);
    navigate("/client-list");
    toast.success("Customer added successfully");
  };

  // Fetch PAN DATA through API

  async function fetchPanCode(pan) {
    try {
      setIsPanLoading(true);
      const res = await axios.post("https://lab.pixel6.co/api/verify-pan.php", {
        panNumber: pan,
      });
      const fullName = res?.data?.fullName;
      setClient((prev) => ({ ...prev, fullName: !fullName ? "" : fullName }));
      setIsPanLoading(false);
    } catch (error) {
      console.log(error);
      setClient((prev) => ({ ...prev, fullName: "" }));
      setIsPanLoading(false);
    }
  }

  useEffect(() => {
    fetchPanCode(client.pan);
  }, [client.pan]);

  // Fetch POSTCODE through API

  async function fetchPostCode(postCode) {
    try {
      setIsPostLoading(true);
      const res = await axios.post(
        "https://lab.pixel6.co/api/get-postcode-details.php",
        { postcode: Number(postCode) }
      );
      const city = res?.data?.city[0].name;
      const state = res?.data?.state[0].name;
      setClientAddress((prev) => ({ ...prev, city, state }));
      setIsPostLoading(false);
    } catch (error) {
      setClientAddress((prev) => ({ ...prev, city: "", state: "" }));
      setIsPostLoading(false);
    }
  }

  useEffect(() => {
    fetchPostCode(clientAddress.postCode);
  }, [clientAddress.postCode]);

  return (
    <Container maxWidth="lg">
      <Box component="form" onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginRight: { sm: 5, lg: 60 },
            justifyContent: "center",
          }}
        >
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreditCardIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    {isPanLoading ? <LoaderIcon /> : null}
                  </InputAdornment>
                ),
              }}
              error={client.pan.length > 10}
              helperText={client.pan.length > 10 ? "Incorrect PAN" : ""}
            />
          </Box>

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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
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
              type="email"
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
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
              type="number"
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
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    sx={{ paddingRight: 1, gap: 0.5 }}
                    position="start"
                  >
                    <CallIcon />
                    +91
                  </InputAdornment>
                ),
              }}
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HomeIcon />
                  </InputAdornment>
                ),
              }}
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HomeIcon />
                  </InputAdornment>
                ),
              }}
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
              type="number"
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
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {isPostLoading ? <LoaderIcon /> : null}
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position="start">
                    <PlaceIcon />
                  </InputAdornment>
                ),
              }}
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
              disabled
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationCityIcon />
                  </InputAdornment>
                ),
              }}
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
              disabled
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ListIcon />
                  </InputAdornment>
                ),
              }}
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
