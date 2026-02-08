import React from "react";
import { Id } from "../../../../convex/_generated/dataModel";

import { useFilePath } from "@/features/projects/hooks/use-files";
import { useEditor } from "../hooks/use-editor";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { FileIcon } from "@react-symbols/icons/utils";

export const FileBreadCrumbs = ({
  projectId,
}: {
  projectId: Id<"projects">;
}) => {
  const { activeTabId } = useEditor(projectId);
  const filePath = useFilePath(activeTabId);

  if (filePath === undefined || !activeTabId) {
    return (
      <div className="p-2 bg-background pl-4 border-b">
        <Breadcrumb>
          <BreadcrumbList className="sm:gap-0.5 gap-0.5">
            <BreadcrumbItem className="text-sm flex items-center">
              <BreadcrumbPage>&nbsp;</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    );
  }

  return (
    <div className="p-2 bg-background pl-4 border-b items-center">
      <Breadcrumb>
        <BreadcrumbList className="sm:gap-0.5 gap-0.5">
          {filePath.map((item, index) => {
            const isLast = index === filePath.length - 1;
            return (
              <React.Fragment key={item._id}>
                <BreadcrumbItem className="text-sm flex items-center">
                  {isLast ? (
                    <BreadcrumbPage className="flex items-center gap-1 leading-none">
                      <FileIcon
                        fileName={item.name}
                        autoAssign
                        className="size-4 translate-y-[1.5px]"
                      />
                      {item.name}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href="#" className="flex items-center">{item.name}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                 {!isLast && <BreadcrumbSeparator className="flex items-center translate-y-[1px]"/>}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
