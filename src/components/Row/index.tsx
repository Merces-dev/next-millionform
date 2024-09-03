import React from "react";
import { RowProps } from "@/core/types";
import { Controller } from "react-hook-form";

const Row: React.FC<RowProps> = React.memo(
  ({ index, style, data, control }) => {
    const item = data[index];

    return (
      <div style={style} className="p-2 border-b border-gray-300">
        <Controller
          name={`data.${index}.id`}
          control={control}
          defaultValue={item.id}
          render={({ field }) => (
            <input {...field} type="text" className="mr-2 p-1 border rounded" />
          )}
        />
        <Controller
          name={`data.${index}.name`}
          control={control}
          defaultValue={item.name}
          render={({ field }) => (
            <input {...field} type="text" className="mr-2 p-1 border rounded" />
          )}
        />
        <Controller
          name={`data.${index}.email`}
          control={control}
          defaultValue={item.email}
          render={({ field }) => (
            <input {...field} type="text" className="mr-2 p-1 border rounded" />
          )}
        />
        <Controller
          name={`data.${index}.age`}
          control={control}
          defaultValue={item.age}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              className="mr-2 p-1 border rounded"
            />
          )}
        />
        <Controller
          name={`data.${index}.country`}
          control={control}
          defaultValue={item.country}
          render={({ field }) => (
            <input {...field} type="text" className="mr-2 p-1 border rounded" />
          )}
        />
      </div>
    );
  }
);

// Set display name for the Row component
Row.displayName = "Row";
export default Row;
