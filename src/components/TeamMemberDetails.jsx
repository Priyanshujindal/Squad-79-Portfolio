import React from 'react';

const TeamMemberDetails = ({ member, onClose }) => {
  return (
    <div className="modal fade show d-block" tabIndex="-1">
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Team Member Details</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="img-fluid rounded mb-3"
                />
                <div className="d-flex justify-content-center gap-3 mb-3">
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    <i className="bi bi-github fs-4"></i>
                  </a>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      backgroundColor: "#ff6b6b",
                      color: "#ffffff",
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#ff5252";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#ff6b6b";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <i className="bi bi-linkedin fs-5"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-8">
                <h3 className="h4 mb-3">{member.name}</h3>
                <p className="text-muted mb-4">{member.role}</p>
                <p className="mb-4">{member.bio}</p>
                
                <h4 className="h5 mb-3">Skills</h4>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="badge bg-danger"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <h4 className="h5 mb-3">Projects</h4>
                <ul className="list-unstyled mb-4">
                  {member.projects.map((project, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-check-circle-fill text-danger me-2"></i>
                      {project}
                    </li>
                  ))}
                </ul>

                <h4 className="h5 mb-3">Achievements</h4>
                <ul className="list-unstyled">
                  {member.achievements.map((achievement, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-trophy-fill text-danger me-2"></i>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetails; 