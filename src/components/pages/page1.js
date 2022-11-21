import React from 'react';
import Navbar from '../dashboard/Navbar';
import {Link} from 'react-router-dom';

export default function page1() {
  return (
    <div>
        <Navbar/>
        <div class="mb-6 mt-6 mx-64">
              <h1 class="text-2xl text-gray-200 font-bold">
              Input / Output Statements
              </h1>
        </div>
        <div class="grid grid-cols-1 gap-4 mx-64">
          <div class="grid grid-cols-2 items-center rounded-lg bg-gray-700 h-22 px-12 hover:scale-105 duration-100">
            <div class="grid justify-start">
              <h2 class="text-xl text-gray-300">
                Level1_IO_Print Intial
              </h2>
            </div>
            <div class="grid justify-end">
              <Link to="/page1/ch1">
                <button class="text-gray-300 text-lg hover:shadow-ms1 bg-[#1C2333] p-2 rounded-lg">
                  Solve Now
                </button>
              </Link>
            </div>
          </div>
          <div class="grid grid-cols-2 items-center rounded-lg bg-gray-700 h-22 px-12 hover:scale-105 duration-100">
            <div class="grid justify-start">
              <h2 class="text-xl text-gray-300">
                Level1_IO_Print The Age
              </h2>
            </div>
            <div class="grid justify-end">
                <button class="text-gray-300 text-lg hover:shadow-ms1 bg-[#1C2333] p-2 rounded-lg">
                  Solve Now
                </button>
            </div>
          </div>
          <div class="grid grid-cols-2 items-center rounded-lg bg-gray-700 h-22 px-12 hover:scale-105 duration-100">
            <div class="grid justify-start">
              <h2 class="text-xl text-gray-300">
                Level1_IO_Print The CGPA
              </h2>
            </div>
            <div class="grid justify-end">
                <button class="text-gray-300 text-lg hover:shadow-ms1 bg-[#1C2333] p-2 rounded-lg">
                  Solve Now
                </button>
            </div>
          </div>
          <div class="grid grid-cols-2 items-center rounded-lg bg-gray-700 h-22 px-12 hover:scale-105 duration-100">
            <div class="grid justify-start">
              <h2 class="text-xl text-gray-300">
                Level1_IO_Print The Register Number
              </h2>
            </div>
            <div class="grid justify-end">
                <button class="text-gray-300 text-lg hover:shadow-ms1 bg-[#1C2333] p-2 rounded-lg">
                  Solve Now
                </button>
            </div>
          </div>
          <div class="grid grid-cols-2 items-center rounded-lg bg-gray-700 h-22 px-12 hover:scale-105 duration-100">
            <div class="grid justify-start">
              <h2 class="text-xl text-gray-300">
                Level1_IO_Print The Phone Number
              </h2>
            </div>
            <div class="grid justify-end">
                <button class="text-gray-300 text-lg hover:shadow-ms1 bg-[#1C2333] p-2 rounded-lg">
                  Solve Now
                </button>
            </div>
          </div>  
        </div>
      </div>
  )
}
