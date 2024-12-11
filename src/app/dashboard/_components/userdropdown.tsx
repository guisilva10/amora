import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="relative flex h-8 w-full items-center justify-between space-x-2 !px-0 hover:no-underline"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="/logo.svg" alt="teste"></AvatarImage>
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <div className="flex flex-1 flex-col space-y-1 text-left">
            <p className="text-xs font-medium leading-none">Teste</p>
            <p className="line-clamp-1 text-xs leading-none text-muted-foreground">
              teste@gmail.com
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none text-primary">
              Guilherme
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              teste@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup></DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/" className="flex w-full items-center justify-center">
            <LogOutIcon className="mr-2 size-4" />
            Sair
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
