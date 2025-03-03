"use client";

import Footer from "./Footer";
import GeneralInfoForm from "./forms/GeneralInfoForm";

export default function ResumeEditor() {
  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b  px-3 py-5 text-center">
        <h1 className="text-2xl font-bold text-primary">Design your Resume</h1>
        <p className="text-sm text-muted-foreground">
          Follow the steps below to create your resume. Your progress will be
          saved automatically.
        </p>
      </header>
      <main className="relative grow">
        <div className="absolute bottom-0 top-0 flex w-full">
          <div className="w-full md:w-1/2 p-3">
            <GeneralInfoForm />
          </div>
          <div className="grow md:border-r" />
          <div className=" hidden w-1/2 md:flex  ">Right</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
