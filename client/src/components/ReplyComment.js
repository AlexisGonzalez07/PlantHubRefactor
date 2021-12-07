import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_POST } from "../utils/queries";
import { useParams } from 'react-router-dom';

import ReplyModal from "./ReplyModal";
//import Auth from "../utils/auth";

const ReplyComment = (props) => {

  const [replyBox, setReplyBox] = useState(false);
  //console.log(replyBox);
  // opens a reply box for user input
  const replyButton = async (e) => {
    e.preventDefault();
    //console.log('CLICKED');
    setReplyBox(true);
  }

  return (
    <div class="actions">
      <ReplyModal onClick={replyButton} postId={props.postId}>Reply</ReplyModal>
    </div>
     
  );
};

export default ReplyComment;
