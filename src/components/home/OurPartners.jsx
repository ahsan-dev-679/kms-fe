import { Box, Flex, Image, Title } from "@mantine/core";
import React from "react";

const OurPartners = () => {
  return (
    <section className="py-8 px-6">
      <Title className="pb-10" ta={"center"}>
        Order from your favorite app today!
      </Title>

      <Flex
        align={"center"}
        justify={"space-between"}
        wrap={"wrap"}
        gap={10}
        className="space-y-6"
      >
        <Image
          src={
            "https://cdn.prod.website-files.com/61d3a7155d89b79cad2b9e32/61d3a7155d89b7fadf2b9ec5_logo-uber-eats-restaurante-x-template.svg"
          }
        />
        <Image
          src={
            "https://cdn.prod.website-files.com/61d3a7155d89b79cad2b9e32/61d3a7155d89b796fa2b9e70_logo-doorash-restaurante-x-template.svg"
          }
        />
        <Image
          src={
            "https://cdn.prod.website-files.com/61d3a7155d89b79cad2b9e32/61d3a7155d89b71a1e2b9e75_logo-postmates-restaurante-x-template.svg"
          }
        />
        <Image
          src={
            "https://cdn.prod.website-files.com/61d3a7155d89b79cad2b9e32/61d3a7155d89b70f542b9e74_logo-rappi-restaurante-x-template.svg"
          }
        />
        <Image
          src={
            "https://cdn.prod.website-files.com/61d3a7155d89b79cad2b9e32/61d3a7155d89b724942b9e71_logo-grubhub-restaurante-x-template.svg"
          }
        />
      </Flex>
    </section>
  );
};

export default OurPartners;
