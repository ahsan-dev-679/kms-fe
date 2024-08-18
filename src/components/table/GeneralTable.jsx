import React from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { Text } from "@mantine/core";
import { theme } from "@/configs/matine.config";
import { colors } from "@/configs/theme.config";

const GeneralTable = ({ columns, data, heading }) => {
  const table = useMantineReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)

    renderTopToolbarCustomActions: ({ table }) => (
      <>
        <Text
          fw={550}
          px={6}
          style={{
            color: colors.primary[100],
            fontSize: "clamp(0.875rem, 0.5417rem + 1.7778vw, 1.875rem)",
          }}
        >
          {heading}
        </Text>
      </>
    ),
  });
  return <MantineReactTable table={table} />;
};

export default GeneralTable;
