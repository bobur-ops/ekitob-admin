import { DeleteIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Stack,
  Heading,
  Input,
  Box,
  Text,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface UploadImageProps {
  uploadNewImage: (value: string | ArrayBuffer | null) => void;
  removeImage: () => void;
  initialImage?: string | ArrayBuffer | null;
}

const UploadImage: React.FC<UploadImageProps> = ({
  uploadNewImage,
  initialImage,
  removeImage,
}) => {
  const [imageValue, setImageValue] = useState<
    string | ArrayBuffer | null | undefined
  >(initialImage);

  const getBase64 = (
    file: File,
    cb: (value: string | ArrayBuffer | null) => void
  ) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };

    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  return (
    <Box my="12">
      {imageValue ? (
        <Box mx={"auto"} position={"relative"} w={"64"} h={"64"}>
          <Box position={"absolute"} right={5} bottom={5}>
            <IconButton
              onClick={() => {
                removeImage();
                setImageValue(null);
              }}
              colorScheme="red"
              aria-label="Delete Image"
              icon={<DeleteIcon />}
            />
          </Box>
          <Image
            objectFit={"cover"}
            objectPosition={"center"}
            w={"full"}
            h={"full"}
            src={imageValue as string}
            alt="Book cover"
          />
        </Box>
      ) : (
        <AspectRatio mx={"auto"} width="64" ratio={1}>
          <Box
            borderColor="gray.300"
            borderStyle="dashed"
            borderWidth="2px"
            rounded="md"
            shadow="sm"
            role="group"
            transition="all 150ms ease-in-out"
            _hover={{
              shadow: "md",
            }}
            as={motion.div}
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            <Box position="relative" height="100%" width="100%">
              <Box
                position="absolute"
                top="0"
                left="0"
                height="100%"
                width="100%"
                display="flex"
                flexDirection="column"
              >
                <Stack
                  height="100%"
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justify="center"
                  spacing="4"
                >
                  <Stack p="8" textAlign="center" spacing="1">
                    <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                      Drop images here
                    </Heading>
                    <Text fontWeight="light">or click to upload</Text>
                  </Stack>
                </Stack>
              </Box>
              <Input
                type="file"
                height="100%"
                width="100%"
                position="absolute"
                top="0"
                left="0"
                opacity="0"
                aria-hidden="true"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files) {
                    getBase64(e.target.files[0], (result) => {
                      setImageValue(result);
                      uploadNewImage(result);
                    });
                  }
                }}
              />
            </Box>
          </Box>
        </AspectRatio>
      )}
    </Box>
  );
};

export default UploadImage;
