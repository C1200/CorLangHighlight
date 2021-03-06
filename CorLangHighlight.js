var corlang = (hljs) => {
  const BUILT_INS = [
    "null",  "true",  "false",
    "print", "input", "input_int",
    "type",  "import", "throw",
    "len"
  ];
  const KEYWORDS = [
    "var",    "and",      "or",
    "not",    "if",       "then",
    "elif",   "else",     "for",
    "to",     "while",    "step",
    "func",   "exit",     "end",
    "return", "continue", "break"
  ];
  const IDENTIFIER = "[A-Za-z_][A-Za-z0-9_]*";

  const COR_KEYWORDS = {
    keyword: KEYWORDS,
    built_in: BUILT_INS.join(" ")
  }
    
  return {
    keywords: COR_KEYWORDS,
    contains: [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.HASH_COMMENT_MODE,
      {
        scope: "number",
        begin: "[0-9]{1,}(\.[0-9]{1,})?"
      },
      {
        scope: {
          1: "keyword",
          3: "title.function"
        },
        variants: [
          {
            match: [
              /func/,
              /\s+/,
              IDENTIFIER,
              /(?=\s*\()/
            ]
          },
          // Anonymous func
          {
            match: [
              /func/,
              /\s*(?=\()/
            ]
          }
        ]
      },
      {
        scope: {
          1: "title.function.invoke"
        },
        match: [
          IDENTIFIER,
          /\s*(?=\()/
        ]
      }
    ]
  }
};
