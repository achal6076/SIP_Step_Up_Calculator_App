import React, { useEffect, useState } from "react";
import SliderType from "./SliderType";
import Graph from "./Graph";
import axios from "axios";

function Calculator() {
  const [MonthlyInvestment, setMonthlyInvestment] = useState(10000);
  function changeMonthlyInvestment(val) {
    setMonthlyInvestment(val);
  }
  const [InvestmentPeriod, setInvestmentPeriod] = useState(5);
  function changeInvestmentPeriod(val) {
    setInvestmentPeriod(val);
  }
  const [RateOfReturn, setRateOfReturn] = useState(6.5);
  function changeRateOfReturn(val) {
    setRateOfReturn(val);
  }
  const [YearlyIncrement, setYearlyIncrement] = useState(10);
  function changeYearlyIncrement(val) {
    setYearlyIncrement(val);
  }
  
  
  const [result, setResult] = useState();
  // const [status, setStatus] = useState(-1);
  
  useEffect(()=>{
    axios.get('/getResult', 
                   { 
                    params: {
                    MonthlyInvestment : MonthlyInvestment,
                    InvestmentPeriod: InvestmentPeriod,
                    RateOfReturn: RateOfReturn,
                    YearlyIncrement: YearlyIncrement
                    } 
                   
         }
        ).then((res)=>{
        setResult(res.data);
      });

  },[]) 
     
  // console.log("Result:",result);
  // console.log("Status:",status)
     
     
  return (
    <>
      <div className="calculator">
        <div className="calculatorText">
          <h2> SIP Step Up Calculator</h2>

          <p>
            It tells you how much wealth you can create by making monthly
            investment
          </p>
        </div>
        <div className="container">
          <SliderType
            MonthlyInvestment={MonthlyInvestment}
            changeMonthlyInvestment={changeMonthlyInvestment}
            InvestmentPeriod={InvestmentPeriod}
            changeInvestmentPeriod={changeInvestmentPeriod}
            RateOfReturn={RateOfReturn}
            changeRateOfReturn={changeRateOfReturn}
            YearlyIncrement={YearlyIncrement}
            changeYearlyIncrement={changeYearlyIncrement}
          />
        <Graph data={result}/>
        </div>
      </div>
    </>
  );
}

export default Calculator;
