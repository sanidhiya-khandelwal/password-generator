import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function generatePassword(length, isCharacter, isNumber) {
  let password = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (isCharacter) {
    str += "!~#$%^&*()_+@<><>?/.,`-+{}[]"
  }

  if (isNumber) {
    str += "1234567890";
  }

  for (let i = 1; i <= length; i++) {
    password += str.charAt(Math.floor((Math.random() * str.length)));
  }
  return password;
}

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isCharacter, setIsCharacter] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const passwordRef = useRef(null);

  const memoizedGeneratePassword = useCallback(
    () => setPassword(generatePassword(length, isCharacter, isNumber)),
    [length, isCharacter, isNumber]
  );

  useEffect(() => {
    memoizedGeneratePassword();
  }, [memoizedGeneratePassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
  }, [password, passwordRef]);

  return (
    <div className='w-full h-screen bg-black pt-12 px-4'>
      <div className='lg:w-2/4 md:w-3/4 sm:w-full bg-slate-700 m-auto rounded-md p-4'>
        <h1 className='text-center text-2xl mb-2  text-white'>Password Generator</h1>
        <div className='p-2 flex flex-col md:flex-row gap-2'>
          <input
            className='w-full md:w-11/12 rounded-md p-1 mb-2 md:mb-0'
            type="text"
            placeholder='Password'
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            className='w-full md:w-auto rounded-md p-1 px-4 bg-blue-600 text-white'
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className='flex flex-col md:flex-row gap-4 text-white p-2'>
          <div className='flex align-middle gap-2'>
            <input
              type="range"
              className='cursor-pointer'
              max={20}
              value={length}
              onChange={e => setLength(Number(e.target.value))}
            />
            <label>length {length}</label>
          </div>
          <div className='flex align-middle gap-2'>
            <input
              type="checkbox"
              className='cursor-pointer'
              onChange={e => setIsCharacter(prev => !prev)}
            />
            <label>Characters</label>
          </div>
          <div className='flex align-middle gap-2'>
            <input
              type="checkbox"
              className='cursor-pointer'
              onChange={e => setIsNumber(prev => !prev)}
            />
            <label>Numbers</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
