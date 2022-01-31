import React , { useState } from 'react';

export default function Button() {
    const [showAnotherButton, setShowAnotherButton] = useState(false);
  return (
    <div>
        <button
            data-testid="button"
            onClick={() => {
                setShowAnotherButton(true)
            }}
        >
            Click Here!!
        </button>

        {
            showAnotherButton && (
                <button data-testid="button">Another Button!!</button>
            )
        }
    </div>
  )
}
