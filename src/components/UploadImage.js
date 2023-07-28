import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DeleteIcon } from "@chakra-ui/icons";
import { AspectRatio, Stack, Heading, Input, Box, Text, Image, IconButton, } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
const UploadImage = ({ uploadNewImage, initialImage, removeImage, }) => {
    const [imageValue, setImageValue] = useState(initialImage);
    const getBase64 = (file, cb) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result);
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    };
    return (_jsx(Box, { my: "12", children: imageValue ? (_jsxs(Box, { mx: "auto", position: "relative", w: "64", h: "64", children: [_jsx(Box, { position: "absolute", right: 5, bottom: 5, children: _jsx(IconButton, { onClick: () => {
                            removeImage();
                            setImageValue(null);
                        }, colorScheme: "red", "aria-label": "Delete Image", icon: _jsx(DeleteIcon, {}) }) }), _jsx(Image, { objectFit: "cover", objectPosition: "center", w: "full", h: "full", src: imageValue, alt: "Book cover" })] })) : (_jsx(AspectRatio, { mx: "auto", width: "64", ratio: 1, children: _jsx(Box, { borderColor: "gray.300", borderStyle: "dashed", borderWidth: "2px", rounded: "md", shadow: "sm", role: "group", transition: "all 150ms ease-in-out", _hover: {
                    shadow: "md",
                }, as: motion.div, initial: "rest", animate: "rest", whileHover: "hover", children: _jsxs(Box, { position: "relative", height: "100%", width: "100%", children: [_jsx(Box, { position: "absolute", top: "0", left: "0", height: "100%", width: "100%", display: "flex", flexDirection: "column", children: _jsx(Stack, { height: "100%", width: "100%", display: "flex", alignItems: "center", justify: "center", spacing: "4", children: _jsxs(Stack, { p: "8", textAlign: "center", spacing: "1", children: [_jsx(Heading, { fontSize: "lg", color: "gray.700", fontWeight: "bold", children: "Drop images here" }), _jsx(Text, { fontWeight: "light", children: "or click to upload" })] }) }) }), _jsx(Input, { type: "file", height: "100%", width: "100%", position: "absolute", top: "0", left: "0", opacity: "0", "aria-hidden": "true", accept: "image/*", onChange: (e) => {
                                if (e.target.files) {
                                    getBase64(e.target.files[0], (result) => {
                                        setImageValue(result);
                                        uploadNewImage(result);
                                    });
                                }
                            } })] }) }) })) }));
};
export default UploadImage;
