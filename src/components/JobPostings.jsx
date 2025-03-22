import React, { useState } from 'react';

const JobPostings = ({ department }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'We are looking for an experienced Frontend Developer to join our team...',
      requirements: [
        '5+ years of experience with React',
        'Strong knowledge of modern JavaScript',
        'Experience with responsive design',
        'Understanding of web performance optimization'
      ],
      responsibilities: [
        'Develop and maintain web applications',
        'Collaborate with design team',
        'Write clean, maintainable code',
        'Participate in code reviews'
      ]
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'design',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Join our design team to create beautiful and intuitive user experiences...',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma',
        'Strong portfolio',
        'Understanding of user-centered design'
      ],
      responsibilities: [
        'Create user interfaces and experiences',
        'Conduct user research',
        'Create design systems',
        'Collaborate with development team'
      ]
    },
    {
      id: 3,
      title: 'Marketing Manager',
      department: 'marketing',
      location: 'On-site',
      type: 'Full-time',
      description: 'Lead our marketing efforts and help grow our brand presence...',
      requirements: [
        '5+ years of marketing experience',
        'Strong analytical skills',
        'Experience with digital marketing',
        'Excellent communication skills'
      ],
      responsibilities: [
        'Develop marketing strategies',
        'Manage marketing campaigns',
        'Track and analyze metrics',
        'Lead marketing team'
      ]
    }
  ];

  // Filter jobs based on selected department
  const filteredJobs = department === 'all'
    ? jobs
    : jobs.filter(job => job.department === department);

  return (
    <div className="row g-4">
      {filteredJobs.map(job => (
        <div key={job.id} className="col-md-6 col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm cursor-pointer"
            onClick={() => setSelectedJob(job)}
          >
            <div className="card-body">
              <h3 className="h5 mb-2">{job.title}</h3>
              <div className="d-flex gap-2 mb-3">
                <span className="badge bg-danger">{job.department}</span>
                <span className="badge bg-secondary">{job.location}</span>
                <span className="badge bg-info">{job.type}</span>
              </div>
              <p className="text-muted mb-0">{job.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedJob.title}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setSelectedJob(null)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-4">
                  <div className="d-flex gap-2 mb-3">
                    <span className="badge bg-danger">{selectedJob.department}</span>
                    <span className="badge bg-secondary">{selectedJob.location}</span>
                    <span className="badge bg-info">{selectedJob.type}</span>
                  </div>
                  <p>{selectedJob.description}</p>
                </div>

                <div className="mb-4">
                  <h6 className="mb-3">Requirements</h6>
                  <ul className="list-unstyled">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="mb-2">
                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h6 className="mb-3">Responsibilities</h6>
                  <ul className="list-unstyled">
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index} className="mb-2">
                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setSelectedJob(null)}
                >
                  Close
                </button>
                <button type="button" className="btn btn-danger">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPostings; 