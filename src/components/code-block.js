import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import Prism from "prism-react-renderer/prism";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-csharp");

export default function CodeBlock({ children, className }) {
  const language = className.replace(/language-/, "");
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,

            textAlign: "left",
            margin: "1em 0",
            padding: "0.5em",
            overflowX: "auto",
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              <span
                style={{
                  display: "table-cell",
                  textAlign: "right",
                  paddingRight: "1em",
                  userSelect: "none",
                  opacity: "0.5",
                }}
              >
                {i + 1}
              </span>
              <span style={{ display: "table-cell" }}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
