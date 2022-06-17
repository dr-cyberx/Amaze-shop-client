import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useQuery } from "@apollo/client";
import LIST_ADDRESS from "@graphql-doc/LIST_ADDRESS.graphql";
import { CartContext } from "@context/Cart/CartContext";

const AddressList: React.FunctionComponent = () => {
  const { data, loading, error } = useQuery(LIST_ADDRESS);
  const { addDataForOrder, state } = React.useContext(CartContext);
  const [checked, setChecked] = React.useState([1]);
  const [addressArray, setAddressArray] = React.useState<any[]>([]);

  React.useEffect(() => {
    const addresses = data?.getAddress?.data;
    if (addresses) {
      setAddressArray([...addresses]);
    }
  }, [data]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    let newChecked: number[] = [...checked];

    if (currentIndex === -1) {
      newChecked = [value];
    } else {
      newChecked = [];
    }
    setChecked(newChecked);
    addDataForOrder({
      ...state.Order,
      isPaid: true,
    });
  };

  return (
    <List
      dense
      sx={{
        width: "85%",
        margin: "auto",
        bgcolor: "background.paper",
        borderRadius: "6px",
      }}
    >
      {[...addressArray].map(value => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ "aria-labelledby": labelId }}
                style={{ color: "rgb(0, 174, 255)" }}
              />
            }
          >
            <ListItemButton style={{ padding: "20px" }}>
              <ListItemText
                id={labelId}
                primary={`${value.houseNumber}, ${value.street}, ${value.landmark}, ${value.city}`}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default AddressList;
