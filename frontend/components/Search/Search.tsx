import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, InputGroup, FormControl } from "react-bootstrap";

interface SearchProps {
  label: string;
  placeholder?: string;
  onSearch: (word: string) => void;
  className?: string;
}

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  padding: 8px;

  .search-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;

    label {
      font-weight: bold;
    }
  }

  .search-button {
    margin-left: 8px;
    button {
      padding: 8px;
    }
  }
`;

export const Search: React.FC<SearchProps> = (props) => {
  const { label, placeholder, onSearch, className } = props;
  const [word, setWord] = useState<string>("");

  useEffect(() => {
    return function cleanUp() {
      setWord("");
    };
  }, []);
  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const word = e.target.value;
    setWord(word);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    onSearch(word);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const isEnter = e.key === "Enter";
    if (isEnter) {
      e.preventDefault();
      onSearch(word);
    }
  };

  return (
    <SearchBox className={className ?? ""}>
      <InputGroup onKeyDown={handleKeyDown}>
        <InputGroup.Text>{label}</InputGroup.Text>
        <FormControl
          placeholder={placeholder}
          onChange={handleWordChange}
          value={word}
        />
      </InputGroup>

      <div className="search-button">
        <Button variant="dark" onClick={handleSearch} disabled={!word}>
          SEARCH
        </Button>
      </div>
    </SearchBox>
  );
};
