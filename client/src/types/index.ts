export type ConfigRoute = {
  name?: string;
  path: string;
  element: React.ReactNode;
  children?: ConfigRoute[];
};

export type Member = {
  name: string;
  role: string;
  avatar?: string;
  description: string;
  socials?: string[];
  meta?: string[];
};
