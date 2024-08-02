import { Box, Typography } from "@mui/material";
import FormInput from "../components/FormInput";

const Home = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        mx={2}
        my={1}
        component="p"
        sx={{ textAlign: "left", fontWeight: 600, fontFamily: "Ubuntu" }}
      >
        Create New Client
      </Typography>
      <FormInput />
    </Box>
  );
};

export default Home;
