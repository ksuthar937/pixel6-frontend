import { Box, Typography } from "@mui/material";
import EditForm from "../components/EditForm";

const ClientsDetails = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        mx={2}
        my={1}
        component="p"
        sx={{ textAlign: "left", fontWeight: 600, fontFamily: "Ubuntu" }}
      >
        Edit Client
      </Typography>
      <EditForm />
    </Box>
  );
};

export default ClientsDetails;
