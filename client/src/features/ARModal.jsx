import React, { useState } from 'react';
import Webcam from 'react-webcam';

const ARModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-5 z-50">
      <button className="bg-green-600 p-2 rounded" onClick={() => setOpen(!open)}>
        Try AR
      </button>
      {open && (
        <div className="bg-black p-2 rounded mt-2 w-80">
          <Webcam className="rounded w-full" />
          <img
            src="/assets/glasses.png"
            alt="overlay"
            className="absolute top-20 left-1/2 -translate-x-1/2 w-28 opacity-75"
          />
        </div>
      )}
    </div>
  );
};

export default ARModal;