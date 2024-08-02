import RecommendIcon from "@mui/icons-material/Recommend";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router";

const Tabs = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <>
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          background: "var(--color-secondary1)",
        }}
      >
        <Toolbar>
          <RecommendIcon fontSize="large" color="inherit" />
          <Typography
            variant="h6"
            ml={1}
            component="div"
            sx={{
              fontWeight: 400,
              color: "var(--color-black)",
              fontSize: "24px",
              fontFamily: "monospace",
            }}
          >
            Wellcome,
          </Typography>
        </Toolbar>
      </AppBar>

      <Button
        sx={{
          background:
            pathname === "/"
              ? "var(--color-primary1)"
              : "var(--color-secondary1)",
          color: "var(--color-black)",

          fontSize: "16px",
          fontWeight: 700,
          textTransform: "capitalize",
          mt: 5,
          px: 2,
          minWidth: 160,
          borderRadius: "10px",
          ":hover": {
            background: "var(--color-primary1)",
          },
        }}
        onClick={() => navigate("/")}
      >
        Create Client
      </Button>
      <Button
        sx={{
          background:
            pathname === "/client-list"
              ? "var(--color-primary1)"
              : "var(--color-secondary1)",
          color: "var(--color-black)",

          fontSize: "16px",
          fontWeight: 700,
          minWidth: 160,
          textTransform: "capitalize",
          mt: 3,
          px: 2,
          borderRadius: "10px",
          ":hover": {
            background: "var(--color-primary1)",
          },
        }}
        onClick={() => navigate("client-list")}
      >
        View All Clients
      </Button>
    </>
  );
};

export default Tabs;
