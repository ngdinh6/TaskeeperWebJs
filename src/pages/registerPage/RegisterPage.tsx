import React, { useEffect, useState } from "react";
import * as Style from "pages/registerPage/style";
import { Image, Space } from "antd";
import {Link} from "react-router-dom";
import imageRegister from "assets/images/register.png";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

const RegisterPage = (props: any) => {
  const { history } = props;

  return (
    <div className="ant" style={{flexDirection:'row',display:'flex',width:"100vw",height:"100vh"}}>
      <div style={{width:'40%',height:'100%',backgroundColor:'#add2c9'}}>
        <Image style={{width:'100%',height:'100%'}} src={imageRegister}/>
      </div>
      <div style={{width:'60%',height:'100%'}}>
        <div style={{flexDirection:'column',textAlign:'end',margin:20}}>
          <p>Already have an account? <Link style={{color:'red',fontWeight:'bold'}} to="/">Sign in</Link></p>   
        </div>
        <p style={{margin:50,fontWeight:'bold',fontSize:35,textAlign:'center'}}>Sign up to Taskeeper</p>
        <div style={{width:'100%',height:'65%'}}>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
