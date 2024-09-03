"use client";
import dataFromJson from "./../../mock/users.json";
import React from "react";
import { useForm } from "react-hook-form";
import { ItemData } from "@/core/types";
import MyList from "@/components/MyList";

const Home: React.FC = () => {
  const dataTs = dataFromJson as ItemData[];
  const { control, handleSubmit } = useForm({
    defaultValues: { data: dataTs },
  });

  const onSubmit = (formData: { data: ItemData[] }) => {
    console.log("Updated Data:", formData.data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MyList data={dataTs} control={control} />
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
        Save Changes
      </button>
    </form>
  );
};

export default Home;
