import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface NavItem {
  label: string;
  icon: IconProp;
  route: string;
  isActive: boolean;
}
