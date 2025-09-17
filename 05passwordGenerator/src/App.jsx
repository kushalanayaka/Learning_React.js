import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*_+=(){}|~';

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 12);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="w-full max-w-md mx-auto bg-gray-900 text-orange-400 shadow-lg rounded-xl p-6 space-y-6">
        <h1 className="text-center text-2xl font-bold">Password Generator</h1>

        <div className="flex items-center shadow rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="flex-grow bg-gray-800 text-white px-4 py-2 outline-none"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-all"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <label htmlFor="lengthRange" className="font-medium">
              Length: <span className="text-white">{length}</span>
            </label>
            <input
              id="lengthRange"
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-2/3 cursor-pointer accent-orange-500"
            />06
          </div>

          <div className="flex items-center justify-between text-sm">
            <label htmlFor="numberInput" className="flex items-center gap-2">
              <input
                type="checkbox"
                id="numberInput"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="accent-orange-500"
              />
              Include Numbers
            </label>

            <label htmlFor="characterInput" className="flex items-center gap-2">
              <input
                type="checkbox"
                id="characterInput"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="accent-orange-500"
              />
              Include Symbols
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
