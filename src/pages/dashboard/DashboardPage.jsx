import React from 'react'
import './dashboard.css';
import HealthSummaryComponent from '../../components/healthsummary/HealthSummaryComponent';
import WebDomains from '../../components/WebDomains/WebDomains';

const DashboardPage = () => {
  return (
    <div>
    <HealthSummaryComponent/>
      <WebDomains/>
    </div>
  )
}

export default DashboardPage
