import { useMemo } from "react";
import { MyListProps } from "@/core/types";
import { FixedSizeList as List } from "react-window";
import Row from "../Row";

const MyList: React.FC<MyListProps> = ({ data, control }) => {
  const itemData = useMemo(() => data, [data]);

  return (
    <List
      height={600}
      itemCount={itemData.length}
      itemSize={50}
      width={"100%"}
      itemData={itemData}
    >
      {({ index, style }) => (
        <Row index={index} style={style} data={itemData} control={control} />
      )}
    </List>
  );
};

export default MyList;
