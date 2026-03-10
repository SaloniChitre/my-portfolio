'use client';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'Python', A: 95 },
  { subject: 'ML/AI', A: 90 },
  { subject: 'SQL/DB', A: 85 },
  { subject: 'AWS/Cloud', A: 80 },
  { subject: 'NLP', A: 88 },
  { subject: 'Data Viz', A: 85 },
];

export default function SkillsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8' }} />
          <Radar name="Skills" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}