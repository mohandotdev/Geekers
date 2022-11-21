import React ,{useState, useEffect} from 'react'
import Navbar from '../../dashboard/Navbar';
import Editor from '../../dashboard/editor';
import LanguagesDropdown from '../../dashboard/LanguagesDropdown';
import ThemeDropdown from '../../dashboard/ThemeDropdown';
import {defineTheme} from '../../lib/defineTheme';
import { languageOptions } from '../../constants/languageOptions';
import OutputWindow from '../../dashboard/OutputWindow';
// import axios from "axios";

const cDefault =
`#include<stdio.h>
int main()
{
  char ch = 'A';
  printf("%c",ch);
}`;

const Ch1 = () => 
{
  const [language, setLanguage] = useState(languageOptions[4]);
  const [code, setCode] = useState(cDefault);
  const [theme, setTheme] = useState("cobalt");
  const [processing, setProcessing] = useState(null);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);

  const onSelectChange = (sl) => {
    console.log("Selected Option:",sl);
    setLanguage(sl);
  };

  function handleThemeChange(th) {
    const theme = th;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }
  useEffect(() => {
    defineTheme("night-owl").then((_) =>
      setTheme({ value: "night-owl", label: "Night Owl" })
    );
  }, []);

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
  const handleCompile = () =>
  {
    setProcessing(true);
    const formData = 
    {
      "language_id": language.id,
      "source_code": btoa(code),
      "stdin": btoa(customInput),
    };
    console.log(language);
    console.log(typeof(formData));
    console.log(formData);
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
          <div className='flex flex-row mt-4'>
            <div className="px-6 pt-4 w-64">
              <LanguagesDropdown onSelectChange={onSelectChange}/>
            </div>
            <div className="px-6 pt-4 w-64">
              <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme}/>
            </div>
          </div>
          <div className='flex flex-col gap-2 my-5 mx-6 w-9/12'>
              <Editor
              code={code}
              onChange={onChange}
              language={language?.value}
              theme={theme.value}
              />
              <div className='flex flex-col w-6/12'>
                <OutputWindow/>
              </div>
          </div>
          <div className='mb-4'>
            <button
              onClick={handleCompile}
              disabled={!code} 
              className='px-8 py-2 mx-6 bg-gray-200 rounded-lg'
            >
              Run
            </button>
          </div>
        </div>
        <br/>
    </div>
  )
};
 export default Ch1;