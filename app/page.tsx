'use client';

import { useState } from 'react';

function TickTacToe() {
  // Edit the logic here
  // Remember you can change this however you like, into different files, using different libraries etc. This is just a starting point.

  // this is a client component, so you can use react hooks here, .i.e.
  const [player, setPlayer] = useState(1);

  return (
    <div className='h-screen w-screen bg-beige-3 '>
      <div className='container mx-auto py-12 prose flex gap-32'>
        {/*Main content */}

        <div className='flex-1 flex flex-col gap-16'>
          {/* Turn */}
          <h1>Player {player} turn</h1>

          {/* Board */}
          <div className='flex gap-16'>
            <div
              className='w-[60px] h-[60px] border-[16px] rounded-full border-purple-5'
              // as a demo, we are changing the player on click
              onClick={() => {
                setPlayer(player === 1 ? 2 : 1);
              }}
            />
            <div className='w-[60px] h-[60px] border-[16px] border-green-3' />
            <div className='w-[60px] h-[60px] rounded bg-beige-2' />
          </div>
          <div className='flex gap-16'>
            <div className='w-[60px] h-[60px] rounded bg-beige-2' />
            <div className='w-[60px] h-[60px] rounded bg-beige-2' />
            <div className='w-[60px] h-[60px] rounded bg-beige-2' />
          </div>
          <div className='flex gap-16'>
            <div className='w-[60px] h-[60px] rounded bg-beige-2' />
            <div className='w-[60px] h-[60px] rounded bg-beige-2' />
            <div className='w-[60px] h-[60px] rounded bg-beige-2' />
          </div>
        </div>

        {/* Legend */}
        <div className='w-auto'>
          <div className='flex gap-4'>
            <div className='w-[60px] h-[60px] border-[16px] rounded-full border-purple-5' />
            <p>Player 1</p>
          </div>
          <div className='flex gap-4'>
            <div className='w-[60px] h-[60px] border-[16px] border-green-3' />
            <p>Player 2</p>
          </div>
          <div className='flex gap-4'>
            <div className='w-[60px] h-[60px] rounded bg-beige-2' />
            <p>Unclaimed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TickTacToe;
