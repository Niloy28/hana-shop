import { cn } from "@/lib/utils";
import React from "react";

const FormFieldWrapper = ({
  children,
  errors,
  className,
}: Readonly<{
  children: React.ReactNode;
  errors: string[] | undefined;
  className?: string;
}>) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {children}
      {errors && <p className="text-red-600">{errors}</p>}
    </div>
  );
};

export default FormFieldWrapper;
