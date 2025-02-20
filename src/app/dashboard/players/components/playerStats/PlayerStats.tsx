import { usePlayerStats } from "./hooks/usePlayerStats";
import { useEffect, useMemo } from "react";
import { TopBar } from "@/app/dashboard/topBar/TopBar";
import {
  Label,
  PieChart,
  Pie,
  LabelList,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Separate chart configurations
const WIN_LOSS_CHART_CONFIG: ChartConfig = {
  matches: { label: "Matches" },
  Wins: { label: "Wins", color: "#36A2EB" },
  Losses: { label: "Losses", color: "#FF6384" },
};

const ELO_CHART_CONFIG: ChartConfig = {
  elo: { label: "ELO", color: "hsl(var(--chart-1))" },
};

// Separate component for the pie chart label
const PieChartLabel = ({
  viewBox = {},
  totalMatches,
}: {
  viewBox?: any;
  totalMatches: number;
}) => {
  if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) return null;

  return (
    <text
      x={viewBox.cx}
      y={viewBox.cy}
      textAnchor="middle"
      dominantBaseline="middle"
    >
      <tspan
        x={viewBox.cx}
        y={viewBox.cy}
        className="fill-foreground text-2xl sm:text-3xl font-bold"
      >
        {totalMatches.toLocaleString()}
      </tspan>
      <tspan
        x={viewBox.cx}
        y={(viewBox.cy || 0) + 24}
        className="fill-muted-foreground text-sm sm:text-base"
      >
        Matches
      </tspan>
    </text>
  );
};

// Separate component for the stats card
const StatsCard = ({
  chartData,
  totalMatches,
  winPercentage,
}: {
  chartData: Array<{ match: string; matches: number; fill: string }>;
  totalMatches: number;
  winPercentage: string;
}) => (
  <Card className="flex flex-col w-full sm:w-8/12 lg:w-3/12">
    <CardHeader className="items-center pb-0">
      <CardTitle>Player Stats</CardTitle>
    </CardHeader>
    <CardContent className="flex-1 pb-0">
      <ChartContainer
        config={WIN_LOSS_CHART_CONFIG}
        className="mx-auto aspect-square max-h-[400px] sm:max-h-[300px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="matches"
            nameKey="match"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => (
                <PieChartLabel viewBox={viewBox} totalMatches={totalMatches} />
              )}
            />
            <LabelList
              dataKey="match"
              className="fill-white"
              stroke="none"
              fontSize={12}
              formatter={(value: keyof typeof WIN_LOSS_CHART_CONFIG) => {
                const chartItem = chartData.find(
                  (item) => item.match === value
                );
                const matchesValue = chartItem?.matches || 0;
                const label = WIN_LOSS_CHART_CONFIG[value]?.label || value;
                return `${matchesValue} ${label} `;
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </CardContent>
    <CardFooter className="flex-col gap-2 text-sm">
      <div className="flex items-center gap-2 font-medium leading-none">
        Win Percentage: {winPercentage}%
      </div>
    </CardFooter>
  </Card>
);

// Separate component for the ELO card
const EloCard = ({
  chartData,
  currentElo,
}: {
  chartData: Array<{ match: string; elo: number }>;
  currentElo: number;
}) => (
  <Card>
    <CardHeader className="items-center pb-0 mb-4">
      <CardTitle>ELO Points</CardTitle>
    </CardHeader>
    <CardContent>
      <ChartContainer config={ELO_CHART_CONFIG}>
        <LineChart data={chartData} margin={{ top: 20, left: -40, right: 2 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="match"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 8 }} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="elo"
            type="natural"
            stroke="#36A2EB"
            strokeWidth={1}
            dot={{ fill: "#36A2EB", r: 1 }}
            activeDot={{ r: 2 }}
          />
        </LineChart>
      </ChartContainer>
    </CardContent>
    <CardFooter className="flex-col items-center gap-2 text-sm">
      <div className="flex gap-2 font-medium leading-none">
        Current ELO Points: {currentElo}
      </div>
    </CardFooter>
  </Card>
);

export const PlayerStats = () => {
  const { playerStats, getPlayerStats } = usePlayerStats();

  // Move useMemo before any conditional returns
  const chartData = useMemo(() => {
    if (!playerStats) return null;

    return {
      winLossChartData: [
        { match: "Wins", matches: playerStats.wins, fill: "#36A2EB" },
        { match: "Losses", matches: playerStats.losses, fill: "#FF6384" },
      ],
      eloChartData: playerStats.eloHistory.map((elo, i) => ({
        match: `Match ${i + 1}`,
        elo,
      })),
      currentElo: playerStats.eloHistory[playerStats.eloHistory.length - 1],
      winPercentage: (
        (playerStats.wins * 100) /
        playerStats.totalMatches
      ).toFixed(2),
    };
  }, [playerStats]);

  useEffect(() => {
    getPlayerStats();
  }, []);

  if (!playerStats || !chartData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TopBar>Player Stats</TopBar>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            {playerStats.player.name}
          </h1>
          <img
          src={`../../../../../../../public/${playerStats.player.imageUrl}.jpeg`}
          alt={playerStats.player.name}
          className="w-54 h-54 rounded-full mx-auto mb-6"
          onError={(e) => {
            e.currentTarget.onerror = null; // Prevent infinite loop
            e.currentTarget.src = "https://github.com/shadcn.png"; // Fallback image
          }}
        />
        </div>
      </div>

      <StatsCard
        chartData={chartData.winLossChartData}
        totalMatches={playerStats.totalMatches}
        winPercentage={chartData.winPercentage}
      />

      <div className="w-full max-w-md mt-4">
        <EloCard
          chartData={chartData.eloChartData}
          currentElo={chartData.currentElo}
        />
      </div>
    </>
  );
};
