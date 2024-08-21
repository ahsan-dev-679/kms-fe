import React from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { Text } from "@mantine/core";

const GeneralTable = ({ columns, data, heading, isLoading }) => {
  const table = useMantineReactTable({
    state: {
      showLoadingOverlay: false,
      showSkeletons: isLoading,
    },
    mantineSkeletonProps: {
      animate: "pulse",
    },
    mantineProgressProps: {
      color: "teal",
    },
    mantineLoadingOverlayProps: {
      color: "teal",
    },
    mantinePaginationProps: {
      color: "teal",
    },
    mantineSelectCheckboxProps: {
      color: "teal",
    },
    mantineSelectAllCheckboxProps: {
      color: "teal",
    },
    paginationDisplayMode: "pages",
    loaderProps: { color: "pink", type: "bars" },

    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    // enableRowSelection: true,

    renderTopToolbarCustomActions: ({ table }) => (
      <>
        <Text
          fw={550}
          px={6}
          style={{
            color: "#141B43",
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
