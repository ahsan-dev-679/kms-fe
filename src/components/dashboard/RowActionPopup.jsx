import { Box, Stack } from "@mantine/core";
import React from "react";
import { cn } from "@/lib/merger";

const RowActionPopup = ({ isOpen = true, children, ...props }) => {
  return (
    <Box className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      <Stack
        {...props}
        className={cn(
          "inset-0 !absolute size-fit dark:bg-shark-950 z-30 -mt-[100%] mx-auto rounded-2xl transition-[margin] ease-style duration-200 shadow-xl pointer-events-auto bg-white",
          isOpen && "mt-5",
          props.className
        )}
      >
        {children}
      </Stack>
    </Box>
  );
};

export default RowActionPopup;
