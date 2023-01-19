export interface CardProps {
  weight: number | string;
  count: number;
  portionCount: number;
  promo: string;
  filling: string;
  stateItem?: boolean;
  toggleChoose?: () => void;
}
