import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-[#0091DA] text-white shadow-lg shadow-[#0091DA]/15 hover:bg-[#004AB8] focus-visible:ring-[#004AB8]",
        secondary: "bg-white text-[#172033] border border-slate-200 hover:bg-slate-50 focus-visible:ring-[#0091DA]",
        outline: "border border-[#0091DA] text-[#004AB8] bg-white hover:bg-[#EAF7FD] focus-visible:ring-[#0091DA]",
      },
      size: {
        default: "h-12",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
};

export { Button, buttonVariants };
