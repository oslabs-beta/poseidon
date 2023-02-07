import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();


export const name_local: string = serverRuntimeConfig.LOCAL_CLUSTER_NAME;
export const name_deployed: string = serverRuntimeConfig.DEPLOYED_CLUSTER_NAME;

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

  // ARRAY FOR LOCAL CLUSTER (MINIKUBE), grafana iframe embed links example
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
