import { useState } from 'react';

const Toggle = () => {
  // count it's state varaiable
  const [count, setCount] = useState(0);

  return (
    <div className="toggle">
      <p className="toggle__paragraph">Kliknąłeś {count} razy </p>
      <button className="toggle__btn" onClick={() => setCount(count + 1)}>
        Start
      </button>
    </div>
  );
};

export default Toggle;
