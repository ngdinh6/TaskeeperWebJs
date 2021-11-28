import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "services/users/users.service";

const UserProfile = (props: any) => {
    const params: any = useParams();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        getUser(params.id).then((data) => {
            setUserData(data);
        });
    });
    return <div></div>;
};

export default UserProfile;
