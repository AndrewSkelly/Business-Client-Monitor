import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Analytics.scss';

const Analytics: React.FC = () => {
  // Refs for each chart
  const chart1Ref = useRef<HTMLCanvasElement | null>(null);
  const chart2Ref = useRef<HTMLCanvasElement | null>(null);
  const chart3Ref = useRef<HTMLCanvasElement | null>(null);
  const chart4Ref = useRef<HTMLCanvasElement | null>(null);
  const chart5Ref = useRef<HTMLCanvasElement | null>(null);

  // Variables to store chart instances (allowing undefined initially)
  let chart1Instance: Chart | undefined;
  let chart2Instance: Chart | undefined;
  let chart3Instance: Chart | undefined;
  let chart4Instance: Chart | undefined;
  let chart5Instance: Chart | undefined;

  // Function to create a sample chart
  const createChart = (chartRef: React.RefObject<HTMLCanvasElement>, chartId: string): Chart | undefined => {
    if (!chartRef.current) {
      console.error(`Canvas ref for ${chartId} is null!`);
      return undefined;
    }

    try {
      return new Chart(chartRef.current, {
        type: 'bar', // Bar chart type
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: 'Sample Data',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    } catch (error) {
      console.error(`Error creating chart for ${chartId}:`, error);
      return undefined;
    }
  };

  // Initialize charts when component mounts
  useEffect(() => {
    console.log('Initializing charts...');
    chart1Instance = createChart(chart1Ref, 'chart1');
    chart2Instance = createChart(chart2Ref, 'chart2');
    chart3Instance = createChart(chart3Ref, 'chart3');
    chart4Instance = createChart(chart4Ref, 'chart4');
    chart5Instance = createChart(chart5Ref, 'chart5');

    // Cleanup function to destroy charts when the component unmounts
    return () => {
      if (chart1Instance) chart1Instance.destroy();
      if (chart2Instance) chart2Instance.destroy();
      if (chart3Instance) chart3Instance.destroy();
      if (chart4Instance) chart4Instance.destroy();
      if (chart5Instance) chart5Instance.destroy();
    };
  }, []);

  return (
    <div className='clientlog'>
      <h1 className='title'>Analytics Page</h1>
      <p className='text'>This is where analytics data will be displayed including customer, service, staff and payment analytics</p>
      <p className='text'>This is a work in progress!</p>
      
      {/* Row with 3 charts */}
      <div className='chart-row'>
        <div className='chart-container'>
          <canvas ref={chart1Ref}></canvas>
        </div>
        <div className='chart-container'>
          <canvas ref={chart2Ref}></canvas>
        </div>
        <div className='chart-container'>
          <canvas ref={chart3Ref}></canvas>
        </div>
      </div>

      {/* Row with 2 charts */}
      <div className='chart-row'>
        <div className='chart-container'>
          <canvas ref={chart4Ref}></canvas>
        </div>
        <div className='chart-container'>
          <canvas ref={chart5Ref}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
