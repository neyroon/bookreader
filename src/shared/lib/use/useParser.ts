import { ParsedXML, Parser } from '../parser';
import { useMemo } from 'react';

export const useParser = (unparsedText: string): ParsedXML[] => {
  return useMemo(() => {
    const parser = new Parser();
    const parsed = parser.parseFromString(unparsedText);
    return parsed;
  }, [unparsedText]);
};
