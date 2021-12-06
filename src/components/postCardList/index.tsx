import React, { Component, useEffect, useState } from "react";
import _ from "lodash";
import PostCard from "components/postCard";

const PostCardList = (props: any) => {
    const { postCardList } = props;

    useEffect(() => {}, []);

    const postCardUI = _.map(postCardList, (post) => <PostCard post={post} />);

    return <>{postCardUI} </>;
};

export default PostCardList;
