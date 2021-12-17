import React from "react";
import {Line} from 'react-chartjs-2';


const LineChart = () => {
    return   <div>
        <Line
            data={{
                labels: ['0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00','0:00'],
                datasets: [{
                    label: 'Temperature',
                    data: [22.4, 22.1, 21.8, 21.5, 22.0, 22.1, 22.4, 22.6, 22.8, 23.1, 23.0, 23.1, 22.8, 22.9, 23.1, 22.8, 23.2, 23.4, 23.6, 23.5, 23.7, 23.9, 23.5, 23.0],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            }}
           height={400}
           width={600}
            options={{
                maintainAspectRatio: false,
            }}
        />
    </div> 
}

export default LineChart;