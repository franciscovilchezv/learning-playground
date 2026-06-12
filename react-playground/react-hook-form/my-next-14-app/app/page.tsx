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
import { Input } from "@/components/ui/input";
import { Button, Select, SelectItem } from "@nextui-org/react";

const schema = z.object({
  firstName: z.number(),
  gender: z.enum(["male", "female"]),
});

type FormDataType = z.infer<typeof schema>;

function CustomFormControlInput({ field }: { field: FieldValues }) {
  return (
    <FormControl>
      <Input {...field} type="number" id={field.name} />
    </FormControl>
  );
}

const MemoizedFormControlInput = memo(CustomFormControlInput);

export default function Home() {
  const form = useForm<FormDataType>({
    resolver: zodResolver(schema),
    defaultValues: {
      // firstName: "",
      gender: "male",
    },
  });

  const onSubmit = (data: FormDataType) => {
    console.log(data);
    form.reset();
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-2xl font-bold">Hello World</h1>
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
                <MemoizedFormControlInput
                  field={field}
                ></MemoizedFormControlInput>
                {/* <Input {...field} id={field.name} /> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem id="test4">
                <FormLabel id={`${field.name}-label`} htmlFor="test5">Gender</FormLabel>
                <FormControl id="test6">
                  <Select
                    placeholder="Select a gender"
                    aria-labelledby={`${field.name}-label`}
                    id="test5"
                  >
                    <SelectItem id="test2" key="male">male</SelectItem>
                    <SelectItem id="test3" key="female">female</SelectItem>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" color="primary">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
