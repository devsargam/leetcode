import Markdown from "react-markdown";

interface IMarkdownRendererProps {
  markdown: string;
}

export const MarkdownRenderer = ({ markdown }: IMarkdownRendererProps) => {
  return (
    <Markdown className="prose lg:prose-xl bg-transparent">{markdown}</Markdown>
  );
};
