'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Loader2 } from 'lucide-react';

const formatCurrency = (value: number, toFixed = 0) => {
    if (isNaN(value) || !isFinite(value)) return 'Rs 0';
    if (value >= 10000000) {
      return `Rs ${(value / 10000000).toFixed(2)} Cr`;
    }
    if (value >= 100000) {
      return `Rs ${(value / 100000).toFixed(2)} Lac`;
    }
    return `Rs ${value.toLocaleString('en-IN', { maximumFractionDigits: toFixed })}`;
  };

const CustomTooltip = ({ active, payload, label, chartConfig }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-background border rounded-md shadow-lg">
          <p className="label font-bold">{`Year: ${label}`}</p>
          {payload.map((pld: any) => (
            <div key={pld.dataKey} style={{ color: pld.color }} className="flex justify-between gap-4">
              <span>{pld.name}:</span>
              <span className="font-bold">{formatCurrency(pld.value)}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };


function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [rateOfReturn, setRateOfReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const { chartData, totalInvested, wealthGain, expectedAmount } =
    useMemo(() => {
      const i = rateOfReturn / 100 / 12;
      const n = timePeriod * 12;
      const P = monthlyInvestment;

      const expectedAmount = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
      const totalInvested = P * n;
      const wealthGain = expectedAmount - totalInvested;

      const data = Array.from({ length: timePeriod + 1 }, (_, year) => {
        const currentN = year * 12;
        const futureValue = currentN === 0 ? 0 : P * ((Math.pow(1 + i, currentN) - 1) / i) * (1 + i);
        const invested = P * currentN;
        return {
          year,
          'Expected Amount': futureValue,
          'Total Invested': invested,
        };
      });

      return {
        chartData: data,
        totalInvested,
        wealthGain,
        expectedAmount,
      };
    }, [monthlyInvestment, rateOfReturn, timePeriod]);
    
  const chartConfig = {
    'Expected Amount': {
      label: 'Expected Amount',
      color: 'hsl(var(--chart-2))',
    },
    'Total Invested': {
      label: 'Total Invested',
      color: 'hsl(var(--chart-1))',
    },
  };

  return (
    <Card className="shadow-lg">
      <CardContent className="p-6 md:p-8">
        <h3 className="text-2xl font-bold text-center mb-8">SIP Calculator</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8">
            <div>
              <Label
                htmlFor="monthly-investment"
                className="flex justify-between items-center"
              >
                <span>Monthly SIP Amount</span>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    Rs
                  </span>
                  <Input
                    id="monthly-investment"
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) =>
                      setMonthlyInvestment(Number(e.target.value))
                    }
                    className="w-32 pl-8"
                    min={500}
                    max={1000000}
                  />
                </div>
              </Label>
              <Slider
                value={[monthlyInvestment]}
                onValueChange={(value) => setMonthlyInvestment(value[0])}
                min={500}
                max={1000000}
                step={500}
                className="mt-2"
              />
              <p className="text-xs text-muted-foreground text-right mt-1">
                (Rs 500 to Rs 10 Lac)
              </p>
            </div>

            <div>
              <Label
                htmlFor="rate-of-return"
                className="flex justify-between items-center"
              >
                <span>Expected Rate of Returns (% PA)</span>
                <div className="relative">
                  <Input
                    id="rate-of-return"
                    type="number"
                    value={rateOfReturn}
                    onChange={(e) => setRateOfReturn(Number(e.target.value))}
                    className="w-24 pr-6"
                    min={1}
                    max={30}
                  />
                   <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    %
                  </span>
                </div>
              </Label>
              <Slider
                value={[rateOfReturn]}
                onValueChange={(value) => setRateOfReturn(value[0])}
                min={1}
                max={30}
                step={0.5}
                className="mt-2"
              />
               <p className="text-xs text-muted-foreground text-right mt-1">
                (1 to 30%)
              </p>
            </div>

            <div>
              <Label
                htmlFor="time-period"
                className="flex justify-between items-center"
              >
                <span>Investment Period (Years)</span>
                <div className="relative">
                  <Input
                    id="time-period"
                    type="number"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="w-24 pr-8"
                    min={1}
                    max={30}
                  />
                   <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    Yr
                  </span>
                </div>
              </Label>
              <Slider
                value={[timePeriod]}
                onValueChange={(value) => setTimePeriod(value[0])}
                min={1}
                max={30}
                step={1}
                className="mt-2"
              />
               <p className="text-xs text-muted-foreground text-right mt-1">
                (1 to 30 Yrs)
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-3 bg-primary text-primary-foreground rounded-lg p-4 text-center mb-6">
              <div>
                <p className="text-sm opacity-80">Total Invested</p>
                <p className="font-bold text-lg md:text-xl">
                  {formatCurrency(totalInvested)}
                </p>
              </div>
              <div>
                <p className="text-sm opacity-80">Wealth Gain</p>
                <p className="font-bold text-lg md:text-xl">
                  {formatCurrency(wealthGain)}
                </p>
              </div>
              <div>
                <p className="text-sm opacity-80">Expected Amount</p>
                <p className="font-bold text-lg md:text-xl">
                  {formatCurrency(expectedAmount)}
                </p>
              </div>
            </div>
            <div className="flex-grow">
              <ChartContainer config={chartConfig} className="w-full h-[300px]">
                <ResponsiveContainer>
                  <LineChart data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="year"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => `${value}Y`}
                    />
                     <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => formatCurrency(Number(value))}
                        width={80}
                      />
                    <ChartTooltip content={<CustomTooltip chartConfig={chartConfig} />} />
                    <Line
                      dataKey="Total Invested"
                      type="monotone"
                      stroke={chartConfig['Total Invested'].color}
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      dataKey="Expected Amount"
                      type="monotone"
                      stroke={chartConfig['Expected Amount'].color}
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function LumpsumCalculator() {
    const [lumpSumAmount, setLumpSumAmount] = useState(100000);
    const [rateOfReturn, setRateOfReturn] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);
  
    const { chartData, totalInvested, wealthGain, expectedAmount } = useMemo(() => {
      const P = lumpSumAmount;
      const r = rateOfReturn / 100;
      const t = timePeriod;
  
      const expectedAmount = P * Math.pow(1 + r, t);
      const totalInvested = P;
      const wealthGain = expectedAmount - totalInvested;
  
      const data = Array.from({ length: t + 1 }, (_, year) => {
        const futureValue = P * Math.pow(1 + r, year);
        return {
          year,
          'Expected Amount': futureValue,
          'Total Invested': P,
        };
      });
  
      return { chartData: data, totalInvested, wealthGain, expectedAmount };
    }, [lumpSumAmount, rateOfReturn, timePeriod]);
  
    const chartConfig = {
      'Expected Amount': { label: 'Expected Amount', color: 'hsl(var(--chart-2))' },
      'Total Invested': { label: 'Total Invested', color: 'hsl(var(--chart-1))' },
    };
  
    return (
      <Card className="shadow-lg">
        <CardContent className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Lumpsum Calculator</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <div>
                <Label htmlFor="lumpsum-amount" className="flex justify-between items-center">
                  <span>Lumpsum Amount</span>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">Rs</span>
                    <Input id="lumpsum-amount" type="number" value={lumpSumAmount} onChange={(e) => setLumpSumAmount(Number(e.target.value))} className="w-32 pl-8" min={1000} max={50000000} />
                  </div>
                </Label>
                <Slider value={[lumpSumAmount]} onValueChange={(v) => setLumpSumAmount(v[0])} min={1000} max={50000000} step={1000} className="mt-2" />
                <p className="text-xs text-muted-foreground text-right mt-1">(Rs 1,000 to Rs 5 Cr)</p>
              </div>
              <div>
                <Label htmlFor="rate-of-return-lumpsum" className="flex justify-between items-center">
                  <span>Expected Rate of Returns (% PA)</span>
                  <div className="relative">
                    <Input id="rate-of-return-lumpsum" type="number" value={rateOfReturn} onChange={(e) => setRateOfReturn(Number(e.target.value))} className="w-24 pr-6" min={1} max={30}/>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                  </div>
                </Label>
                <Slider value={[rateOfReturn]} onValueChange={(v) => setRateOfReturn(v[0])} min={1} max={30} step={0.5} className="mt-2" />
                <p className="text-xs text-muted-foreground text-right mt-1">(1 to 30%)</p>
              </div>
              <div>
                <Label htmlFor="time-period-lumpsum" className="flex justify-between items-center">
                  <span>Investment Period (Years)</span>
                  <div className="relative">
                    <Input id="time-period-lumpsum" type="number" value={timePeriod} onChange={(e) => setTimePeriod(Number(e.target.value))} className="w-24 pr-8" min={1} max={30} />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">Yr</span>
                  </div>
                </Label>
                <Slider value={[timePeriod]} onValueChange={(v) => setTimePeriod(v[0])} min={1} max={30} step={1} className="mt-2" />
                <p className="text-xs text-muted-foreground text-right mt-1">(1 to 30 Yrs)</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="grid grid-cols-3 bg-primary text-primary-foreground rounded-lg p-4 text-center mb-6">
                <div>
                  <p className="text-sm opacity-80">Total Invested</p>
                  <p className="font-bold text-lg md:text-xl">{formatCurrency(totalInvested)}</p>
                </div>
                <div>
                  <p className="text-sm opacity-80">Wealth Gain</p>
                  <p className="font-bold text-lg md:text-xl">{formatCurrency(wealthGain)}</p>
                </div>
                <div>
                  <p className="text-sm opacity-80">Expected Amount</p>
                  <p className="font-bold text-lg md:text-xl">{formatCurrency(expectedAmount)}</p>
                </div>
              </div>
              <div className="flex-grow">
                <ChartContainer config={chartConfig} className="w-full h-[300px]">
                  <ResponsiveContainer>
                    <LineChart data={chartData}>
                      <CartesianGrid vertical={false} />
                      <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(v) => `${v}Y`} />
                      <YAxis tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(v) => formatCurrency(Number(v))} width={80} />
                      <ChartTooltip content={<CustomTooltip chartConfig={chartConfig} />} />
                      <Line dataKey="Total Invested" type="monotone" stroke={chartConfig['Total Invested'].color} strokeWidth={2} dot={false} />
                      <Line dataKey="Expected Amount" type="monotone" stroke={chartConfig['Expected Amount'].color} strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  function SIPGoalCalculator() {
    const [targetAmount, setTargetAmount] = useState(10000000);
    const [rateOfReturn, setRateOfReturn] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);
  
    const monthlyInvestment = useMemo(() => {
      const i = rateOfReturn / 100 / 12;
      const n = timePeriod * 12;
      const F = targetAmount;
  
      if (i === 0) return F / n;
      const monthlySIP = (F * i) / ((Math.pow(1 + i, n) - 1) * (1 + i));
      return monthlySIP > 0 ? monthlySIP : 0;
    }, [targetAmount, rateOfReturn, timePeriod]);
  
    return (
      <Card className="shadow-lg">
        <CardContent className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-center mb-8">SIP Goal Calculator</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <div>
                <Label htmlFor="target-amount" className="flex justify-between items-center">
                  <span>Target Amount</span>
                  <div className="relative">
                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">Rs</span>
                    <Input id="target-amount" type="number" value={targetAmount} onChange={(e) => setTargetAmount(Number(e.target.value))} className="w-32 pl-8" min={10000} max={100000000}/>
                  </div>
                </Label>
                <Slider value={[targetAmount]} onValueChange={(v) => setTargetAmount(v[0])} min={10000} max={100000000} step={10000} className="mt-2" />
                 <p className="text-xs text-muted-foreground text-right mt-1">(Rs 10,000 to Rs 10 Cr)</p>
              </div>
              <div>
                <Label htmlFor="rate-of-return-goal" className="flex justify-between items-center">
                  <span>Expected Rate of Returns (% PA)</span>
                  <div className="relative">
                    <Input id="rate-of-return-goal" type="number" value={rateOfReturn} onChange={(e) => setRateOfReturn(Number(e.target.value))} className="w-24 pr-6" min={1} max={30} />
                     <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                  </div>
                </Label>
                <Slider value={[rateOfReturn]} onValueChange={(v) => setRateOfReturn(v[0])} min={1} max={30} step={0.5} className="mt-2" />
                 <p className="text-xs text-muted-foreground text-right mt-1">(1 to 30%)</p>
              </div>
              <div>
                <Label htmlFor="time-period-goal" className="flex justify-between items-center">
                  <span>Investment Period (Years)</span>
                  <div className="relative">
                    <Input id="time-period-goal" type="number" value={timePeriod} onChange={(e) => setTimePeriod(Number(e.target.value))} className="w-24 pr-8" min={1} max={30} />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">Yr</span>
                  </div>
                </Label>
                <Slider value={[timePeriod]} onValueChange={(v) => setTimePeriod(v[0])} min={1} max={30} step={1} className="mt-2" />
                <p className="text-xs text-muted-foreground text-right mt-1">(1 to 30 Yrs)</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-muted p-8 rounded-lg">
                <p className="text-lg text-muted-foreground">To reach {formatCurrency(targetAmount)}, you need to invest</p>
                <p className="text-4xl lg:text-5xl font-extrabold text-primary my-4">{formatCurrency(monthlyInvestment, 0)}</p>
                <p className="text-lg text-muted-foreground">per month.</p>
                <div className="mt-6 text-center">
                    <p className="text-base text-muted-foreground">Total Invested: <span className="font-bold text-foreground">{formatCurrency(monthlyInvestment * timePeriod * 12)}</span></p>
                    <p className="text-base text-muted-foreground">Wealth Gained: <span className="font-bold text-foreground">{formatCurrency(targetAmount - (monthlyInvestment * timePeriod * 12))}</span></p>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  function FDCalculator() {
    const [principal, setPrincipal] = useState(100000);
    const [rate, setRate] = useState(7);
    const [years, setYears] = useState(5);
  
    const { maturityValue, interestEarned } = useMemo(() => {
      const P = principal;
      const r = rate / 100;
      const t = years;
      // Assuming quarterly compounding for FDs
      const n = 4;
      const maturityValue = P * Math.pow(1 + r / n, n * t);
      const interestEarned = maturityValue - P;
      return { maturityValue, interestEarned };
    }, [principal, rate, years]);
  
    const pieData = [
      { name: 'Principal Amount', value: principal },
      { name: 'Interest Earned', value: interestEarned },
    ];
    const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))'];

    const chartConfig = {
      'Principal Amount': { label: 'Principal', color: COLORS[0] },
      'Interest Earned': { label: 'Interest', color: COLORS[1] },
    };
  
    return (
      <Card className="shadow-lg">
        <CardContent className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Fixed Deposit (FD) Calculator</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <div>
                <Label htmlFor="principal-fd" className="flex justify-between items-center">
                  <span>Investment Amount</span>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">Rs</span>
                    <Input id="principal-fd" type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="w-32 pl-8" />
                  </div>
                </Label>
                <Slider value={[principal]} onValueChange={(v) => setPrincipal(v[0])} min={5000} max={10000000} step={5000} className="mt-2" />
                <p className="text-xs text-muted-foreground text-right mt-1">(Rs 5,000 to Rs 1 Cr)</p>
              </div>
              <div>
                <Label htmlFor="rate-fd" className="flex justify-between items-center">
                  <span>Interest Rate (% PA)</span>
                  <div className="relative">
                    <Input id="rate-fd" type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-24 pr-6" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                  </div>
                </Label>
                <Slider value={[rate]} onValueChange={(v) => setRate(v[0])} min={1} max={15} step={0.1} className="mt-2" />
                <p className="text-xs text-muted-foreground text-right mt-1">(1 to 15%)</p>
              </div>
              <div>
                <Label htmlFor="years-fd" className="flex justify-between items-center">
                  <span>Tenure (Years)</span>
                  <div className="relative">
                    <Input id="years-fd" type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-24 pr-8" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">Yr</span>
                  </div>
                </Label>
                <Slider value={[years]} onValueChange={(v) => setYears(v[0])} min={1} max={10} step={1} className="mt-2" />
                <p className="text-xs text-muted-foreground text-right mt-1">(1 to 10 Yrs)</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-2 bg-primary text-primary-foreground rounded-lg p-4 text-center mb-6 w-full">
                    <div>
                        <p className="text-sm opacity-80">Interest Earned</p>
                        <p className="font-bold text-lg md:text-xl">{formatCurrency(interestEarned)}</p>
                    </div>
                    <div>
                        <p className="text-sm opacity-80">Maturity Value</p>
                        <p className="font-bold text-lg md:text-xl">{formatCurrency(maturityValue)}</p>
                    </div>
                </div>
                <div className="w-full h-[250px]">
                  <ChartContainer config={chartConfig} className="w-full h-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={pieData} cx="50%" cy="50%" labelLine={false} outerRadius={100} dataKey="value" nameKey="name" >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                             <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent 
                                    indicator="dot" 
                                    formatter={(value, name) => (
                                        <div className="flex w-full items-center justify-between">
                                            <span className="text-muted-foreground">{name}:</span>
                                            <span className="font-bold">{formatCurrency(value as number)}</span>
                                        </div>
                                    )} 
                                />} 
                             />
                        </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                 <div className="flex justify-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[0]}}></div>
                        <span>Principal</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[1]}}></div>
                        <span>Interest</span>
                    </div>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  function RDCalculator() {
    const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
    const [rate, setRate] = useState(7);
    const [months, setMonths] = useState(60);
  
    const { maturityValue, totalDeposited, interestEarned } = useMemo(() => {
      const P = monthlyDeposit;
      const r = rate / 100;
      const n = months;
      // Assuming quarterly compounding for RDs
      const i = r / 4;
      const numQuarters = n / 3;
      const maturityValue = P * n + P * n * (n+1) * r / 24;

      const totalDeposited = P * n;
      const interestEarned = maturityValue - totalDeposited;
      return { maturityValue: isNaN(maturityValue) ? 0 : maturityValue, totalDeposited, interestEarned: isNaN(interestEarned) ? 0 : interestEarned };
    }, [monthlyDeposit, rate, months]);
  
    return (
      <Card className="shadow-lg">
        <CardContent className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Recurring Deposit (RD) Calculator</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <div>
                <Label htmlFor="monthly-deposit-rd" className="flex justify-between items-center">
                  <span>Monthly Deposit</span>
                   <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">Rs</span>
                    <Input id="monthly-deposit-rd" type="number" value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(Number(e.target.value))} className="w-32 pl-8" />
                  </div>
                </Label>
                <Slider value={[monthlyDeposit]} onValueChange={(v) => setMonthlyDeposit(v[0])} min={500} max={100000} step={500} className="mt-2" />
                 <p className="text-xs text-muted-foreground text-right mt-1">(Rs 500 to Rs 1 Lac)</p>
              </div>
              <div>
                <Label htmlFor="rate-rd" className="flex justify-between items-center">
                  <span>Interest Rate (% PA)</span>
                  <div className="relative">
                     <Input id="rate-rd" type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-24 pr-6" />
                     <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                  </div>
                </Label>
                <Slider value={[rate]} onValueChange={(v) => setRate(v[0])} min={1} max={15} step={0.1} className="mt-2" />
                 <p className="text-xs text-muted-foreground text-right mt-1">(1% to 15%)</p>
              </div>
              <div>
                <Label htmlFor="months-rd" className="flex justify-between items-center">
                  <span>Tenure (Months)</span>
                  <div className="relative">
                    <Input id="months-rd" type="number" value={months} onChange={(e) => setMonths(Number(e.target.value))} className="w-24 pr-10" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">Mo</span>
                  </div>
                </Label>
                <Slider value={[months]} onValueChange={(v) => setMonths(v[0])} min={6} max={120} step={1} className="mt-2" />
                <p className="text-xs text-muted-foreground text-right mt-1">(6 to 120 Months)</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-muted rounded-lg p-8">
                <p className="text-lg text-muted-foreground mb-4">On maturity, you get</p>
                <p className="text-4xl lg:text-5xl font-extrabold text-primary">{formatCurrency(maturityValue)}</p>
                <div className="mt-6 text-center w-full space-y-2">
                    <div className="flex justify-between text-base">
                        <span className="text-muted-foreground">Total Deposited:</span>
                        <span className="font-bold text-foreground">{formatCurrency(totalDeposited)}</span>
                    </div>
                    <div className="flex justify-between text-base">
                        <span className="text-muted-foreground">Interest Earned:</span>
                        <span className="font-bold text-foreground">{formatCurrency(interestEarned)}</span>
                    </div>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  function LoanEMICalculator() {
    const [loanAmount, setLoanAmount] = useState(1000000);
    const [interestRate, setInterestRate] = useState(9);
    const [loanTenure, setLoanTenure] = useState(5);
  
    const { emi, totalPayable, totalInterest } = useMemo(() => {
      const P = loanAmount;
      const R = interestRate / 12 / 100;
      const N = loanTenure * 12;
      if (R === 0) return { emi: P / N, totalPayable: P, totalInterest: 0 };
      const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      const totalPayable = emi * N;
      const totalInterest = totalPayable - P;
      return { emi, totalPayable, totalInterest };
    }, [loanAmount, interestRate, loanTenure]);
  
    const pieData = [
      { name: 'Principal Amount', value: loanAmount },
      { name: 'Total Interest', value: totalInterest },
    ];
    const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))'];

    const chartConfig = {
      'Principal Amount': { label: 'Principal', color: COLORS[0] },
      'Total Interest': { label: 'Interest', color: COLORS[1] },
    };
  
    return (
      <Card className="shadow-lg">
        <CardContent className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Loan EMI Calculator</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <div>
                <Label htmlFor="loan-amount-emi" className="flex justify-between items-center">
                  <span>Loan Amount</span>
                   <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">Rs</span>
                    <Input id="loan-amount-emi" type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-32 pl-8" />
                  </div>
                </Label>
                <Slider value={[loanAmount]} onValueChange={(v) => setLoanAmount(v[0])} min={50000} max={20000000} step={10000} className="mt-2" />
                <p className="text-xs text-muted-foreground text-right mt-1">(Rs 50,000 to Rs 2 Cr)</p>
              </div>
              <div>
                <Label htmlFor="interest-rate-emi" className="flex justify-between items-center">
                  <span>Interest Rate (% PA)</span>
                  <div className="relative">
                     <Input id="interest-rate-emi" type="number" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-24 pr-6" />
                     <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                  </div>
                </Label>
                <Slider value={[interestRate]} onValueChange={(v) => setInterestRate(v[0])} min={5} max={20} step={0.1} className="mt-2" />
                <p className="text-xs text-muted-foreground text-right mt-1">(5% to 20%)</p>
              </div>
              <div>
                <Label htmlFor="loan-tenure-emi" className="flex justify-between items-center">
                  <span>Loan Tenure (Years)</span>
                  <div className="relative">
                    <Input id="loan-tenure-emi" type="number" value={loanTenure} onChange={(e) => setLoanTenure(Number(e.target.value))} className="w-24 pr-8" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">Yr</span>
                  </div>
                </Label>
                <Slider value={[loanTenure]} onValueChange={(v) => setLoanTenure(v[0])} min={1} max={30} step={1} className="mt-2" />
                <p className="text-xs text-muted-foreground text-right mt-1">(1 to 30 Yrs)</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="text-center mb-6">
                    <p className="text-lg text-muted-foreground">Monthly EMI</p>
                    <p className="text-4xl font-extrabold text-primary">{formatCurrency(emi)}</p>
                </div>
                <div className="grid grid-cols-2 border-t pt-4 w-full text-center">
                     <div>
                        <p className="text-sm text-muted-foreground">Total Interest</p>
                        <p className="font-bold text-lg">{formatCurrency(totalInterest)}</p>
                     </div>
                     <div>
                        <p className="text-sm text-muted-foreground">Total Payable</p>
                        <p className="font-bold text-lg">{formatCurrency(totalPayable)}</p>
                     </div>
                </div>

                <div className="w-full h-[200px] mt-4">
                  <ChartContainer config={chartConfig} className='w-full h-full'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={pieData} cx="50%" cy="50%" labelLine={false} innerRadius={60} outerRadius={80} dataKey="value" nameKey="name" paddingAngle={5}>
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                             <ChartTooltip 
                                cursor={false} 
                                content={<ChartTooltipContent 
                                    indicator="dot" 
                                    formatter={(value, name) => (
                                        <div className="flex w-full items-center justify-between">
                                            <span className="text-muted-foreground">{name}:</span>
                                            <span className="font-bold">{formatCurrency(value as number)}</span>
                                        </div>
                                    )} 
                                />} 
                              />
                        </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                 <div className="flex justify-center gap-4 mt-2">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[0]}}></div>
                        <span>Principal</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[1]}}></div>
                        <span>Interest</span>
                    </div>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

const LoadingComponent = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <Loader2 className="h-12 w-12 animate-spin text-primary" />
  </div>
);

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState('sip');
  const [isLoading, setIsLoading] = useState(false);
  const [previousTab, setPreviousTab] = useState('sip');

  const handleTabChange = (newTab: string) => {
    if (newTab !== activeTab) {
      setPreviousTab(activeTab);
      setIsLoading(true);
      setActiveTab(newTab);
    }
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Simulate network delay
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const renderContent = () => {
    if (isLoading) {
      return <LoadingComponent />;
    }
    switch (activeTab) {
      case 'sip':
        return <SIPCalculator />;
      case 'lumpsum':
        return <LumpsumCalculator />;
      case 'sip-goal':
        return <SIPGoalCalculator />;
      case 'fd':
        return <FDCalculator />;
      case 'rd':
        return <RDCalculator />;
      case 'loan-emi':
        return <LoanEMICalculator />;
      default:
        return <SIPCalculator />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto">
        <div className="text-left mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Financial Calculators
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">Plan your investments, loans, and financial goals with our powerful calculators.</p>
        </div>
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="overflow-x-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-4 bg-transparent p-0 border-b min-w-[700px] md:min-w-full">
              <TabsTrigger value="sip" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent">SIP</TabsTrigger>
              <TabsTrigger value="lumpsum" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent">
                Lumpsum
              </TabsTrigger>
              <TabsTrigger value="sip-goal" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent">
                SIP Goal
              </TabsTrigger>
              <TabsTrigger value="fd" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent">
                FD
              </TabsTrigger>
              <TabsTrigger value="rd" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent">
                RD
              </TabsTrigger>
              <TabsTrigger value="loan-emi" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent">
                Loan EMI
              </TabsTrigger>
            </TabsList>
          </div>
           <TabsContent value={activeTab} className="min-h-[50vh]">
            {renderContent()}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
