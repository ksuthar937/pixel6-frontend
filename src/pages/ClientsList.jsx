import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { DeleteOutline } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { removeClient } from "../redux/clientSlice";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ClientsList = () => {
  const clients = useSelector((state) => state.clients);
  const dispatch = useDispatch();

  if (clients.length === 0) {
    return (
      <Box m={4}>
        <Typography variant="h6">
          Currently, there are no available clients. Please create a new client
          to proceed.
        </Typography>
        <Link to="/client-create">
          <Button variant="text" color="secondary">
            Create Client
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <List
      sx={{
        width: "100%",
        margin: 2,
        maxWidth: 460,
        padding: 3,
        bgcolor: "background.paper",
        borderRadius: 2,
      }}
    >
      {clients.map((client) => (
        <ListItem
          key={client.id}
          disableGutters
          secondaryAction={
            <>
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => dispatch(removeClient(client.id))}>
                <DeleteOutline />
              </IconButton>
            </>
          }
        >
          <ListItemText primary={client.fullName} />
        </ListItem>
      ))}
    </List>
  );
};

export default ClientsList;
