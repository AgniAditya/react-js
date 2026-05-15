import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-5">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"></div>

      <p className="text-sm font-medium text-gray-600">
        Loading..
      </p>
    </div>
  );
};

export default Loading;