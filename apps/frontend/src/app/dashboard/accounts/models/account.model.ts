export interface AccountModel {
  name: string;
  type: string;
  line: string;
  broker: string;
  renewalDate: string;
  premium: string;
  ratedPremium: string;
  lossRatio: number;
  appetite: 'HIGH' | 'MEDIUM' | 'CAUTIOUS';
  status: 'Active' | 'Under review';
  triage: number;
  winnability: {
    value: number;
    label: 'Very Strong' | 'Strong' | 'Medium' | 'Weak';
  };
}
