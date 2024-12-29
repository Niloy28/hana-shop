"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { inquirySchema } from "@/lib/zodSchema";
import { SubmissionResult, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";

const ContactForm = ({
  formAction,
}: Readonly<{
  formAction: (
    prevState: unknown,
    formData: FormData,
  ) => Promise<SubmissionResult<string[]> | undefined>;
}>) => {
  const [latestState, action] = useFormState(formAction, undefined);
  const [form, fields] = useForm({
    defaultValue: {
      name: "",
      email: "",
      inquiry: "",
    },
    lastResult: latestState,
    shouldRevalidate: "onInput",
    shouldValidate: "onBlur",
    constraint: getZodConstraint(inquirySchema),
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: inquirySchema,
      });
    },
  });

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      className="m-4 flex w-2/3 flex-col gap-2 p-4"
    >
      <div>
        <Label htmlFor={fields.name.id}>Name:</Label>
        <Input
          type="text"
          key={fields.name.key}
          name={fields.name.name}
          defaultValue={fields.name.initialValue}
          required
        />
      </div>
      <div>
        <Label htmlFor={fields.email.id}>Email:</Label>
        <Input
          type="email"
          key={fields.email.key}
          name={fields.email.name}
          defaultValue={fields.email.initialValue}
          required
        />
      </div>
      <div>
        <Label htmlFor={fields.inquiry.id}>Inquiry:</Label>
        <Textarea
          key={fields.inquiry.key}
          name={fields.inquiry.name}
          defaultValue={fields.inquiry.initialValue}
          rows={9}
          required
          className="resize-none"
        />
      </div>
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};

export default ContactForm;
