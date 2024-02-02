// import CardLineChart from "./CardlineChart";
import CardPageVisits from "components/Cards/CardPageVisits";
import CardSocialTraffic from "components/Cards/CardSocialTraffic";
// import CardBarChart from "components/Cards/CardBarChart.jsx";
import React, { useState } from "react";
import Chart from "react-apexcharts";

// components

export default function Dashboard() {
  const [state, setState]= useState({
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 80, 49, 60, 70, 91]
        },
        {
          name: "series-1",
          data: [90, 60, 125, 50, 109, 90, 70, 71]
        }
      ]
  })
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          {/* <CardLineChart /> */}
          <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="500"
              setState={setState}
            />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          {/* <CardBarChart /> */}
          <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
              setState={setState}
            />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}