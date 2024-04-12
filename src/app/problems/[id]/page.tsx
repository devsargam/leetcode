import { CodeEditor } from "@/components/code-editor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function ProblemPage() {
  // TODO: Catch the problem from the db
  // TODO: Return 404 is problem not found

  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full rounded-lg border h-screen"
      >
        <ResizablePanel defaultSize={50}>
          <CodeEditor />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="font-semibold">One</span>
              </div>
              {/* // TODO: Replace this with some notion renderer */}
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
              {/* // TODO: Replace this with some io */}
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
