export interface Filter {
  imei?: string;
  mid?: string;
  sim?: string;
  batch?: string;
  status?: string;
}

export interface Data {
  id: number;
  mid?: string;
  imei?: string;
  sim?: any;
  status?: string;
  batch?: string;
  updated?: string;
}

export interface Batch {
  code: string;
  name: string;
}
