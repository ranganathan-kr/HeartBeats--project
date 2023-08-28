export interface Donor {
  
  id: number;
  name?: string | null;
  number?: string | null;
  email?: string | null;
  dob: Date;
  blood?: string | null;
  gender?: string | null;
  state?: string | null;
  city?: string | null;
  alcoholic?: string | null;
  password?: string | null;
  // You can add other properties as needed

  // Flags for Blood Donation Request and Report
  bloodDonationRequested: boolean;
  reportReason?: string;
  }
  