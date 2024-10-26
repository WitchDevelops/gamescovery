import React, { useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchInputRef.current) {
      onSearch(searchInputRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={searchInputRef}
          placeholder="Search games..."
          variant="filled"
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};
