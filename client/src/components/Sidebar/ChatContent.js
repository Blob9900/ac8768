import React from "react";
import { Badge, Box, Typography } from "@material-ui/core";
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
  boldPreviewText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "black",
    letterSpacing: -0.17,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  invisibleBubble: {
    visibility: 'hidden'
  },
  visibleBubble: {
    fontSize: 12,
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: '999px',
    backgroundColor: '#3A8DFF',
    minWidth: '15px',
    minHeight: '15px',
    padding: '1px 6px',
    marginRight: '1em',
    visibility: 'visible'
  }
}));

const ChatContent = ({ conversation }) => {
  const classes = useStyles();

  const { otherUser } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;
  const unreadMessages = conversation.id && conversation.unreadMessages;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={unreadMessages ? classes.boldPreviewText : classes.previewText} >
          {latestMessageText}
        </Typography>
      </Box>
      <Badge className={unreadMessages ? classes.visibleBubble : classes.invisibleBubble}>{unreadMessages}</Badge>
    </Box>
  );
};

export default ChatContent;
