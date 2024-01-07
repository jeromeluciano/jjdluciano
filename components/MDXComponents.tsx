import { LinkIcon } from "@chakra-ui/icons";
import {
    Box,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import mdx from "mdx/types";

export const components: mdx.MDXComponents = {
  h1: (props) => <Heading as="h1" {...props} fontWeight="900" fontSize="xl"/>,
  h2: (props) => <Heading fontSize="xl" fontWeight="bold" {...props} />,
  h3: (props) => <Heading as="h3" fontSize="lg" {...props} />,
  h4: (props) => <Heading as="h4" fontSize="md" {...props} />,
  p: (props) => <Text as="p" fontSize="lg" className="leading-loose text-yellow-50/90 prose" letterSpacing="wide" {...props} />,
  a: ({ children, ...props }) => (
    <Link as="a" fontWeight="bold" color={"yellow.50"} variant="mdx-link" {...props}>
      {children}</Link>
  ),
  li: (props) => <ListItem {...props} marginLeft="4" fontSize="lg" letterSpacing="wide" className="text-yellow-50/90" />,
  ul: ({ children }) => <UnorderedList spacing={8} marginY={6}><Box marginLeft={6} className="flex flex-col space-y-4 leading-loose">{children}</Box></UnorderedList>,
  ol: ({ children }) => <OrderedList spacing={8} margin={6}><Box marginBottom={6} className="flex flex-col space-y-4 leading-loose">{children}</Box></OrderedList>,
};
