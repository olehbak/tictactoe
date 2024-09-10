'use client';

import { useEffect, useState } from 'react';

function TickTacToe() {
	// Define the player and game state
	const [player, setPlayer] = useState(1);
	const [gameState, setGameState] = useState<string[]>(["", "", "", "", "", "", "", "", ""]);
	const [title, setTitle] = useState("Player 1 turn")

	// Function to reset the game state
	function resetGameState() {
		setPlayer(1)
		setTitle("Player 1 turn")
		setGameState(["", "", "", "", "", "", "", "", ""]);
	}

	function handleTitle() {
		if(gameState.toString() === ["", "", "", "", "", "", "", "", ""].toString()){
			return "Player 1 turn"
		}
		else if(!isWon()){
			return("Player "+player.toString()+ " turn")
		}
		else if(isWon() !== "draw"){
			return("Player "+(isWon())+" wins!")
		}
		else{
			return("Draw")
		}
	}

	function isWon (){
		 // Define all possible win conditions (rows, columns, diagonals)
		const winConditions = [
			[0, 1, 2], // Top row
			[3, 4, 5], // Middle row
			[6, 7, 8], // Bottom row
			[0, 3, 6], // Left column
			[1, 4, 7], // Middle column
			[2, 5, 8], // Right column
			[0, 4, 8], // Left diagonal
			[2, 4, 6], // Right diagonal
		];
		
		  // Loop through all win conditions to check if one is met
		for (let condition of winConditions) {
			const [a, b, c] = condition;
			if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
			  return gameState[a]; // Return the winning player ("1" or "2")
			}
		}
		// Check if all tiles are filled (a draw)
		if (gameState.every(tile => tile !== "")) {
			return "draw";
		}
		// No winner yet
		return null;
	}

	// GameTile component
	const GameTile = ({ state, index }: { state: string, index: number }) => {
		// UseEffect to log when the tile is re-rendered (optional)
		useEffect(() => console.log(`Tile ${index} re-rendered with state: ${state}`), [index, state]);

		// Function to handle tile click and update game state
		function setTile(index: number) {
			if(gameState[index] === "" && !isWon()) {  // Ensure the tile is unclaimed before updating
				// Clone the gameState array to trigger a re-render
				let newState = [...gameState];
				newState[index] = player.toString();
				setGameState(newState);
				// Switch players after the move
				setPlayer(player === 1 ? 2 : 1);
					
			}
			
		}

		// Render the tile based on its state
		if (state === "1") {
			return <div className='w-[100px] h-[100px] border-[8px] border-purple-5 col-span-1' />;
		} 
		else if (state === "2") {
			return <div className='w-[100px] h-[100px] rounded-full border-[8px] border-green-3 col-span-1' />;
		} 
		else {
			return <div onClick={() => setTile(index)} className='w-[100px] h-[100px] rounded-[100px] bg-beige-2 cursor-pointer col-span-1' />;
		}
	};

	return (
		<div className='h-screen w-screen bg-white text-center pt-5'>
			{/* Turn */}
			<h3 className='h-16 text-black text-3xl font-bold'>
				{handleTitle()}
			</h3>
			<div className='mx-auto py-12 prose grid grid-flow-col text-center '>
				{/* Board */}
				<div className='grid grid-cols-3 grid-rows-3 gap-4 w-[540px] h-[540px] bg-beige-1 p-20'>
					{gameState.map((item, index) => (
						<GameTile state={gameState[index]} key={index} index={index} />
					))}
				</div>
				{/* Legend */}
				<div>
					<div className='w-[200px] ml-[50px] flex gap-4 flex-col mt-[50px]'>
						<div className='flex gap-4'>
							<div className='w-[80px] h-[80px] border-[8px] border-purple-5' />
							<p>Player 1</p>
						</div>
					<div className='flex gap-4'>
						<div className='w-[80px] h-[80px] rounded-full border-[8px] border-green-3' />
						<p>Player 2</p>
					</div>
						<div className='flex gap-4'>
							<div className='w-[80px] h-[80px] rounded-[60px] bg-beige-2' />
							<p>Unclaimed</p>
						</div>
					</div>
				</div>
			</div>
			{/**Reset button hidden when no moves made */}
			<button 
				className={`h-16 bg-slate-300 text-black rounded px-4 ${gameState.toString() === ["", "", "", "", "", "", "", "", ""].toString() && "hidden"}`} 
				onClick={resetGameState}>
				Reset Game
			</button>
		</div>
	);
}

export default TickTacToe;