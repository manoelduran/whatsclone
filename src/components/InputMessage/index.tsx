import React, { useRef, useState } from 'react';
import SearchImage from '../../assets/search.png';
import { Container, Input } from './styles';


interface InputMessageProps {
  value: string;
  onChange: (event: string) => void;
};

export function InputMessage({ value, onChange }: InputMessageProps) {
  const [displayMessage, setDisplayMessage] = useState(value);

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
    setDisplayMessage(event.target.value);
    debounceChange(event.target.value);
  };

  return (
    <Container>
      <Input
        value={displayMessage}
        placeholder="Type a message here"
        type="text"
        onChange={handleSearchBox}
      />
    </Container>
  );
};