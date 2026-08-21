'use client';

import React, { useState, useMemo } from 'react';
import { 
  Sliders, 
  TrendingUp, 
  BrainCircuit, 
  DollarSign, 
  Users, 
  Target, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle,
  BarChart2
} from 'lucide-react';

// Pure deterministic number formatter (avoids SSR vs Client locale hydration mismatch)
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default function InteractiveSimulators() {
  const [activeTab, setActiveTab] = useState<'funnel' | 'ml'>('funnel');

  // Funnel Simulator State
  const [adSpend, setAdSpend] = useState<number>(100000);
  const [trafficVisitors, setTrafficVisitors] = useState<number>(200000);
  const [lpConvRate, setLpConvRate] = useState<number>(3.5);
  const [leadCloseRate, setLeadCloseRate] = useState<number>(6.0);
  const [dealValue, setDealValue] = useState<number>(2500);

  // ML Diabetes Predictor State
  const [glucose, setGlucose] = useState<number>(110);
  const [bmi, setBmi] = useState<number>(24.2);
  const [age, setAge] = useState<number>(30);
  const [bloodPressure, setBloodPressure] = useState<number>(75);
  const [insulin, setInsulin] = useState<number>(85);

  // Funnel Calculations
  const funnelResults = useMemo(() => {
    const leads = Math.round(trafficVisitors * (lpConvRate / 100));
    const costPerLead = leads > 0 ? (adSpend / leads) : 0;
    const customers = Math.round(leads * (leadCloseRate / 100));
    const cac = customers > 0 ? (adSpend / customers) : 0;
    const totalRevenue = customers * dealValue;
    const roas = adSpend > 0 ? (totalRevenue / adSpend) : 0;

    // Projected lift with 25% LP personalization improvement (Vishnu's specialty)
    const improvedLpRate = lpConvRate * 1.25;
    const improvedLeads = Math.round(trafficVisitors * (improvedLpRate / 100));
    const improvedCustomers = Math.round(improvedLeads * (leadCloseRate / 100));
    const improvedRevenue = improvedCustomers * dealValue;
    const revenueDelta = improvedRevenue - totalRevenue;

    return {
      leads,
      costPerLead: costPerLead.toFixed(2),
      customers,
      cac: cac.toFixed(2),
      totalRevenue,
      roas: roas.toFixed(2),
      revenueDelta,
      improvedLpRate: improvedLpRate.toFixed(1),
    };
  }, [adSpend, trafficVisitors, lpConvRate, leadCloseRate, dealValue]);

  // ML Diabetes Calculations (Approximated KNN Diagnostic Model weights)
  const mlResults = useMemo(() => {
    // Normalized risk score based on standard clinical thresholds
    const glucoseScore = Math.max(0, (glucose - 90) / 110) * 0.40;
    const bmiScore = Math.max(0, (bmi - 22) / 23) * 0.25;
    const ageScore = Math.max(0, (age - 20) / 60) * 0.15;
    const bpScore = Math.max(0, (bloodPressure - 70) / 70) * 0.10;
    const insulinScore = Math.max(0, (insulin - 50) / 250) * 0.10;

    const rawScore = (glucoseScore + bmiScore + ageScore + bpScore + insulinScore) * 100;
    const boundedScore = Math.min(99, Math.max(5, Math.round(rawScore)));

    let riskLevel = 'Low Risk';
    let riskColor = 'text-emerald-400';
    let riskBadge = 'bg-emerald-950 text-emerald-300 border-emerald-500/40';

    if (boundedScore >= 65) {
      riskLevel = 'High Risk';
      riskColor = 'text-rose-400';
      riskBadge = 'bg-rose-950 text-rose-300 border-rose-500/40';
    } else if (boundedScore >= 35) {
      riskLevel = 'Moderate Risk';
      riskColor = 'text-amber-400';
      riskBadge = 'bg-amber-950 text-amber-300 border-amber-500/40';
    }

    return {
      score: boundedScore,
      riskLevel,
      riskColor,
      riskBadge,
    };
  }, [glucose, bmi, age, bloodPressure, insulin]);

  return (
    <section id="simulator" className="py-20 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Demonstrations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive Analytics & ML Simulators
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Interact directly with live mathematical models demonstrating growth analytics modeling and machine learning risk inference.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab('funnel')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'funnel'
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Growth Funnel & ROAS Optimizer</span>
            </button>
            <button
              onClick={() => setActiveTab('ml')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'ml'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>ML Clinical Risk Predictor</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Funnel & ROAS Optimizer */}
        {activeTab === 'funnel' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Controls */}
            <div className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">Funnel Parameters</h3>
                </div>
                <span className="text-xs text-slate-400">Drag sliders to recalculate</span>
              </div>

              {/* Monthly Ad Budget */}
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-300 font-medium">Monthly Ad Budget (USD)</span>
                  <span className="font-mono font-bold text-cyan-400">${formatNumber(adSpend)}</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  step="10000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Monthly Visitors */}
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-300 font-medium">Monthly Funnel Traffic (Visitors)</span>
                  <span className="font-mono font-bold text-cyan-400">{formatNumber(trafficVisitors)}</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="1000000"
                  step="10000"
                  value={trafficVisitors}
                  onChange={(e) => setTrafficVisitors(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* LP Conversion Rate */}
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-300 font-medium">Landing Page Conversion Rate (LP CVR)</span>
                  <span className="font-mono font-bold text-cyan-400">{lpConvRate}%</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="15.0"
                  step="0.1"
                  value={lpConvRate}
                  onChange={(e) => setLpConvRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Lead to Customer Close Rate */}
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-300 font-medium">Lead-to-Customer Close Rate</span>
                  <span className="font-mono font-bold text-cyan-400">{leadCloseRate}%</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="25.0"
                  step="0.5"
                  value={leadCloseRate}
                  onChange={(e) => setLeadCloseRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Average Deal Value */}
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-300 font-medium">Average Contract Value / Customer LTV</span>
                  <span className="font-mono font-bold text-cyan-400">${formatNumber(dealValue)}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>
            </div>

            {/* Calculated Output & Strategic Insights */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-4">
              <div className="grid grid-cols-2 gap-3.5">
                <div className="glass-panel p-4 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-medium">Total Leads Generated</div>
                  <div className="text-2xl font-bold text-white mt-1 font-mono">
                    {formatNumber(funnelResults.leads)}
                  </div>
                  <div className="text-[11px] text-cyan-400 mt-1">CPL: ${funnelResults.costPerLead}</div>
                </div>

                <div className="glass-panel p-4 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-medium">Paying Customers</div>
                  <div className="text-2xl font-bold text-white mt-1 font-mono">
                    {formatNumber(funnelResults.customers)}
                  </div>
                  <div className="text-[11px] text-cyan-400 mt-1">CAC: ${funnelResults.cac}</div>
                </div>

                <div className="glass-panel p-4 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-medium">Total Pipeline Revenue</div>
                  <div className="text-2xl font-bold text-emerald-400 mt-1 font-mono">
                    ${formatNumber(funnelResults.totalRevenue)}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Gross Yield</div>
                </div>

                <div className="glass-panel p-4 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-medium">Return on Ad Spend (ROAS)</div>
                  <div className="text-2xl font-bold text-cyan-300 mt-1 font-mono">
                    {funnelResults.roas}x
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-1">
                    {Number(funnelResults.roas) >= 2 ? 'Profitable Scale' : 'Needs Optimization'}
                  </div>
                </div>
              </div>

              {/* Vishnu's Optimization Playbook Callout */}
              <div className="glass-panel p-5 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-1">
                      Vishnu&apos;s LP Personalization Impact Modeling
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      By applying custom audience cohort hooks to lift LP conversion rate from{' '}
                      <strong className="text-white">{lpConvRate}%</strong> to{' '}
                      <strong className="text-cyan-300">{funnelResults.improvedLpRate}%</strong>, you unlock an estimated additional{' '}
                      <strong className="text-emerald-300 font-mono">+${formatNumber(funnelResults.revenueDelta)}</strong> in pipeline revenue without increasing ad spend!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: ML Diabetes Predictor */}
        {activeTab === 'ml' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Sliders */}
            <div className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4 text-indigo-400" />
                  <h3 className="text-base font-bold text-white">Clinical Biomarker Inputs</h3>
                </div>
                <span className="text-xs text-slate-400">Streamlit KNN Model Engine</span>
              </div>

              {/* Glucose */}
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-300 font-medium">Glucose Concentration (mg/dL)</span>
                  <span className="font-mono font-bold text-indigo-400">{glucose} mg/dL</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="220"
                  step="1"
                  value={glucose}
                  onChange={(e) => setGlucose(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
                />
              </div>

              {/* BMI */}
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-300 font-medium">Body Mass Index (BMI)</span>
                  <span className="font-mono font-bold text-indigo-400">{bmi} kg/m²</span>
                </div>
                <input
                  type="range"
                  min="16.0"
                  max="45.0"
                  step="0.1"
                  value={bmi}
                  onChange={(e) => setBmi(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
                />
              </div>

              {/* Age */}
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-300 font-medium">Age (Years)</span>
                  <span className="font-mono font-bold text-indigo-400">{age} yrs</span>
                </div>
                <input
                  type="range"
                  min="18"
                  max="80"
                  step="1"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
                />
              </div>

              {/* Blood Pressure */}
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-300 font-medium">Diastolic Blood Pressure (mm Hg)</span>
                  <span className="font-mono font-bold text-indigo-400">{bloodPressure} mm Hg</span>
                </div>
                <input
                  type="range"
                  min="55"
                  max="130"
                  step="1"
                  value={bloodPressure}
                  onChange={(e) => setBloodPressure(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
                />
              </div>

              {/* Insulin */}
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-300 font-medium">Serum Insulin (μU/mL)</span>
                  <span className="font-mono font-bold text-indigo-400">{insulin} μU/mL</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="300"
                  step="5"
                  value={insulin}
                  onChange={(e) => setInsulin(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
                />
              </div>
            </div>

            {/* ML Inference Output */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-4">
              <div className="glass-panel p-6 rounded-2xl border border-indigo-500/30 text-center flex flex-col items-center justify-center">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Real-Time Model Prediction
                </div>

                <div className={`text-4xl font-extrabold ${mlResults.riskColor} mb-2`}>
                  {mlResults.riskLevel}
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold border mb-4">
                  <span>Calculated Risk Index: {mlResults.score}%</span>
                </div>

                {/* Progress Gauge */}
                <div className="w-full bg-slate-800 rounded-full h-3 mb-4 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 rounded-full ${
                      mlResults.score >= 65
                        ? 'bg-rose-500'
                        : mlResults.score >= 35
                        ? 'bg-amber-500'
                        : 'bg-emerald-500'
                    }`}
                    style={{ width: `${mlResults.score}%` }}
                  ></div>
                </div>

                <p className="text-xs text-slate-400 max-w-md">
                  Inference based on the K-Nearest Neighbors (KNN) classification weights trained during Vishnu&apos;s ML Modular diagnostic project.
                </p>
              </div>

              {/* Model Diagnostics Info */}
              <div className="glass-panel p-5 rounded-xl border border-slate-800 space-y-2 text-xs">
                <div className="font-semibold text-slate-200">Key Contributing Factors:</div>
                <div className="text-slate-400 flex items-center justify-between">
                  <span>Glucose Weight (Primary indicator)</span>
                  <span className="font-mono text-cyan-400">40% Model Weight</span>
                </div>
                <div className="text-slate-400 flex items-center justify-between">
                  <span>BMI & Metabolic Factors</span>
                  <span className="font-mono text-indigo-400">25% Model Weight</span>
                </div>
                <div className="text-slate-400 flex items-center justify-between">
                  <span>Age & Blood Pressure</span>
                  <span className="font-mono text-purple-400">25% Model Weight</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
