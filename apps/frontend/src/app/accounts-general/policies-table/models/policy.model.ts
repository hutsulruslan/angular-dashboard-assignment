export interface PolicyModel {
  name: string;
  id: string;
  effDate: string;
  expDate: string;
  status: 'Active' | 'Pending';
  expiringTech: string;
  expiringPremium: string;
  renewalToTech: string;
  renewalTech: string;
  renewalPremium: string;
  rateChange: string;
  lossRatio: string;
}
