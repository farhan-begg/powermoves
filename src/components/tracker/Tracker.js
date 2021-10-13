import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,
  } from "recharts";
  import { format, parseISO, subDays } from "date-fns";
import { Card } from "@mui/material";
  
  const data = [];
  for (let num = 30; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      value: 1 + Math.random(),
    });
  }
  
  export default function Tracker() {
    return (
      <ResponsiveContainer  width={800} height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(255, 16, 240)" stopOpacity={0.4} />
              <stop offset="75%" stopColor="rgb(255, 16, 240)" stopOpacity={.01} />
            </linearGradient>
          </defs>
  
          <Area dataKey="value" stroke="rgb(255, 16, 240)" fill="url(#color)" />
  
          <XAxis
            dataKey="date"
            fill="white"
            axisLine={false}
            tickLine={false}
            tickFormatter={(str) => {
              const date = parseISO(str);
              if (date.getDate() % 7 === 0) {
                return format(date, "MMM, d");
              }
              return "";
            }}
          />
  
          <YAxis
            datakey="value"
            axisLine={false}
            tickLine={false}
            tickCount={8}
            tickFormatter={(number) => `$${number.toFixed(2)}`}
          />
  
          <Tooltip content={<CustomTooltip />} />
  
          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
  
  function CustomTooltip({ active, payload, label }) {
    if (active) {
      return (
        <div className="tooltip">
          <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
          <p>${payload[0].value.toFixed(2)} CAD</p>
        </div>
      );
    }
    return null;
  }