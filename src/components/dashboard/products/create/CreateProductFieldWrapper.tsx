import React from "react";

const CreateProductFieldWrapper = ({
  children,
  errors,
}: Readonly<{ children: React.ReactNode; errors: string[] | undefined }>) => {
  return (
    <div className="flex flex-col gap-2">
      {children}
      {errors && <p className="text-red-600">{errors}</p>}
    </div>
  );
};

export default CreateProductFieldWrapper;
