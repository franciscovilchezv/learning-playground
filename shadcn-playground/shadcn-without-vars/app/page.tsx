"use client";

import { useState } from "react";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function Home() {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);

  return (
    <main className="space-y-12 p-12 duration-1000">
      <Button variant={"default"} size={"lg"}>
        Hola
      </Button>
      <Button variant={"default"}>Hola</Button>
      <Button variant={"default"} size={"sm"}>
        Hola
      </Button>
    </main>
  );
}
