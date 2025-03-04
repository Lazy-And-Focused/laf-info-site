export type ConfigRoute = {
  name?: string;
  path: string;
  element: React.ReactNode;
  children?: ConfigRoute[];
};

export type BaseMember = {
  tag: string;
  name: string;
  role: string;
  avatar?: string;
  description: string;
  socials?: string[];
  meta?: string[];
};

export type Member = Omit<BaseMember, 'socials'> & {
  socials: SocialLink[];
};

export type SocialLink = {
  href: string;
  name: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};
