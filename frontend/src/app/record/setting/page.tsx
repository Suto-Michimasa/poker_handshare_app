import React from 'react';
import Image from 'next/image'
import { staticPath } from '@/lib/$path'
import { SettingForm } from '@/app/components/Form/SettingForm'


const SettingPage: React.FC = () => {
  return (
    <div>
      <div className={`text-white`}>
      </div>
      <SettingForm />

      {/* TODO: レイアウトフォルダに切り分ける */}
      <div className={`fixed top-0 left-0 w-full h-screen z-[-1]`}>
        <Image src={staticPath.background_jpg} layout={`fill`} objectFit={`cover`} alt="poker-background" />
      </div>
    </div>
  );
}

export default SettingPage;