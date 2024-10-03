import React from 'react';
import moment from 'moment';
import './CampaignList.css';

function CampaignList({ campaigns }) {
  const today = moment();

  return (
    <div className="campaign-list-container">
      <table className="campaign-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Budget</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign, index) => {
            const isActive = today.isBetween(moment(campaign.startDate), moment(campaign.endDate), null, '[]');
            return (
              <tr key={index}>
                <td>{campaign.name}</td>
                <td>{moment(campaign.startDate).format('YYYY-MM-DD')}</td>
                <td>{moment(campaign.endDate).format('YYYY-MM-DD')}</td>
                <td>
                  <span className={`status-dot ${isActive ? 'active' : 'inactive'}`} />
                  {isActive ? "Active" : "Inactive"}
                </td>
                <td>${campaign.budget}</td>
                <td>{campaign.userId ? `User ${campaign.userId}` : "Unknown user"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CampaignList;
