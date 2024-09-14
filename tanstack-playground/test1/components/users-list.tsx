"use client";

import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../app/actions/users";
import { createClient } from "../utils/supabase/client";
import { Author } from "next/dist/lib/metadata/types/metadata-types";
import { Tables } from "../app/types/supabase";

export default function UsersListComponent() {
  // const { data, isPending, error } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: getUsers,
  // });

  const { data, isPending, error } = useQuery({
    queryKey: ["authors"],
    queryFn: async () => {
      const supabase = createClient();
      const { data } = await supabase.from("Author").select();
      console.log(data);
      console.log(data?.[0]);
      return data;
    },
  });

  console.log(data, isPending, error);

  return <main>Hi</main>;
}
