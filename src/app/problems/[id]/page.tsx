import { CodeEditor } from "@/components/code-editor";
import { Header } from "@/components/header";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { OutputPanel } from "@/components/output-panel";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function ProblemPage() {
  // TODO: Catch the problem from the db
  // TODO: Return 404 is problem not found

  return (
    <main className="">
      <Header />
      <ResizablePanelGroup direction="horizontal" className="w-full h-full">
        <ResizablePanel defaultSize={50} className="m-1 rounded-xl">
          <CodeEditor />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25} className="m-1 rounded-xl">
              <MarkdownRenderer />
              {/* // TODO: Replace this with some notion renderer */}
            </ResizablePanel>
            <ResizableHandle withHandle className="" />
            <ResizablePanel defaultSize={75} className="m-1 rounded-xl">
              {/* // TODO: Replace this with some io */}
              <div className="flex h-full items-center justify-center p-6 bg-gray-200">
                <span className="font-semibold">
                  <OutputPanel />
                </span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
