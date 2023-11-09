'use client';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Tabs from '../Tabs/Tab';

export const SettingForm: React.FC = () => {
  const methods = useForm();


  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Tabs
          name="gameType"
          options={['Cash Game', 'MTT']}
        />
      </form>
    </FormProvider>
  );
};

export default SettingForm;
