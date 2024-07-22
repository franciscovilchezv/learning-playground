"use client";

import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../app/actions/users";
import { createClient } from "../utils/supabase/client";

export default function UsersListComponent() {
  // const { data, isPending, error } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: getUsers,
  // });

  const { data, isPending, error } = useQuery({
    queryKey: ["authors"],
    queryFn: async () => {
      const supabase = createClient();
      return await supabase.from('Author').select();
    }
  })

  console.log(data, isPending, error);

  return <main>
    Hi
  </main>;
}
