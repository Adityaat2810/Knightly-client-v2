import { Clock, ArrowRight } from "lucide-react";

function formatResult(result: string, playerId: string, whiteId: string) {
  if (!result) return "Unknown";
  if (result === "DRAW") return "Draw";
  if (result === "WHITE_WINS") return playerId === whiteId ? "Win" : "Loss";
  if (result === "BLACK_WINS") return playerId === whiteId ? "Loss" : "Win";
  return "Abandoned";
}

export default function GameHistory({ games }: { games: any[] }) {
  if (!games.length) return <p>No games played yet.</p>;

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-light text-slate-900">Recent Games</h2>
        <span className="text-slate-400 font-light">{games.length} games</span>
      </div>

      <div className="h-[calc(100vh-280px)] overflow-y-auto pr-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
        {games.map((game) => {
          const opponent =
            game.whitePlayerId === game.blackPlayerId
              ? "Unknown"
              : game.whitePlayerId === game.blackPlayerId
              ? "Self"
              : "Opponent";

          const result = formatResult(game.result, game.whitePlayerId, game.whitePlayerId);

          return (
            <div
              key={game.id}
              className="group relative border border-slate-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border-2 border-blue-400 flex items-center justify-center text-slate-900 text-lg font-light">
                    {opponent.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xl font-light text-slate-900 mb-1">{opponent}</div>
                    <div className="flex items-center gap-3 text-sm text-slate-400 font-light">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {new Date(game.startAt).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className={`px-5 py-2 rounded-full text-sm font-light ${
                      result === "Win"
                        ? "bg-blue-50 text-blue-600"
                        : result === "Loss"
                        ? "bg-red-50 text-red-600"
                        : "bg-slate-50 text-slate-600"
                    }`}
                  >
                    {result}
                  </span>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
