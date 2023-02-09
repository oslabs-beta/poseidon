
<div align="center">

  [![banner](/public/assets/banner.png)](https://www.os-poseidon.com/)
  <!-- h2 tagline here -->
  <!-- short description -->
  <!-- quick links -->

  <!-- https://ileriayo.github.io/markdown-badges/#markdown-badges -->
  [![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Grafana](https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white)](https://grafana.com/)
  [![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)](https://kubernetes.io/)
  [![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
  [![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white)](https://prometheus.io/)
  [![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
  [![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)](https://www.cypress.io/)
  [![License](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](public/LICENSE)

  [![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)]()
  [![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)]()
  [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/osposeidon/)
</div>

<details>
  <summary><h2 style="display: inline;">Quick Start</h2></summary>

  1. Fork this repository to your profile, clone it to your local machine, navigate into the directory, then run `npm install`.
  2. Create a `.env.local` file and paste in the following:
      ```
      NODE_ENV = development
      MONGO_URI = "[REPLACE THIS WITH YOUR MONGODB CONNECTION STRING]"
      NEXTAUTH_URL = http://localhost:3500
      BCRYPT_SALT = 10
      NEXTAUTH_SECRET = 12345678910
      KUBECOST_IP = "[REPLACE THIS WITH YOUR DEPLOYED KUBECOST IP ADDRESS]"
      LOCAL_KUBECOST_IP = "[REPLACE THIS WITH YOUR LOCAL KUBECOST IP ADDRESS]"
      LOCAL_CLUSTER_IP = "localhost:3300"
      LOCAL_CLUSTER_NAME = "[REPLACE THIS WITH THE UNIQUE EMBED ID FROM YOUR GRAFANA SHARE LINK]"
      DEPLOYED_CLUSTER_IP = "[REPLACE THIS WITH YOUR DEPLOYED* CLUSTER IP ADDRESS]"
      DEPLOYED_CLUSTER_NAME = "[REPLACE THIS WITH THE UNIQUE EMBED ID FROM YOUR GRAFANA SHARE LINK]"
      DEPLOYED_CLUSTER_NAME_2 = "[REPLACE THIS WITH THE UNIQUE EMBED ID FROM YOUR GRAFANA SHARE LINK]"
      ```
      - Be sure to replace the areas of all caps text including the enclosing square brackets with the specified information, then save the file.
        - *functions for both depolyments on AWS and/or Google.
      - For more details, please visit our website [os-poseidon.com/setup](https://www.os-poseidon.com/setup).
  3. Regarding your command options:
      - `npm run port` runs the application on port 3500.
      - `npm run forward` ..?
      - `npm run test` assures that any processes on port 3500 is killed then in parallel runs the application on that port and opens Cypress.
</details>


## Current Features
-

## Iteration Plans
- [ ] Apply an input field in the registration form to store cluster IP addresses for the client's ease of use.
- [ ] Connect...
- [ ] Implement an authentication hierarchy to allow for role and privilege assignments. This secures and regulates any manipulations to an organization's clusters.
- [ ] Create a filter for the graphs on the dashboard...
- [ ] Integrate [D3.js](https://d3-graph-gallery.com/) for graph styling.


<!--
• dark mode, flexible screen size
• Deploy the app to AWS?
• what does it mean to modify a cluster?
    Create the feature to be able to modify the clusters.
• Determine a method for accessing the ID of the Grafana iframe in a dynamic manner.
• Implement a notification system in the app that allows users to receive notifications through messages, Slack, and email when the cluster goes down.
 -->



<!-- https://github.com/tandpfun/skill-icons#icons-per-line
https://github.com/JoshDPT
https://www.linkedin.com/in/joshuah-edwards/
https://github.com/xtchow
https://www.linkedin.com/in/xtchow/
https://github.com/alyagraf
https://www.linkedin.com/in/alina-grafkina-955a56179/
https://github.com/wmoody6293
https://www.linkedin.com/in/william-moody/
 -->
 <!-- Meet the Team! -->
## Connect with the Team!
| Joshuah Edwards | Sarah Chow | Alina Grafkina | Will Moody |
| :---: | :---: | :---: | :---: |
| [![GitHub](https://skillicons.dev/icons?i=github)](https://github.com/JoshDPT) [![LinkedIn](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/joshuah-edwards/) | [![GitHub](https://skillicons.dev/icons?i=github)](https://github.com/xtchow) [![LinkedIn](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/xtchow/) | [![GitHub](https://skillicons.dev/icons?i=github)](https://github.com/alyagraf) [![LinkedIn](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/alina-grafkina-955a56179/) | [![GitHub](https://skillicons.dev/icons?i=github)](https://github.com/wmoody6293) [![LinkedIn](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/william-moody/) |


