export interface Filter {
  label: string;
  value: string;
  placeholder?: string;
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
