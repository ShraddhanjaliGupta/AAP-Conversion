import React, { useContext } from 'react';
import { CampaignContext } from './context/CampaignContext';
import CampaignList from './components/CampaignList';
import SearchForm from './components/SearchForm';
import DateRange from './components/DateRange';

function App() {
  const { campaigns, filterByName, filterByDateRange } = useContext(CampaignContext);

  return (
    <div>
      <h1>Campaign List</h1>
      <SearchForm onSearch={filterByName} />
      <DateRange onFilter={filterByDateRange} />
      <CampaignList campaigns={campaigns} />
    </div>
  );
}

export default App;
