import React from "react";

export default function useDebounce(value: string, delay = 300) {
  const [debounceValue, setDebounceValue] = React.useState("");
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounceValue;
}
