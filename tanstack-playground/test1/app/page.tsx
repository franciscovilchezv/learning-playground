import UsersListComponent from "../components/users-list";
import { createClient } from "../utils/supabase/server";

export default async function Home() {
  const supabase = createClient()

  const res = await supabase.from('Author').select();

  console.log(res);

  return (
    <UsersListComponent />
  );
}
