import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const name_local: string = publicRuntimeConfig.LOCAL_CLUSTER_NAME;
export const name_deployed: string = publicRuntimeConfig.DEPLOYED_CLUSTER_NAME;
export const name_deployed_2: string =
  publicRuntimeConfig.DEPLOYED_CLUSTER_NAME_2;

const IP_local_env: string = publicRuntimeConfig.LOCAL_CLUSTER_IP;
const IP_deployed_env: string = publicRuntimeConfig.DEPLOYED_CLUSTER_IP;

export const dashUrls: string[][] = [
  // ARRAY FOR DEPLOYED CLUSTER
  [
    `http://${IP_deployed_env}/d-solo/${name_deployed_2}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=2`,
    `http://${IP_deployed_env}/d-solo/${name_deployed_2}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=3`,
    `http://${IP_deployed_env}/d-solo/${name_deployed_2}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=4`,
    `http://${IP_deployed_env}/d-solo/${name_deployed_2}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=5`,
    `http://${IP_deployed_env}/d-solo/${name_deployed_2}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=6`,
    `http://${IP_deployed_env}/d-solo/${name_deployed_2}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=10`,
    `http://${IP_deployed_env}/d-solo/${name_deployed_2}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=8`,
    `http://${IP_deployed_env}/d-solo/${name_deployed_2}/node-exporter-nodes?orgId=1&refresh=30s&from=now-2h&to=now&panelId=9`,
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
    `http://${IP_local_env}/d-solo/${name_local}/node-exporter-nodes?orgId=1&refresh=30s&from=now-24h&to=now&panelId=2`,
    `http://${IP_local_env}/d-solo/${name_local}/node-exporter-nodes?orgId=1&refresh=30s&from=now-24h&to=now&panelId=3`,
    `http://${IP_local_env}/d-solo/${name_local}/node-exporter-nodes?orgId=1&refresh=1d&from=now-24h&to=now&panelId=4`,
    `http://${IP_local_env}/d-solo/${name_local}/node-exporter-nodes?orgId=1&refresh=1d&from=now-24h&to=now&panelId=5`,
    `http://${IP_local_env}/d-solo/${name_local}/node-exporter-nodes?orgId=1&refresh=1d&from=now-24h&to=now&panelId=6`,
    `http://${IP_local_env}/d-solo/${name_local}/node-exporter-nodes?orgId=1&refresh=1d&from=now-24h&to=now&panelId=7`,
    `http://${IP_local_env}/d-solo/${name_local}/node-exporter-nodes?orgId=1&refresh=1d&from=now-24h&to=now&panelId=8`,
    `http://${IP_local_env}/d-solo/${name_local}/node-exporter-nodes?orgId=1&refresh=1d&from=now-24h&to=now&panelId=9`,
  ],
];
