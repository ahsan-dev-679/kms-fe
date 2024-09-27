import { Box, Button, Flex, Image, Title } from "@mantine/core";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FollowUs = () => {
  const navigate = useNavigate();
  return (
    <section className="py-6 px-6">
      <Flex justify={"space-between"} align={"center"} className="pb-8">
        <Title>Follow us on Instagram</Title>
        <Link target="_blank" to={"https://www.instagram.com/"}>
          <Button
            color="#4FAE5A"
            size="xl"
            className="rounded-full transition-all duration-300 hover:scale-105 hover:text-primary-100 hover:bg-white hover:border-primary-100"
          >
            Follow us
          </Button>
        </Link>
      </Flex>

      <Box className="gap-10 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-3">
        <Image
          className="rounded-2xl"
          src={
            "https://assets.website-files.com/61d3a7155d89b79cad2b9e32/61d3a7155d89b70dea2b9e94_Instagram-01-restaurante-x-template-p-500.jpeg"
          }
          alt="instagram"
        />
        <Image
          className="rounded-2xl"
          src={
            "https://cdn.prod.website-files.com/61d3a7155d89b79cad2b9e32/61d3a7155d89b7fae62b9e7a_Instagram-02-restaurante-x-template.jpg"
          }
          alt="instagram"
        />
        <Box className="grid grid-cols-4 md:grid-cols-2 gap-4">
          <Image
            className="rounded-2xl"
            src={
              "https://assets.website-files.com/61d3a7155d89b79cad2b9e32/61d3a7155d89b767fd2b9e7d_Instagram-03-restaurante-x-template-p-500.jpeg"
            }
          />
          <Image
            className="rounded-2xl"
            src={
              "https://assets.website-files.com/61d3a7155d89b79cad2b9e32/61d3a7155d89b7b83d2b9e7c_Instagram-04-restaurante-x-template-p-500.jpeg"
            }
          />
          <Image
            className="rounded-2xl"
            src={
              "https://assets.website-files.com/61d3a7155d89b79cad2b9e32/61d3a7155d89b768c62b9e7b_Instagram-05-restaurante-x-template.jpg"
            }
          />
          <Image
            className="rounded-2xl"
            src={
              "https://assets.website-files.com/61d3a7155d89b79cad2b9e32/61d3a7155d89b743942b9e7e_Instagram-06-restaurante-x-template.jpg"
            }
          />
        </Box>
      </Box>
    </section>
  );
};

export default FollowUs;
