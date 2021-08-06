import React, { useContext } from "react";
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

import { ExpenseTrackerContext } from "../../../context/context";
import useStyles from "./style";

const List = () => {
  const classes = useStyles();

  const { deleteTransaction } = useContext(ExpenseTrackerContext);

  // console.log(deleteTransaction);
  const transcation = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 50,
      date: " Fri Aug 06",
    },
    {
      id: 1,
      type: "Expense",
      category: "Salary",
      amount: 50,
      date: " Fri Aug 16",
    },
    {
      id: 1,
      type: "Income",
      category: "Business",
      amount: 50,
      date: " Fri Aug 26",
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
              <IconButton edge="end" aria-label="Delete" >
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
