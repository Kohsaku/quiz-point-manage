import React from "react";
import { Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const AnswerMenber = (props) => {
  const useStyles = makeStyles((theme) => ({
    AnswerMenber: {
      height: "100%",
    },
    textField: {
      padding: "5%",
      marginBottom: "1%",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.AnswerMenber}>
      <Grid item className={classes.textField}>
        <TextField
          id="outlined-basic"
          label="ポイント"
          variant="outlined"
          onChange={props.onCorrectChange}
        />
      </Grid>
      <Grid item className={classes.textField}>
        <TextField
          id="outlined-basic"
          label="名前"
          variant="outlined"
          onChange={props.onNameChange}
        />
      </Grid>
      <Grid item className={classes.textField}>
        <TextField
          id="outlined-basic"
          label="回答"
          variant="outlined"
          onChange={props.onAnswerChange}
          className={classes.textField}
        />
      </Grid>
    </div>
  );
};

export default AnswerMenber;
