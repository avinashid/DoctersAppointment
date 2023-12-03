import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex gap-6 flex-col m-auto items-center h-screen justify-center ">
      <div className="text-6xl font-medium font-serif">PAGE NOT FOUND</div>
      <div className="text-sm text-red-600">
        Sorry, the page you are looking for does not exist.
      </div>
    </div>
  );
};

export default ErrorPage;
