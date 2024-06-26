import { SegmentedControl } from "@mantine/core";
import { useContext } from "react";

import { ViewValueContext } from "../../App";

import styles from './ViewControl.module.css';

export enum ViewValue {
  ThreeHourly = '3 Hourly',
  FiveDay = '5 Days',
};

export function ViewControl() {
  const { viewValue, setViewValue } = useContext(ViewValueContext);

  return viewValue && setViewValue ? (
    <SegmentedControl
      classNames={{
        root: styles.control,
      }}
      data={Object.values(ViewValue)}
      onChange={(value: string) => setViewValue(value as ViewValue)}
      value={viewValue}
    />
  ) : null;
}