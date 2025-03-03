import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface FooterProps {
  currentStep: string;
  setCurrentStep: (step: string) => void;
  showSmResumePreview: boolean;
  setShowSmResumePreview: (show: boolean) => void;
  isSaving: boolean;
}

export default function Footer() {
  return (
    <footer className="w-full border-t px-3 py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3">
        <div className="flex items-center gap-3 ">
          <Button variant="secondary" onClick={() => {}}>
            Previous step
          </Button>
          <Button variant="secondary" onClick={() => {}}>
            Next step
          </Button>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {}}
          className="md:hidden"
        ></Button>
        <div className="flex items-center gap-3">
          <Button variant="secondary" asChild>
            <Link href="/resumes">Close</Link>
          </Button>
          <p className={cn("text-muted-foreground opacity-0")}>Saving...</p>
        </div>
      </div>
    </footer>
  );
}
