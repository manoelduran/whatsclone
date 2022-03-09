import React, { useRef, useState } from 'react';
import SearchImage from '../../assets/search.png';
import { Container, Input, Image } from './styles';


interface SearchBoxProps {
  value: string;
  onChange: (event: string) => void;
};

export function SearchBox({ value, onChange }: SearchBoxProps) {
  const [displayValue, setDisplayValue] = useState(value);

  function Debounce(fn: Function, ms: number) {
    const timeoutId = useRef<number | null>(null);
    function debouncedFn(...args: any[]) {
      window.clearTimeout(timeoutId.current as unknown as number);
      timeoutId.current = window.setTimeout(() => fn(...args), ms);
    };
    return debouncedFn;
  };

  const debounceChange = Debounce(onChange, 2000);

  function handleSearchBox(event: any) {
    setDisplayValue(event.target.value);
    debounceChange(event.target.value);
  };

  return (
    <Container>
      <Image
      src={SearchImage}
      alt='Search'
      />
      <Input
        value={displayValue}
        placeholder="Search or start new chat"
        type="text"
        onChange={handleSearchBox}
      />
    </Container>
  );
};