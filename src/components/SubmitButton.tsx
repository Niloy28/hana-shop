"use client";

import { Loader2 } from "lucide-react";
import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

const SubmitButton = ({
  children,
  ...props
}: Readonly<{ children?: React.ReactNode }> &
  ComponentProps<typeof Button>) => {
  const { pending } = useFormStatus();

  return (
    <Button
      {...props}
      type="submit"
      className="flex h-10 w-36 items-center justify-center"
      disabled={pending}
    >
      {pending && <Loader2 className="group w-full animate-spin" />}
      {!pending && children}
    </Button>
  );
};

export default SubmitButton;
