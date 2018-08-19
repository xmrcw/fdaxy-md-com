export class NavItem {
  id: number;
  name: string;
  icon: string;
  tips: string;
  url: string;
  children: NavItem[] = [];
}
