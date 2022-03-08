import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

interface BarChartProps {
  key: string;
  points: { [key: string]: number };
  colors: { [key: string]: string };
}
export const BarChart: React.FC<BarChartProps> = (props) => {
  const { key, points, colors } = props;

  const Wrapper = styled.div`
    height: 400px;
    width: 400px;
  `;

  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          width={500}
          height={300}
          data={[points]}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={key} />
          <YAxis />
          <Tooltip />
          <Legend />

          {Object.keys(points).map((point, i) => (
            <Bar key={i} dataKey={point} fill={colors[point]} />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};
