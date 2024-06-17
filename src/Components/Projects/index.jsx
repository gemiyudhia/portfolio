import React from "react";
import { Button } from "../Utilities/Button";

export const Projects = () => {
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center flex-col gap-y-5 lg:flex-row mt-16 lg:mt-0">
      <div className="w-full flex justify-center py-4">
        <div className="grid grid-cols-2 gap-4 mx-2">
          <div className="bg-gray-100 p-4 text-slate-800 rounded-lg hover:scale-105 transition-transform duration-200">
            <img src="" alt="" />
            <h2 className="font-semibold text-lg mb-1">Todo List App</h2>
            <p className="text-sm text-justify">
              Ini adalah aplikasi todo list untuk mencatat apa yang anda ingin
              lakukan saat itu.
            </p>
            <div className="mt-6 text-white">
              <Button to="">Demo</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
