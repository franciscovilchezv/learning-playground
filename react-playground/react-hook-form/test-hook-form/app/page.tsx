"use client";

import { memo } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
});

type FormDataType = z.infer<typeof schema>;

// function CustomFormControlInput({ field }: { field: FieldValues }) {
//   return (
//     <FormControl>
//       <Input {...field} />
//     </FormControl>
//   );
// }

function CustomFormControlSelect({ field }: { field: FieldValues }) {
  return (
    <FormControl>
      <Select
        onValueChange={field.onChange}
        // defaultValue={field.value}
        value={field.value}
        name={field.name}
      >
        <SelectTrigger id="firstName">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
    </FormControl>
  );
}

// const MemoizedFormControlInput = memo(CustomFormControlInput);
const MemoizedFormControlSelect = memo(CustomFormControlSelect);

export default function Home() {
  const form = useForm<FormDataType>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "banana",
    },
  });

  const onSubmit = (data: FormDataType) => {
    console.log(data);
    form.reset();
  };

  return (
    <div>
      <h1>Hello World</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-md mx-auto mt-8 space-y-4"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                {/* <MemoizedFormControlInput field={field}></MemoizedFormControlInput> */}
                {/* <CustomFormControlSelect field={field} /> */}
                <MemoizedFormControlSelect field={field} />
                {/* <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    // defaultValue={field.value}
                    value={field.value}
                    name={field.name}
                  >
                    <SelectTrigger id="firstName">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
