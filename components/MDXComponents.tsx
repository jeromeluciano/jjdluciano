import { LinkIcon } from "@chakra-ui/icons";
import {
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import mdx from "mdx/types";

export const components: mdx.MDXComponents = {
  h1: (props) => <Heading as="h1" {...props} fontWeight="bold" />,
  h2: (props) => <Heading fontSize="xl" fontWeight="bold" {...props} />,
  h3: (props) => <Heading as="h3" fontSize="lg" {...props} />,
  h4: (props) => <Heading as="h4" fontSize="md" {...props} />,
  p: (props) => <Text as="p" {...props} />,
  a: ({ children, ...props }) => (
    <Link as="a" fontWeight="bold" variant="mdx-link" {...props}>
      {children} <LinkIcon />
    </Link>
  ),
  li: (props) => <ListItem {...props} marginLeft="4" mt="2" />,
  ul: ({ children }) => <UnorderedList>{children}</UnorderedList>,
  ol: ({ children }) => <OrderedList>{children}</OrderedList>,
};
