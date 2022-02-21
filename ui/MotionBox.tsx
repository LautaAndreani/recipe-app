import { Box, type BoxProps } from "@chakra-ui/layout";
import { motion } from "framer-motion";

export const MotionBox = motion<BoxProps>(Box);

export default function MotionBoxes({ children }: any) {
  return (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1, y: -2 }}>
      {children}
    </MotionBox>
  );
}
