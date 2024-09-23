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

  // Array to store chart instances
  let chartInstances: Chart[] = [];

  // Sample data for each chart
  const chartData = [
    {
      type: 'pie',
      labels: ['Banned', 'Late', 'Allergies'],
      data: [15, 20, 65],
      colors: ['#9600ff', '#ff66ff', '#ff66cc'],
    },
    {
      type: 'bar',
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      data: [10, 20, 15, 25, 30],
      colors: ['#4BC0C0', '#FF6384', '#FF9F40', '#FFCD56', '#36A2EB'],
    },
    {
      type: 'bar',
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      data: [50, 75, 100, 125],
      colors: ['#FF9F40', '#4BC0C0', '#36A2EB', '#FF6384'],
    },
    {
      type: 'bar',
      labels: ['New York', 'London', 'Tokyo', 'Sydney'],
      data: [80, 60, 70, 50],
      colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    },
    {
      type: 'bar',
      labels: ['North', 'South', 'East', 'West'],
      data: [20, 35, 25, 15],
      colors: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0'],
    },
  ];

  // Function to create charts dynamically based on chartData
  const createChart = (chartRef: React.RefObject<HTMLCanvasElement>, chartConfig: any): Chart | undefined => {
    if (!chartRef.current) {
      return undefined;
    }

    const chartInstance = new Chart(chartRef.current, {
      type: chartConfig.type, // Chart type (e.g., 'bar' or 'pie')
      data: {
        labels: chartConfig.labels,
        datasets: [
          {
            data: chartConfig.data,
            backgroundColor: chartConfig.colors,
            borderColor: chartConfig.colors.map((color: string) => color),
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: chartConfig.type === 'bar' ? {
          y: {
            beginAtZero: true,
          },
        } : undefined,
      },
    });

    chartInstances.push(chartInstance); // Store the chart instance
    return chartInstance;
  };

  // Initialize charts when the component mounts
  useEffect(() => {
    createChart(chart1Ref, chartData[0]);
    createChart(chart2Ref, chartData[1]);
    createChart(chart3Ref, chartData[2]);
    createChart(chart4Ref, chartData[3]);
    createChart(chart5Ref, chartData[4]);

    // Cleanup function to destroy charts when the component unmounts
    return () => {
      chartInstances.forEach((instance) => instance.destroy()); // Destroy all chart instances
    };
  }, []);

  return (
    <div className="analytics-container">
      <h1 className="title">Analytics Page</h1>
      <p className="text">This is where analytics data will be displayed, including customer, service, staff, and payment analytics.</p>
      
      {/* Row with 3 charts */}
      <div className="chart-row">
        <div className="chart-container">
          <canvas ref={chart1Ref}></canvas> {/* Pie chart */}
        </div>
        <div className="chart-container">
          <canvas ref={chart2Ref}></canvas>
        </div>
        <div className="chart-container">
          <canvas ref={chart3Ref}></canvas>
        </div>
      </div>

      {/* Row with 2 charts */}
      <div className="chart-row">
        <div className="chart-container">
          <canvas ref={chart4Ref}></canvas>
        </div>
        <div className="chart-container">
          <canvas ref={chart5Ref}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
