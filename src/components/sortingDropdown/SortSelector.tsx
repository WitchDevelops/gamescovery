import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
  onSelectSort: (sortOrder: string) => void;
  sortOrder: string;
}

export const SortSelector: React.FC<SortSelectorProps> = ({
  onSelectSort,
  sortOrder,
}) => {
  const sortOptions = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Metacritic score (Best to worse)" },
    { value: "-released", label: "Date released (Newest first)" },
    { value: "-added", label: "Date added (Newest first)" },
    { value: "-created", label: "Date created (Newest first)" },
  ];
  const currentSortOrder = sortOptions.find(
    (option) => option.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOptions.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            onClick={() => onSelectSort(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
