import React, { useState } from "react";
import ToggleButton from "../Button/ToggleButton";
import SearchIcon from "../../../../svg/SearchIcon";
import { FormData } from "../../../../type/FormData";

interface CustomInputProps {
  options: string[];
  className?: string;
  disabled?: string;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  options,
  className,
  disabled,
  placeholder,
}) => {
  const [textValue, setTextValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="grid grid-cols-5 items-center py-10">
      <div className="col-span-3">
        <input
          type="text"
          value={textValue}
          onChange={handleTextChange}
          placeholder={placeholder}
          className={`w-full h-10 ${
            disabled
              ? " text-nft-light-gray border-nft-deep-gray"
              : " text-black shadow-sm rounded-l-2xl placeholder:text-nft-deep-gray p-6"
          } ${className} `}
        />
      </div>
      <div className="col-span-1 ">
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className={`w-full ${
            disabled
              ? " text-nft-light-gray border-nft-deep-gray"
              : " text-black shadow-sm border-l border-l-nft-deep-gray p-6"
          }  ${className} `}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <ToggleButton
          type="submit"
          className={`bg-blue-500 text-white px-3 py-2  rounded-none border-none rounded-r-2xl cursor-pointer ${className}`}
        >
          <SearchIcon />
        </ToggleButton>
      </div>
    </div>
  );
};

export default CustomInput;
