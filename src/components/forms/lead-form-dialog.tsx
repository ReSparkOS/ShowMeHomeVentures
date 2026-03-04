"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LeadForm } from "./lead-form";
import type { ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface LeadFormDialogProps {
  triggerText?: string;
  triggerVariant?: ButtonProps["variant"];
  triggerSize?: ButtonProps["size"];
  triggerClassName?: string;
}

export function LeadFormDialog({
  triggerText = "Get My Open-Book Offer",
  triggerVariant = "default",
  triggerSize = "default",
  triggerClassName,
}: LeadFormDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={triggerVariant}
          size={triggerSize}
          className={cn("bg-emerald-700 hover:bg-emerald-800", triggerClassName)}
        >
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Get Your Open-Book Offer</DialogTitle>
        </DialogHeader>
        <LeadForm className="mt-2" />
      </DialogContent>
    </Dialog>
  );
}
