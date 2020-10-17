import React, { useState } from 'react';
import { ClassRocket, FunctionalRocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {
  const [rerenderCount, triggerRerender] = useState(0);

  setTimeout(() => { triggerRerender(rerenderCount + 1); }, 500);

  return (
    <div>
      <h1>Save the Rocket From taking off to early and fast!</h1>
      <h2>Simply make the rocket leave orbit slower or after waiting 20 seconds!</h2>

      <h2>{rerenderCount}</h2>

    <div className="launchpad">

      <ClassRocket />
    </div>
    </div>
  );
}
