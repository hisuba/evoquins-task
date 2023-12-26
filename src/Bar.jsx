import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJs, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJs.register(
    CategoryScale,LinearScale,BarElement
);

const labels = ["MON","TUE","WED","THI","FRI","SAT", "SUN"]
const BarChart= () => {
    const Bardata = {
        labels,
        datasets:[{

data:[4, 0,7,],
backgroundColor: [
    'blue',
    
  ],
  borderColor: [
    'white'
  ],
  borderWidth: 5,
  height:100,
  borderRadius:10,

  
}]
        
    }
  return (
    <div style = {{width:'200px', height:"200px", margin:"30px",}}>
      <Bar data={Bardata}/>
    </div>
  )
}

export default BarChart;
