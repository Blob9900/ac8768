import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
}));

const ChatContent = ({ conversation, unreadMessages }) => {
  const classes = useStyles();

  const { otherUser } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;

  //I'm using inline styles to preserve the directory structure.
  const invisibleBubble = {
    visibility: 'hidden'
  };
  const visibleBubble = {
    fontSize: 12,
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: '999px',
    backgroundColor: '#3A8DFF',
    minWidth: '15px',
    minHeight: '15px',
    padding: '1px 6px',
    marginRight: '1em'
  };
  const isRegular = {
    fontWeight: 'normal'
  }
  const isBold = {
    color: 'black',
    fontWeight: 'bold'
  }

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText} style={unreadMessages ? isBold : isRegular}>
          {latestMessageText}
        </Typography>
      </Box>
      <div style={unreadMessages ? visibleBubble : invisibleBubble}>{unreadMessages}</div>
    </Box>
  );
};

export default ChatContent;
