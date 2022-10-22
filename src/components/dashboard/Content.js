import React from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';

//Page Content
// import Page1 from './pages/page1';
// import Page2 from './pages/page2';

const content = () => {
  return (
    <div>
    <Navbar/>
      <div className="px-12 mb-6 mt-6">
        <h1 className="text-3xl text-gray-200 font-bold">
          Basic
        </h1>
      </div>
      <div className = "grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 px-12 gap-7">
        <Link to="/page1">
          <button className="flex justify-center items-center rounded-lg hover:shadow-ms bg-gray-700 h-24 w-56 uppercase transform hover:scale-105 ease-in-out duration-200">
            <div>
                <h2 className="text-gray-200 text-lg font-bold mx-5">
                  i/o statements
                </h2>
            </div>
          </button>
        </Link>
        <Link to="/page2">
          <button className="flex justify-center items-center rounded-lg hover:shadow-ms bg-gray-700 h-24 w-56 uppercase transform hover:scale-105 ease-in-out duration-200">
            <div>
                <h2 className="text-gray-200 text-lg font-bold mx-5">
                  operators
                </h2>
            </div>
          </button>
        </Link>
          <button className="flex justify-center items-center rounded-lg hover:shadow-ms bg-gray-700 h-24 w-56 uppercase transform hover:scale-105 ease-in-out duration-200">
            <div>
                <h2 className="text-gray-200 text-lg font-bold mx-5">
                  switch
                </h2>
            </div>
          </button>
          <button className="flex justify-center items-center rounded-lg hover:shadow-ms bg-gray-700 h-24 w-56 uppercase transform hover:scale-105 ease-in-out duration-200">
            <div>
                <h2 className="text-gray-200 text-lg font-bold mx-5">
                  decision making
                </h2>
            </div>
          </button>
          <button className="flex justify-center items-center rounded-lg hover:shadow-ms bg-gray-700 h-24 w-56 uppercase transform hover:scale-105 ease-in-out duration-200">
            <div>
                <h2 className="text-gray-200 text-lg font-bold mx-5">
                    looping
                </h2>
            </div>
          </button>
          <button className="flex justify-center items-center rounded-lg hover:shadow-ms bg-gray-700 h-24 w-56 uppercase transform hover:scale-105 ease-in-out duration-200">
            <div>
                <h2 className="text-gray-200 text-lg font-bold mx-5">
                    numbers
                </h2>
            </div>
          </button>
          <button className="flex justify-center items-center rounded-lg hover:shadow-ms bg-gray-700 mb-4y h-24 w-56 uppercase transform hover:scale-105 ease-in-out duration-200">
            <div>
                <h2 className="text-gray-200 text-lg font-bold mx-5">
                    bitwise
                </h2>
            </div>
          </button>
          <button className="flex justify-center items-center rounded-lg hover:shadow-ms bg-gray-700 h-24 w-56 uppercase transform hover:scale-105 ease-in-out duration-200">
            <div>
                <h2 className="text-gray-200 text-lg font-bold mx-5">
                    pattern
                </h2>
            </div>
          </button>
          <button className="flex justify-center items-center rounded-lg hover:shadow-ms bg-gray-700 h-24 w-56 uppercase transform hover:scale-105 ease-in-out duration-200">
            <div>
                <h2 className="text-gray-200 text-lg font-bold mx-5">
                    array
                </h2>
            </div>
          </button>
          <button className="flex justify-center items-center rounded-lg hover:shadow-ms bg-gray-700 h-24 w-56 uppercase transform hover:scale-105 ease-in-out duration-200">
            <div>
                <h2 className="text-gray-200 text-lg font-bold mx-5">
                    strings
                </h2>
            </div>
          </button>
          <button className="flex justify-center items-center rounded-lg hover:shadow-ms bg-gray-700 h-24 w-56 uppercase transform hover:scale-105 ease-in-out duration-200">
            <div>
                <h2 className="text-gray-200 text-lg font-bold mx-5">
                    2d_strings
                </h2>
            </div>
          </button>
          <button className="flex justify-center items-center rounded-lg hover:shadow-ms bg-gray-700 h-24 w-56 uppercase transform hover:scale-105 ease-in-out duration-200">
            <div>
                <h2 className="text-gray-200 text-lg font-bold mx-5">
                    2d_array
                </h2>
            </div>
          </button>
      </div>
    </div> 
  )
}

export default content