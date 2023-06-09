'use client';

import React, { useEffect } from 'react';
import Button from './components/button/button.component';
import Input from './components/input/input.component';
import Checkbox from './components/checkbox/checkbox.component';
import Switch from './components/switch/switch.component';
import Radio from './components/radio/radio.component';
import ReactHookForm from './components/react-hook-form/react-hook-form.component';
import AllToaster from './components/toaster/toaster.component';
import FormModal from './components/form-modal/form-modal.component';

export default function AllComponents() {
  useEffect(() => {
    // axios
    //   .get('https://ipapi.co/json/')
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // axios
    //   .get('http://ip-api.com/json')
    //   .then(function (response) {
    //     response.json().then((jsonData) => {
    //       console.log(jsonData);
    //     });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }, []);
  // console.log(errors);

  return (
    <>
      <Button />
      <AllToaster />
      <Input />
      <Checkbox />
      <Switch />
      <Radio />
      <FormModal />
      <ReactHookForm />
    </>
  );
}
