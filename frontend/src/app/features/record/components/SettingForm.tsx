'use client';
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Tabs from '../../../components/Tabs/Tabs';
import ActiveTabs from '../../../components/Tabs/ActiveTabs';
import { getPositionOptions } from '../logic/getPositionOptions';


export const SettingForm: React.FC = () => {
  const methods = useForm();
  const [playerCount, setPlayerCount] = useState('2');

  const [activePosition, setActivePosition] = useState('');

  // 現在選択されているプレイヤーの人数に基づいてポジションオプションを取得
  const positionOptions = getPositionOptions(playerCount);

  // プレイヤーの人数のタブが変更されたときの処理
  const handlePlayerCountChange = (newPlayerCount: string) => {
    setPlayerCount(newPlayerCount);
    // プレイヤーの人数が変更された場合、ポジションのアクティブなタブもリセットする
    setActivePosition(getPositionOptions(newPlayerCount)[0]);
  };

  // ポジションのタブが変更されたときの処理
  const handlePositionChange = (newPosition: string) => {
    setActivePosition(newPosition);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Tabs
          title="Game"
          name="gameType"
          options={['Cash Game', 'MTT']}
        />
        <Tabs
          title="Chip Count"
          name="chipCountType"
          options={['BB', 'Chip']}
        />
        {/* プレイヤーの人数 */}
        <ActiveTabs
          title="Player Count"
          name="playerCount"
          options={['2', '3', '4', '5', '6', '7', '8', '9']}
          onTabChange={handlePlayerCountChange}
          activeTab={playerCount}
        />
        {/* ポジション */}
        <ActiveTabs
          title="Position"
          name="position"
          options={positionOptions}
          activeTab={activePosition}
          onTabChange={handlePositionChange}
        />
      </form>
    </FormProvider>
  );
};

export default SettingForm;
