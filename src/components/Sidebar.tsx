import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Shield, User } from "lucide-react";

export const Sidebar = () => {
    return (
      <aside className="w-60 border-r bg-muted/40 p-4 space-y-4">
        <h2 className="text-lg font-semibold">Account</h2>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col gap-3">
            <NavigationMenuItem>
              <Button variant="ghost" className="w-full">
                <User className="mr-2 h-4 w-full" />
                Profile
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost" className="w-full">
                <Shield className="mr-2 h-4 w-4" />
                Security
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </aside>
    );
  };