'use client';
import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface TabsProps {
  name: string;
  options: string[];
}

const Tabs: React.FC<TabsProps> = ({ name, options }) => {
  const { control } = useFormContext();
  const [activeTab, setActiveTab] = useState<string>(options[0]);


  return (
    <main className="max-w-screen-sm mx-auto p-8 flex flex-col items-center">
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
                  onChange={() => setActiveTab(option)}
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
    </main>
  );
};

export default Tabs;
