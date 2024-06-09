import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';

import './style.css';

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
            <h2 className='mt-4 pb-2 border-bottom'>Recent Activities</h2>
            <div className="rounded">
                <div className="container">
                    <div className="row pb-5 g-3">
                        {activities.map((activity, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                                <div className="activity--card border shadow p-3 mb-5 bg-white rounded d-flex flex-row align-items-start">
                                    <div className="icon-square bg-light text-dark flex-shrink-0 mt-1 me-3">
                                        <FontAwesomeIcon icon={faClapperboard} />
                                    </div>
                                    <div className='d-flex gap-2 g-2 flex-column justify-content-between flex-grow-1'>
                                        
                                            <h5>{activity.title}</h5>
                                            <span>{activity.date}</span>
                                            <p>{activity.description}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentActivities;

