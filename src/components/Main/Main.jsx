import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./style";
import Form from "./Form/Form";
import List from "./List/List";

const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Asad" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance $200
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          {/* Info Card */}
          Try Saying: Add Income For $100 in category Salary for Monday...
        </Typography>
        <Divider />
        <Form />
      </CardContent>

      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xm={12}>
            <List/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
