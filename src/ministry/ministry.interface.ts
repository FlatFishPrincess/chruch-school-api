export interface Ministry {
  id: number;
  name: string;
  description: string;
}

export interface MinistryC {
  ministries: Ministry[];
  ministryCounts: number;
}

