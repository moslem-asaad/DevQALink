/* global faceIO */
import React, { useEffect, useState } from 'react'

import dell from '../../../images/dell.webp'
import Login from './Login'
import Signup from './Signup'
import { useDispatch } from 'react-redux'
import { setFaceIo } from '../../../Utility/Redux/Slices/FaceIoSlice'
const SignForm = (props) => {



  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setFaceIo(new faceIO(process.env.REACT_APP_FACEIO_PUBLIC_ID)))
      // faceio = new faceIO("fioac3b3");
  }, []);

  const [loginInput, setloginInput] = useState({})
  return (
    <div id='leftSide' className={props.sign ? 'SignInSlideRIGHT' : 'SignupSlideLeft'}>

    <img src={dell}  alt='' id='dellLogo'/>




 {props.sign ? <Signup  /> : <Login setVisble={props.setvisble}/>}

   


  </div>
  )
}

export default SignForm
