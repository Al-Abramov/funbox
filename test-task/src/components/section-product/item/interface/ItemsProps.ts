export interface ItemsProps {
  weight: number | string;
  count: number;
  portionCount: number;
  promo: string;
  filling: string;
  toggleChoose?: () => void;
  stateItem?: boolean;
  activeDescr?: string;
}
