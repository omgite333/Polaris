"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
   const projects = useQuery(api.projects.get);
   const createProject = useMutation(api.projects.create);
  return (
    <div>
      <Button onClick={() => createProject({ name: "New Project" })}>
        Add New
      </Button>
     {projects?.map(({ _id, name }) =>
       <div key={_id}>
        {name}
        </div>)}
    </div>
  );
}
