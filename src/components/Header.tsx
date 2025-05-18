import React from 'react';

import { useTheme } from '../context/theme/useTheme';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-main-bg shadow-main transition-theme top-0 sticky z-10">
      <div className="flex justify-between items-center gap-[20px] p-[20px] min-h-[90px] ">
        <div>
          <p className="font-logo text-[30px] transition-theme">Movie.okten</p>
        </div>

        <input
          className="text-[18px] bg-input-bg text-input-text flex-1 max-w-[500px] rounded-[10px] p-[10px]  shadow-[-30px_-10px_70px_rgba(0,0,0,0.1)] focus:outline-input-outline"
          placeholder="Type to search movie"
        />

        <div className="flex gap-[20px] items-center">
          <div className="items-center flex">
            <button
              className={`
                ease-in-out
                shadow-[inset_0px_5px_15px_rgba(0,0,0,0.4),inset_0px_-5px_15px_rgba(255,255,255,0.4)]
                cursor-pointer w-[110px] h-[46px] relative  rounded-[15px]
                after:content-[''] after:absolute after:top-[3px] after:w-[40px] after:h-[40px] after:rounded-[50%]
                after:transition-all  after:duration-[0.5s]  after:ease-in-out after:shadow-[0_5px_10px_rgba(0,0,0,0.2)]
                ${
                  theme === 'light'
                    ? 'after:left-[3px] after:bg-[linear-gradient(180deg,#ffcc89,#d8860b)] bg-white'
                    : 'after:left-[67px] after:bg-[#3d3d3d] bg-[#dedede]'
                }
              `}
              onClick={() => {
                toggleTheme(theme);
              }}
            ></button>
          </div>

          <div>
            <button
              className={`
                transition-theme
            flex cursor-pointer items-center gap-[10px] border-input-border rounded-full  shadow-[0px_5px_25px_-10px_rgba(0,0,0,0.4)] p-[0_15px_0_0px]
             ${!(theme === 'light') && 'bg-[#3d3d3d]'}`}
            >
              <img
                className="h-[46px] w-[46px] rounded-full"
                src="/public/img/header/header-avatar.png"
              />
              <p className="text-[16px] font-semibold">Vasyl </p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
