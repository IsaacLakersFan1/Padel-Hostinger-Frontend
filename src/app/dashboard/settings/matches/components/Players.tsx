import { PlayerProps } from "../interfaces/player";


export const Player = (props: PlayerProps) => {
  const {
    playerName,
    playerNumber,
    gameModeId,
  } = props;

  return (
    <div className="flex items-center gap-2">
      {playerName && (playerNumber === 1 || playerNumber === 2) && (
        <>
        <img
          src={`../../../../../../../public/${playerName}.jpeg`}
          alt={playerName}
          className="w-16 h-16 rounded-full"
          onError={(e) => {
            e.currentTarget.onerror = null; // Prevent infinite loop
            e.currentTarget.src = "https://github.com/shadcn.png"; // Fallback image
          }}
        />
          <h2>{playerName}</h2>
        </>
      )}
      {playerName && (playerNumber === 3 || playerNumber === 4) && (
        <>
          <h2>{playerName}</h2>
          <img
          src={`../../../../../../../public/${playerName}.jpeg`}
          alt={playerName}
          className="w-16 h-16 rounded-full"
          onError={(e) => {
            e.currentTarget.onerror = null; // Prevent infinite loop
            e.currentTarget.src = "https://github.com/shadcn.png"; // Fallback image
          }}
        />
        </>
      )}
      {!playerName && gameModeId === 1 && playerNumber && (
<p>No player</p>
      )}
      {!playerName &&
        gameModeId === 2 &&
        (playerNumber === 4 || playerNumber === 3) && (
          <h2 className="text-gray-400 text-xs">Waiting for opponent</h2>
        )}
      {!playerName && gameModeId === 2 && playerNumber === 2 && (
        <p>No player</p>
      )}
    </div>
  );
};
