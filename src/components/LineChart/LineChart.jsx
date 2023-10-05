import { CartesianGrid, LineChart as LChart, Line, Tooltip, XAxis, YAxis } from "recharts";

const LineChart = () => {
    const mspMarks = [
        { id: 1, name: 'Ali Khan', math_mark: 85, physics_mark: 78, se_mark: 90 },
        { id: 2, name: 'Fatima Ahmed', math_mark: 78, physics_mark: 80, se_mark: 85 },
        { id: 3, name: 'Ahmed Hassan', math_mark: 90, physics_mark: 88, se_mark: 92 },
        { id: 4, name: 'Amina Khan', math_mark: 88, physics_mark: 85, se_mark: 90 },
        { id: 5, name: 'Yusuf Ali', math_mark: 92, physics_mark: 89, se_mark: 91 },
        { id: 6, name: 'Zainab Ahmed', math_mark: 80, physics_mark: 75, se_mark: 82 },
        { id: 7, name: 'Mariam Khan', math_mark: 87, physics_mark: 82, se_mark: 88 }
      ]

    return (
        <div className="w-1/3 mx-auto">
            <LChart width={570} height={370} data={mspMarks}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <CartesianGrid />
                <Line dataKey="math_mark" type="monotone" stroke="magenta"></Line>
                <Line dataKey="physics_mark" type="monotone"
                stroke="blue" />
                <Line dataKey="se_mark" type="monotone" stroke="green" />
            </LChart>
        </div>
    );
};

export default LineChart;