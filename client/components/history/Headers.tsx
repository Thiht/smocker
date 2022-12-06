import { Table, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import { MultimapType } from "../../modules/types";
export const Headers = ({ headers }: { headers?: MultimapType }) => {
  if (!headers) {
    return <></>;
  }
  return (
    <Table
      size="sm"
      border="1px solid"
      borderColor="sidebar.border"
      borderRadius="2px"
      bgColor="grey.light"
    >
      <Tbody>
        {Object.entries(headers).map(([key, values]) => (
          <Tr key={key}>
            <Td
              borderColor="sidebar.border"
              wordBreak="keep-all"
              whiteSpace="nowrap"
            >
              <Text fontWeight="bold">{key}</Text>
            </Td>
            <Td borderColor="sidebar.border" wordBreak="break-all">
              <Text>{values.join(", ")}</Text>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};