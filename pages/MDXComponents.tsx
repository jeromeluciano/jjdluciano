import { LinkIcon } from "@chakra-ui/icons";
import {
  Heading,
  HStack,
  Link,
  List,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import mdx from "mdx/types";

export const components: mdx.MDXComponents = {
  h1: (props) => {
    const textColor = useColorModeValue("gray.700", "gray.200");
    return <Heading as="h1" {...props} fontWeight="bold" color={textColor} />;
  },
  h2: (props) => {
    const textColor = useColorModeValue("gray.700", "gray.200");
    return (
      <Heading fontSize="xl" fontWeight="bold" color={textColor} {...props} />
    );
  },
  h3: (props) => <Heading as="h3" fontSize="lg" {...props} color="gray.200" />,
  h4: (props) => {
    const textColor = useColorModeValue("gray.700", "gray.200");
    return <Heading as="h4" fontSize="md" {...props} color={textColor} />;
  },
  p: (props) => {
    const textColor = useColorModeValue("gray.700", "gray.200");
    return <Text as="p" {...props} color={textColor} />;
  },
  a: ({children, ...props}) => {
    const textColor = useColorModeValue("blue.400", "blue.200");
    return (
        <Link as="a" fontWeight="bold" {...props} color={textColor}> 
          {children} <LinkIcon />
        </Link>
     
    );
  },
  li: (props) => {
    const textColor = useColorModeValue("gray.700", "gray.200");
    return <ListItem {...props} marginLeft="4" mt="2" color={textColor} />;
  },
  ul: ({ children }) => <UnorderedList>{children}</UnorderedList>,
  ol: ({ children }) => <OrderedList>{children}</OrderedList>,
};
