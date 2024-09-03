interface ItemData {
  id: number;
  name: string;
  email: string;
  age: number;
  country: string;
  phone: string;
  occupation: string;
}

interface RowProps {
  index: number;
  style: React.CSSProperties;
  data: ItemData[];
  control: any;
}
interface MyListProps {
  data: ItemData[];
  control: any;
}
export type { ItemData, RowProps, MyListProps };
