"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const TabsVariantContext = React.createContext("about");

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(
  ({ className, variant = "about", ...props }, ref) => {
    const baseStyles = "inline-flex text-black w-full border-black";

    const variants = {
      about: "border flex-col",
      works: "border-b pb-3 gap-x-5 md:pb-5",
    };

    return (
      <TabsVariantContext.Provider value={variant}>
        <TabsPrimitive.List
          ref={ref}
          className={cn(baseStyles, variants[variant], className)}
          {...props}
        />
      </TabsVariantContext.Provider>
    );
  }
);
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(
  ({ className, variant, ...props }, ref) => {
    const contextVariant = React.useContext(TabsVariantContext);
    const appliedVariant = variant || contextVariant;
    
    const baseStyles =
      "inline-flex focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 uppercase font-medium border-b";

    const variants = {
      about:
        "px-4 items-center h-[50px] w-full text-sm last:border-b-0 data-[state=active]:bg-black data-[state=active]:text-white border-black transition-all-03 md:text-lg md:h-[60px]",
      works:
        "text-xs data-[state=active]:pb-0.5 data-[state=active]:border-black border-transparent md:text-lg md:pb-1",
    };

    return (
      <TabsPrimitive.Trigger
        ref={ref}
        className={cn(baseStyles, variants[appliedVariant], className)}
        {...props}
      />
    );
  }
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("mt-5 md:mt-10 focus-visible:outline-none", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
