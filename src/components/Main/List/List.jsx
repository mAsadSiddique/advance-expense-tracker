import React from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";

import { Delete, MoneyOff } from "@material-ui/icons";

import useStyles from "./style";

const List = () => {
  const classes = useStyles();

  const transcation = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 50,
      date: new Date(),
    },
  ];
  return (
    <MUIList dense={false} className={classes.list}>
      {transcation.map((trans) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={trans.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  trans.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary={trans.category}
              secondary={`${trans.amount} - ${trans.date} `}
            />

            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="Delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
