'use client';
import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface TabsProps {
  title: string;
  name: string;
  options: string[];
}

const Tabs: React.FC<TabsProps> = ({ title, name, options }) => {
  const { control } = useFormContext();
  const [activeTab, setActiveTab] = useState<string>(options[0]);

  return (
    <main>
      <p className="text-white text-center sm:text-2xl text-lg font-medium mt-12">{title}</p>
      <div className="sm:max-w-screen-lg mx-auto sm:p-8 p-2 flex flex-col items-center">
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
                className={`text-white cursor-pointer flex-grow flex items-center justify-center truncate uppercase select-none font-semibold sm:text-lg text-xs sm:rounded-full rounded-lg sm:py-2 py-2 mx-1 first:ml-0 last:mr-0
                ${option === activeTab
                    ? 'bg-[#0B2447] sm:border-2 border border-gray-200'
                    : 'hover:bg-[#19376D]'
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

export default Tabs;
