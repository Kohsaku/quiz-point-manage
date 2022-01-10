import React, { useState } from "react";
import AnswerMenber from "./components/AnswerMenber";
import { Grid, Fab, Typography, AppBar, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { makeStyles } from "@mui/styles";

const App = () => {
  const [member, setMember] = useState([
    {
      number: 0,
      correct: 0,
      userName: "",
      answer: "",
    },
  ]);

  const useStyles = makeStyles((theme) => ({
    App: {
      display: "flex",
      height: "100%",
      flexDirection: "column",
    },
    AppBar: {
      height: "20%",
      paddingTop: "10vh",
      paddingBottom: "10vh",
    },
    textCenter: {
      textAlign: "center",
    },
    wholeGrid: {
      justifyContent: "space-between",
    },
    partGrid: {
      height: "100%",
      paddingTop: "2%",
    },
    headerItem: {
      paddingBottom: "50%",
    },
    fab: {
      flexDirection: "column",
    },
  }));

  const addMember = () => {
    setMember([
      ...member,
      {
        number: member.slice(-1)[0].number + 1,
        correct: 0,
        userName: "",
        answer: "",
      },
    ]);
  };

  const RemoveMember = () => {
    member.length > 1 && setMember(member.slice(0, -1));
  };

  const onCorrectChange = (event, key) => {
    setMember(
      member.map((memberData, index) => {
        return index.toString() === key
          ? {
              number: memberData.number,
              correct: event.target.value,
              userName: memberData.userName,
              answer: memberData.answer,
            }
          : memberData;
      })
    );
  };

  const onNameChange = (event, key) => {
    setMember(
      member.map((memberData, index) => {
        return index.toString() === key
          ? {
              number: memberData.number,
              correct: memberData.correct,
              userName: event.target.value,
              answer: memberData.answer,
            }
          : memberData;
      })
    );
  };

  const onAnswerChange = (event, key) => {
    setMember(
      member.map((memberData, index) => {
        return index.toString() === key
          ? {
              number: memberData.number,
              correct: memberData.correct,
              userName: memberData.userName,
              answer: event.target.value,
            }
          : memberData;
      })
    );
  };

  const placeholder =
    "クイズ大会の正解数管理にご使用ください。こちらにはクイズ大会の名称を記載できます。";

  const classes = useStyles();
  return (
    <div className={classes.App}>
      <AppBar
        position="static"
        className={classes.AppBar}
        style={{ backgroundColor: "#FFFFFF" }}
        elevation={0}
        fullWidth
      >
        <TextField
          placeholder={placeholder}
          inputProps={{ style: { textAlign: "center" } }}
          variant="standard"
        />
      </AppBar>
      <Grid container className={classes.wholeGrid}>
        <Grid item className={classes.partGrid}>
          <Grid item className={classes.headerItem}>
            <Typography variant="h5">ポイント</Typography>
          </Grid>
          <Grid item className={classes.headerItem}>
            <Typography variant="h5">名前</Typography>
          </Grid>
          <Grid item className={classes.headerItem}>
            <Typography variant="h5">回答</Typography>
          </Grid>
        </Grid>
        {member.map((memberItem) => (
          <AnswerMenber
            key={memberItem.number.toString()}
            onCorrectChange={(event) =>
              onCorrectChange(event, memberItem.number.toString())
            }
            onNameChange={(event) =>
              onNameChange(event, memberItem.number.toString())
            }
            onAnswerChange={(event) =>
              onAnswerChange(event, memberItem.number.toString())
            }
          />
        ))}
        <Grid item className={classes.fab}>
          <Fab onClick={addMember}>
            <AddIcon />
          </Fab>
          <Fab onClick={RemoveMember}>
            <RemoveIcon />
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
