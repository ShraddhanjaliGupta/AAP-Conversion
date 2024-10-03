import React, { createContext, useState } from 'react';
import moment from 'moment';

// Create the context
export const CampaignContext = createContext();

const campaignsData = [
  { name: "Campaign 1", startDate: "2023-09-01", endDate: "2023-09-30", budget: 5000, userId: 1 },
  { name: "Campaign 2", startDate: "2023-08-15", endDate: "2023-09-15", budget: 3000, userId: 2 },
  { name: "Campaign 3", startDate: "2023-10-01", endDate: "2023-10-20", budget: 7000, userId: 3 },
  { name: "Campaign 4", startDate: "2023-07-01", endDate: "2028-08-01", budget: 1000, userId: null }, // unknown user
];

// Provider component
export const CampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState(campaignsData);
  const [filteredCampaigns, setFilteredCampaigns] = useState(campaignsData);

  // Filter campaigns by name
  const filterByName = (searchTerm) => {
    const filtered = campaignsData.filter(campaign =>
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCampaigns(filtered);
  };

  // Filter campaigns by date range
  const filterByDateRange = (startDate, endDate) => {
    const filtered = campaignsData.filter(campaign => {
      const campaignStart = moment(campaign.startDate);
      const campaignEnd = moment(campaign.endDate);

      return (campaignStart.isBetween(startDate, endDate, null, '[]') ||
        campaignEnd.isBetween(startDate, endDate, null, '[]'));
    });
    setFilteredCampaigns(filtered);
  };

  return (
    <CampaignContext.Provider value={{
      campaigns: filteredCampaigns,
      filterByName,
      filterByDateRange
    }}>
      {children}
    </CampaignContext.Provider>
  );
};
