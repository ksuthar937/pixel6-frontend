import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { DeleteOutline } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";

const ClientsList = () => {
  const clients = useSelector((state) => state.clients);
  console.log(clients);
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
              <IconButton>
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
