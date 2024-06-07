// app/components/RecentActivities.tsx
import React from 'react';
import './RecentActivities.css';

interface Activity {
  title: string;
  date: string;
  description: string;
}

interface RecentActivitiesProps {
  activities: Activity[];
}

const RecentActivities: React.FC<RecentActivitiesProps> = ({ activities }) => {
  return (
    <div className="recent-activities">
      {activities.map((activity, index) => (
        <div key={index} className="activity-card shadow-sm p-3 mb-3 bg-white rounded">
          <h3 className="activity-title">{activity.title}</h3>
          <small className="activity-date text-muted">{activity.date}</small>
          <p className="activity-description">{activity.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecentActivities;
