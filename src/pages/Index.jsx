import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Button, Textarea, useToast, Image } from "@chakra-ui/react";
import { FaCode, FaCopy } from "react-icons/fa";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const toast = useToast();

  const generateCode = () => {
    // TODO: Implement actual code generation logic
    const generatedCode = `// Generated code for: ${inputText}\nfunction example() {\n  console.log("Hello, world!");\n}`;
    setGeneratedCode(generatedCode);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    toast({
      title: "Code copied",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            Code Generation Website
          </Heading>
          <Text fontSize="xl" color="gray.500">
            Generate code snippets instantly!
          </Text>
        </Box>
        <Box>
          <Image src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZ2VuZXJhdGlvbnxlbnwwfHx8fDE3MDk4MDE3Njh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Code Generation" />
        </Box>
        <Box>
          <Textarea value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Enter your code requirements..." size="lg" height="200px" />
        </Box>
        <Box>
          <Button leftIcon={<FaCode />} colorScheme="blue" size="lg" onClick={generateCode}>
            Generate Code
          </Button>
        </Box>
        {generatedCode && (
          <Box>
            <Heading as="h2" size="xl" marginBottom={4}>
              Generated Code:
            </Heading>
            <Box backgroundColor="gray.100" padding={4} borderRadius="md" position="relative">
              <Button size="sm" colorScheme="teal" position="absolute" top={2} right={2} onClick={copyCode}>
                <FaCopy />
              </Button>
              <pre>{generatedCode}</pre>
            </Box>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
