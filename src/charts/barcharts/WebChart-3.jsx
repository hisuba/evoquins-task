import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJs, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJs.register(
    CategoryScale,LinearScale,BarElement
);

const labels = ["Jan","Feb","Mar","Apr","May","June", "July","Aug","Sep","Oct","Nov","Dec"]
const WebChart3= () => {
    const NewData = {
        labels,
        datasets:[{

data:[10, 0,7,],
backgroundColor: [
    ' green',
    
  ],
  borderColor: [
    'red'
  ],
  borderWidth: 10,
  height:100,
  borderRadius:10,

  
}]
        
    }
  return (
    <div style = {{width:'200px', height:"200px", margin:"30px",}}>
      <Bar Newdata={NewData}/>
    </div>
  )
}

export default WebChart3;
