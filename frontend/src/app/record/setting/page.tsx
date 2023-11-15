import React from 'react';
import Image from 'next/image';
import { staticPath } from '@/lib/$path'
import { SettingForm } from '@/app/features/record/components/SettingForm'


const SettingPage: React.FC = () => {
  return (
    <div>
      <div className={`text-white`}>
      </div>
      <SettingForm />
    </div>
  );
}

export default SettingPage;