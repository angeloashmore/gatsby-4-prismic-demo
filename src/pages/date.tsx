import * as React from "react";
import { PageProps } from "gatsby";

type DatePageProps = PageProps & {
  serverData: {
    date: string;
  };
};

export const DatePage = ({ serverData }: DatePageProps) => {
  return <div>{serverData.date}</div>;
};

export default DatePage;

export const getServerData = async (): Promise<{
  props: DatePageProps["serverData"];
}> => {
  const date = new Date().toString();

  return { props: { date } };
};
