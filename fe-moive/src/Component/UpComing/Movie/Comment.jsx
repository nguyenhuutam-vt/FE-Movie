import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { styled } from "styled-components";
import TextAvatar from "./TextAvatar";
import dayjs from "dayjs";
import "./Comment.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
const Comment = ({ comment }) => {
  console.log("commenttt", comment);
  const Container = styled.div`
    height: 100%;
    width: 60%;
  `;
  const [onRequest, setOnRequest] = useState(false);
  return (
    <Container>
      <h1 className="text-center mb-5" style={{ color: "wheat" }}>
        Review
      </h1>
      {comment?.map((item) => {
        return (
          <Box
            sx={{
              padding: 2,
              borderRadius: "5px",
              position: "relative",
              background: "red",
              opacity: onRequest ? 0.6 : 1,
              "&:hover": { backgroundColor: "background.paper" },
            }}
          >
            <Stack direction="row" spacing={2}>
              {/* avatar */}
              {/* <TextAvatar text={item?.author_details?.username} /> */}
              {/* avatar */}
              <Stack spacing={2} flexGrow={1}>
                <Stack spacing={1}>
                  <Typography variant="h6" fontWeight="700">
                    {item?.author_details?.username}
                  </Typography>
                  <Typography variant="caption">
                    {dayjs(item?.updated_at).format("DD-MM-YYYY HH:mm:ss")}
                  </Typography>
                </Stack>
                <Typography variant="body1" textAlign="justify">
                  {item?.content}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        );
      })}
    </Container>
  );
};

export default Comment;
