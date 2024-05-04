import { SubmitButton } from "./submit-button";

export const Header = () => {
  return (
    <>
      <nav className="w-full flex justify-between items-center py-1 px-8 bg-slate-200 border-b">
        <div>Problem List</div>
        <SubmitButton />
        <button>Signin</button>
      </nav>
    </>
  );
};
