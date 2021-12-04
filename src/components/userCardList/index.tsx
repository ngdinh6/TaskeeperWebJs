import React, { Component, useEffect, useState } from "react";
import _ from "lodash";
import UserCard from "components/userCard";

const UserCardList = (props: any) => {
    const { userList } = props;
    useEffect(() => {}, []);

    const userUI = _.map(userList, (user) => <UserCard user={user} />);

    return (
        <div className="container profile-page">
            <div className="row">
                <div className="row">{userUI}</div>
            </div>
        </div>
    );
};

export default UserCardList;
