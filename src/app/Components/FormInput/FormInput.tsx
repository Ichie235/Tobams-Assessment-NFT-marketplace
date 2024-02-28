import { CSSProperties, ChangeEvent, useState, useEffect } from "react";
import { Public_Sans } from "next/font/google";

type FormInputTypes = {
  type: string;
  title: string;
  id?: string;
  name: string;
  pattern?: string;
  value: string | number | boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
  placeholder?: string;
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
  required?: boolean;
};

const font = Public_Sans({ subsets: ["latin"] });

export default function FormInput(props: FormInputTypes) {
  const [domLoaded, setDomLoaded] = useState(false);
  const [formState, setFormState] = useState({
    [props.name]: "",
  });
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handleFocus = () => {
    setFocused(true);
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();

    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <>
      <div
        id="form-input"
        className="w-full flex flex-col items-start gap-1 bg-transparent rounded-small"
      >
        <label
          htmlFor={props.id}
          className={`text-base ${formState[props.name] ? "active" : ""} ${
            font.className
          }`}
        >
          {props.title}
        </label>

        <input
          type="text"
          name={domLoaded ? props.name : ""}
          id={props.id}
          value={props.value as string}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            handleChange(e);
            if (props.onChange) {
              props.onChange(e);
            }
          }}
          pattern={props.pattern}
          required={props.required}
          placeholder={props.placeholder}
          disabled={props.disabled}
          onBlur={handleFocus}
          data-focused={focused.toString()}
          className={`w-full h-10 ${
            props.disabled
              ? " text-apt-placeholder-grey border-apt-placeholder-grey"
              : " text-apt-black border-apt-blue-500 shadow-sm"
          } bg-transparent outline-none resize-none placeholder:text-nft-deep-gray rounded py-2 px-6 lg:px-3 xl:px-7 overflow-hidden border text-black focus:outline-none  focus:border-nft-royal-blue focus:ring-1 focus:ring-nft-royal-blue ${
            font.className
          } ${props.className} `}
        />

        <span className="hidden text-[.7rem] error">Required*</span>

        {props.icon && <i className={props.icon}></i>}
      </div>
    </>
  );
}
