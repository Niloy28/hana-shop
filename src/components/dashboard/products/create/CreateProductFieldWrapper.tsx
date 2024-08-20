import React from "react";

const CreateProductFieldWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export default CreateProductFieldWrapper;
