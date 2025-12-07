
import { FormWizardProvider } from "./provider/FormWizardProvider";
import FormWizard from "./components/FormWizard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p className="mb-6">Please answer each questions (1= totally disagree, 2 = indifferent, 3 = disagree, 4 = agree , 5 totally agree</p>
      <FormWizardProvider><FormWizard/></FormWizardProvider>
    </div>
  );
}
