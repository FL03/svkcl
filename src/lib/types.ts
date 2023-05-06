export interface Banner {
  logo: string;
  title: string;
}

export interface Link {
  href: string;
  label: string;
  protected?: boolean;
}

export interface Navigation {
  banner: Banner;
  links: Array<Link>;
}
