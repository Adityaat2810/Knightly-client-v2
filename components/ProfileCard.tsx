import { Trophy } from "lucide-react";

export default function ProfileCard({ profile }: { profile: any }) {
  const { name, createdAt, rating, gamesAsWhite, gamesAsBlack } = profile;

  const totalGames = [...(gamesAsWhite || []), ...(gamesAsBlack || [])];
  const wins = totalGames.filter(g => g.result?.includes("WINS")).length;
  const losses = totalGames.filter(g => g.result?.includes("LOSES")).length;
  const draws = totalGames.filter(g => g.result === "DRAW").length;

  return (
    <div className="border border-slate-200 rounded-2xl p-6 bg-white">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full border-2 border-blue-400 flex items-center justify-center text-slate-900 text-xl font-light">
          {name.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-light text-slate-900">{name}</h3>
          <p className="text-sm text-slate-400 font-light">
            Joined {new Date(createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-5 h-5 text-blue-500" />
        <span className="text-3xl font-light text-slate-900">{rating}</span>
        <span className="text-sm text-slate-400 font-light">rating</span>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
        <div>
          <div className="text-2xl font-light text-slate-900">{wins}</div>
          <div className="text-xs text-slate-400 font-light">Wins</div>
        </div>
        <div>
          <div className="text-2xl font-light text-slate-900">{draws}</div>
          <div className="text-xs text-slate-400 font-light">Draws</div>
        </div>
        <div>
          <div className="text-2xl font-light text-slate-900">{losses}</div>
          <div className="text-xs text-slate-400 font-light">Losses</div>
        </div>
      </div>
    </div>
  );
}
