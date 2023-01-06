import React from 'react';

const Slider = () => {
  const [value, setValue] = React.useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="relative rounded-md shadow-sm">
      <input
        type="range"
        value={value}
        onChange={handleChange}
        className="block w-full appearance-none rounded-md cursor-pointer bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          className="h-4 w-4 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <svg
          className="h-4 w-4 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 15l7-7 7 7" />
        </svg>
      </div>
      <div className="absolute bottom-0 flex items-center justify-center w-full pb-4 text-xl font-bold text-center text-gray-700">
        {value}
      </div>
    </div>
  );
};

export default Slider;
