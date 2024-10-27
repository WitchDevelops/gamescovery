import React, { useRef, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { BsSearch, BsXCircleFill } from "react-icons/bs";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchInputRef.current) {
      onSearch(searchInputRef.current.value);
    }
  };

  const clearSearchInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <InputGroup>
        <InputLeftElement cursor={"pointer"} onClick={handleSearch}>
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={searchInputRef}
          placeholder="Search games..."
          variant="filled"
          borderRadius={20}
          onChange={(event) => setInputValue(event.target.value)}
        />
        {inputValue && (
          <InputRightElement
            onClick={clearSearchInput}
            cursor="pointer"
            borderRightRadius={20}
            color={"brand.700"}
            _hover={{ color: "brand.600" }}
          >
            <BsXCircleFill />
          </InputRightElement>
        )}
      </InputGroup>
    </form>
  );
};
