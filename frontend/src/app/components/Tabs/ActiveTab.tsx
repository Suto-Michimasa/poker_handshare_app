import React, { useState, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type TabsProps = {
  title: string;
  name: string;
  options: string[];
  activeTab: string; // 外部からアクティブなタブを制御するためのprop
  onTabChange: (newActiveTab: string) => void; // タブが変更されたときに呼び出される関数
};

const ActiveTabs: React.FC<TabsProps> = ({ title, name, options, activeTab, onTabChange }) => {
  const { control } = useFormContext();

  useEffect(() => {
    // optionsが更新されたときに、activeTabも更新する
    if (!options.includes(activeTab)) {
      onTabChange(options[0]);
    }
  }, [options, activeTab, onTabChange]);

  return (
    <main>
      <p className="text-white text-center text-2xl font-medium mt-12">{title}</p>
      <div className="max-w-screen-lg mx-auto p-8 flex flex-col items-center">
        <div className="flex w-full relative">
          {options.map((option, index) => (
            <React.Fragment key={option}>
              <Controller
                name={name}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="radio"
                    id={`${name}${index}`}
                    value={option}
                    className="sr-only"
                    checked={option === activeTab}
                    onChange={() => onTabChange(option)} // 外部の状態更新関数を呼び出す
                  />
                )}
              />
              <label
                htmlFor={`${name}${index}`}
                className={`text-white cursor-pointer flex-grow flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2 mx-1 first:ml-0 last:mr-0
                ${option === activeTab
                    ? 'bg-[#0B2447] border-2 border-gray-200' // Active tab styles
                    : 'hover:bg-[#19376D]' // Non-active tab hover styles
                  }`}
                style={{ width: `${100 / options.length}%` }}
              >
                {option}
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ActiveTabs;
