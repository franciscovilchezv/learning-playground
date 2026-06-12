/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, Select, SelectItem } from "@nextui-org/react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  role: z.string().min(1, {
    message: "Please select a role.",
  }),
});

export default function TestPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      role: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  function setRandomValues() {
    const randomUsername = `user${Math.floor(Math.random() * 1000)}`;
    const randomEmail = `user${Math.floor(Math.random() * 1000)}@example.com`;
    const roles = ["admin", "user", "editor"];
    const randomRole = roles[Math.floor(Math.random() * roles.length)];
    form.reset({
      username: randomUsername,
      email: randomEmail,
      role: randomRole,
    });
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-[350px]"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your username"
                      labelPlacement="outside"
                      id={field.name}
                      name={field.name}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      ref={field.ref}
                      value={field.value}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    labelPlacement="outside"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Enter your email address.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => {
              console.log(field);
              return (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Select
                      placeholder="Select a role"
                      labelPlacement="outside"
                      aria-label={"Role"}
                      // onSelectionChange={(e: any) => {
                      //   const valArr = Array.from(e);
                      //   console.log(valArr);
                      //   field.onChange(valArr);
                      // }}
                      selectedKeys={[field.value]}
                      // {...field}
                      id={field.name}
                      name={field.name}
                      onBlur={field.onBlur}
                      onChange={field.onChange}
                      ref={field.ref}
                    >
                      <SelectItem key="admin" value="admin">
                        Administrator
                      </SelectItem>
                      <SelectItem key="user" value="user">
                        User
                      </SelectItem>
                      <SelectItem key="editor" value="editor">
                        Editor
                      </SelectItem>
                    </Select>
                  </FormControl>
                  <FormDescription>Select your user role.</FormDescription>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div className="flex gap-4">
            <Button type="submit">Submit</Button>
            <Button type="button" variant="outline" onClick={setRandomValues}>
              Random Values
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
