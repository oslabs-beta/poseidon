interface LoginValues {
  email: string;
  password: string;
}
interface KubecostTotals {
  totalCPU: number;
  totalRAM: number;
  totalGPU: number;
  totalloadBalancerCost: number;
  totalNetworkCost: number;
  totalPVCost: number;
  totalCost: number;
  totalSharedCost: number;
  totalDays: number;
  key: string;
}
interface HomeProps {
  data: {}[];
}
interface RegisterValues {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  ipAddress: string;
  changePassword?: string;
}
interface SessionData {
  email: string;
  lastName: string;
  firstName: string;
  ipAddress: string;
}