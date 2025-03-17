import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Import the external link icon

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>

      {/* Professional Experience */}
      <div className="job">
        <h3>Annecto Telecom (A Subsidiary of Cellusys), Damascus — DevOps Engineer</h3>
        <p className="date">March 2024 - PRESENT</p>
        <ul>
          <li>Migrated critical services, such as logs monitoring and system monitoring, during infrastructure transition</li>

          <li>Managed the system monitoring service, reducing deployment time by 15x using Ansible.</li>

          <li>Managed the logs monitoring service, migrating it from ad-hoc server code to a properly configured and documented Git repository, enhancing deployment and development processes.</li>

          <li>Handling basic server maintenance, including resolving performance issues and disk space problems.</li>

          {/* <li>Created a test client for onboarding new clients, identifying key scalability weaknesses in the system and implementing solutions for each.</li> */}

          <li>Designed and implemented a staging environment mirroring production to test new features before deployment, preventing production issues and saving hundreds of hours in debugging and rollouts.</li>

          <li>Integrated HashiCorp Vault for configuration and secret management, ensuring security and scalability across all environments and client deployments.</li>

          <li>Managing the CI infrastructure, continuously adding new features to enhance the deployment experience and improve code health.</li>

          <li>Handling daily operations of the main service, ensuring proper communication and understanding among team members.</li>
          <div class="html2pdf__page-break"></div>

          <li>Communicating design decisions to ensure proper understanding of the project direction among responsible team members.</li>

          <li>Programmed and refactored parts of the main service using Python, improving installation and automating configuration processes.</li>

          <li>Designed a topology for the entire system to ensure a clear understanding of the overall architecture for the team.</li>

          <li>Documenting new features in the system, including the deployment of the staging environment and monitoring services.</li>

          <li>Seamlessly integrated into the team’s version control workflow, demonstrating strong Git skills and adherence to best practices from day one.</li>

          <li>Maintained the VS Code development environment during repository structure changes.</li>

          <li>Leveraging AI tools (e.g., ChatGPT, DeepSeek) in daily tasks for scripting, automation, troubleshooting, and research, improving efficiency and problem-solving.</li>
        </ul>
      </div>

      {/* Self-Learning Period */}
      <div className="job">
        <h3>Self-Learning — DevOps and Development Skills</h3>
        <p className="date">August 2022 - PRESENT</p>
        <ul>
          <li>Mastering Linux foundational concepts (filesystem, process management, networking, security, package management, etc.).</li>

          <li>Mastering Docker foundational concepts (image creation, management, and registry; installation and configuration; networking; security; storage and volumes; links, etc.).</li>

          <li>Deepening programming knowledge and foundational skills using Python and Bash.</li>

          <li>Exploring design concepts and design patterns.</li>

          <li>Continuously exploring automation techniques and tools.</li>

          <li>Maintained a base knowledge of networking.</li>

          <li>Continuously Learning new tools like VSCode, Vim, Emacs, Wireshark, GitHub Actions and others.</li>

          <li>Spent 3 months on frontend development (Preceding employment), doing side-projects such as <a href="https://gityahco.github.io/pathfindingvisualizer/" target="_blank" rel="noopener noreferrer" className="project-link">“The Path Finding Visualizer” <FaExternalLinkAlt className="link-icon" /></a> using React.js.</li>
          <div class="html2pdf__page-break"></div>
        </ul>
      </div>
    </section>
  );
};

export default Experience;