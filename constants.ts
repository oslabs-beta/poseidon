import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

// console.log('getting ip from env: ', serverRuntimeConfig.DEPLOYED_CLUSTER_IP);
// const IP = '34.28.48.106';

export const name_local: string = 'Jd5xvc04z'; // WILL'S LINK -->> SHOULD TRASFER TO ENV OR MAKE THE FIELD INPUT FOR SIGNUP PAGE
export const name_deployed: string = '3UwLYP04k'; // ALINA'S LINK -->> SHOULD TRASFER TO ENV OR MAKE THE FIELD INPUT FOR SIGNUP PAGE

const IP_local_env = serverRuntimeConfig.LOCAL_CLUSTER_IP;
const IP_deployed_env = serverRuntimeConfig.DEPLOYED_CLUSTER_IP;

export const dashUrls: string[][] = [
  // ARRAY FOR DEPLOYED CLUSTER
  [
    `http://${IP_deployed_env}/d-solo/${name_deployed}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=2`,
    `http://${IP_deployed_env}/d-solo/${name_deployed}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=3`,
    `http://${IP_deployed_env}/d-solo/${name_deployed}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=4`,
    `http://${IP_deployed_env}/d-solo/${name_deployed}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=5`,
    `http://${IP_deployed_env}/d-solo/${name_deployed}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=6`,
    `http://${IP_deployed_env}/d-solo/${name_deployed}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=7`,
    `http://${IP_deployed_env}/d-solo/${name_deployed}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=8`,
    `http://${IP_deployed_env}/d-solo/${name_deployed}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=9`,
  ],

  // ARRAY FOR LOCAL CLUSTER (MINIKUBE)
  [
    //   `http://${IP_local_env}/d-solo/${name_local}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=2`,
    //   `http://${IP_local_env}/d-solo/${name_local}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=3`,
    //   `http://${IP_local_env}/d-solo/${name_local}/node-exporter-nodes?orgId=1&refresh=1d&panelId=4`,
    //   `http://${IP_local_env}/d-solo/${name_local}/node-exporter-nodes?orgId=1&refresh=1d&panelId=5`,
    //   `http://${IP_local_env}/d-solo/${name_local}/node-exporter-nodes?orgId=1&refresh=1d&panelId=6`,
    //   `http://${IP_local_env}/d-solo/${name_local}/node-exporter-nodes?orgId=1&refresh=1d&panelId=7`,
    //   `http://${IP_local_env}/d-solo/${name_local}/node-exporter-nodes?orgId=1&refresh=1d&panelId=8`,
    //   `http://${IP_local_env}/d-solo/${name_local}/node-exporter-nodes?orgId=1&refresh=1d&panelId=9`,
  ],
];
