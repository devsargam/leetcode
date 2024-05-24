import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `
## Hi there!
*Pluto*!

- [x] This is a complete item
- [ ] This is an incomplete item
\`\`\`py
print("Hello, World!")
\`\`\`
`;

export const MarkdownRenderer = () => {
  return (
    <Markdown className="prose lg:prose-xl bg-transparent">{markdown}</Markdown>
  );
};
