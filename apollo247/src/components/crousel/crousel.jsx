import { Box } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";

export  function Crousel() {
  return  (
    <Box  w="100%" p={4} color="white">
      <ImageSlider  slides={SlideData} />
    </Box>
  );
}

