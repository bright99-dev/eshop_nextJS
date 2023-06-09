import React from "react";

export default function TextArea({
  variant,
  label,
  className,
  helperText,
  ...props
}: TextArea) {
  switch (variant) {
    case "small":
      return (
        <div className="flex flex-col">
          <div className={`relative w-full rounded-md mb-1 ${className}`}>
            <textarea
              placeholder=" "
              className="form-input bg-transparent w-full block outline-none border border-gray-500 focus:border-blue-700 hover:border-black rounded-md px-4 pt-2"
              name=""
              {...props}
              id=""
              cols={1}
              rows={2}
            ></textarea>
            <label className="form-label inline-block absolute top-2/4 -translate-y-2/4 left-4 select-none pointer-events-none text-base text-gray-500">
              {label}
            </label>
          </div>
          {helperText && (
            <span className="text-xs text-red-500 px-2">{helperText}</span>
          )}
        </div>
      );
    case "large":
      return (
        <div className="flex flex-col">
          <div className={`relative w-full rounded-md mb-1 ${className}`}>
            <textarea
              placeholder=" "
              className="form-input bg-transparent w-full block outline-none border border-gray-500 focus:border-blue-700 hover:border-black rounded-md px-4 pt-2"
              name=""
              {...props}
              id=""
              cols={2}
              rows={3}
            ></textarea>
            <label className="form-label inline-block absolute top-2/4 -translate-y-2/4 left-4 select-none pointer-events-none text-base text-gray-500">
              {label}
            </label>
          </div>
          {helperText && (
            <span className="text-xs text-red-500 px-2">{helperText}</span>
          )}
        </div>
      );
    default:
      return (
        <textarea name="" id="">
          Mising Props
        </textarea>
      );
  }
}
