
import { FormWizardProvider } from "./provider/FormWizardProvider";
import FormWizard from "./components/FormWizard";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <FormWizardProvider><FormWizard/></FormWizardProvider>
    </div>
  );
}
