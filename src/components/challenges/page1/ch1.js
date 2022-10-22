import React ,{useState} from 'react'
import Navbar from '../../dashboard/Navbar';
import Editor from '../../dashboard/editor';

const cDefault =
`#include<stdio.h>
int main()
{
  char ch = 'A';
  printf("%c",ch);
}`;

const Ch1 = () => {
  const [code, setCode] = useState(cDefault);

  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  return (
    <div>
        <Navbar/>
        <div className='flex flex-col mx-20 mt-10 bg-gray-700 rounded-lg'>
          <div className='mx-6 my-6'>
            <div className='mb-4'>
              <p className='text-2xl text-[#34aee7] font-bold'>
                Problem
              </p>
            </div>
            <div>
              <p className='text-2xl text-gray-200 font-semibold'>
                Level1_IO_Print Intial
              </p>
            </div>
            <div>
              <p className='text-lg text-white mt-4'>
                Write a program to input the inital of a person and print it.
              </p>
              <p className='text-lg text-white mt-4'>
                Input Format:
              </p>
              <p className='text-lg text-white'>
                Input contains a character
              </p>
              <p className='text-lg text-white mt-4'>
                Output Format:
              </p>
              <p className='text-lg text-white'>
                Print the character
              </p>
              <p className='text-lg text-white mt-4'>
                Sample Input 1:
              </p>
              <div className='flex text-white bg-slate-800 rounded-md h-12 w-full mt-2'>
                <p className='my-3 mx-4'>A</p>
              </div>
              <p className='text-white text-lg mt-4'>
                Sample Output 1:
              </p>
              <div className='flex h-12 w-full bg-slate-800 rounded-md mt-2'>
                <p className='text-white my-3 mx-4'>
                  A
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col mx-20 mt-6 bg-gray-700 rounded-lg'>
          <div className='my-6 mx-6 w-7/12'>
              <Editor
              code={code}
              onChange={onChange}
              />
          </div>
        </div>
    </div>
  )
}
 export default Ch1;