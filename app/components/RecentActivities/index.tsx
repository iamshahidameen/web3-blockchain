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
            <h2 className='display-3 mb-5'>Recent Activities</h2>
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3 ">
                   
                        {activities.map((activity, index) => (
               





<div key={index} className="col">
          <div className="card shadow-sm">
            <div className="card-header p-0">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
            <div className="card-title fs-3">{activity.title}</div>
            </div>
            <div className="card-body justify-between">
              <p className="card-text">{activity.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">{activity.date}</small>
              </div>
            </div>
          </div>
        </div>

                            
                        ))}
                    </div>
                </div>
    );
};

export default RecentActivities;

