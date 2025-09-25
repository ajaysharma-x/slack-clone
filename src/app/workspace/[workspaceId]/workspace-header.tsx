import { useState } from "react";
import { ChevronDown, ListFilter, SquarePen } from "lucide-react";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"

import { InviteModal } from "./invite-modal";
import { Doc } from "../../../../convex/_generated/dataModel";
import { PreferencesModal } from "./preferences-modal";

interface WorkspaceHeaderProps {
    workspace: Doc<"workspaces">;
    isAdmin: boolean;
}



export const WorkspaceHeader = ({ workspace, isAdmin }: WorkspaceHeaderProps) => {
    const [preferencesOpen, setPreferencesOpen] = useState(false);
    const [inviteOpen, setInviteOpen] = useState(false);


    return (
        <>
            <InviteModal 
                open={inviteOpen}
                setOpen={setInviteOpen}
                name={workspace.name}
                joinCode={workspace.joinCode}
            />
            <PreferencesModal open={preferencesOpen}
                setOpen={setPreferencesOpen}
                initialValue={workspace.name}
            />
            <div className="flex items-center justify-between px-4 h-[49px] gap-0.5">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="transparent"
                            className="font-semibold text-lg w-auto p-1.5 overflow-hidden"
                            size="sm"
                        >
                            <span className="truncate">{workspace.name}</span>
                            <ChevronDown className="size-4 ml-1 shrink-0" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="bottom" align="start" className="w-64 bg-white shadow-md rounded-md p-2">
                        <DropdownMenuItem
                            className="cursor-pointer capitalize flex items-center space-x-4 transition hover:bg-gray-100 border-none focus:outline-none"
                        >
                            <div className="w-9 h-9 flex items-center justify-center bg-gray-600 text-white font-semibold text-xl rounded-md">
                                {workspace.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="font-bold">{workspace.name}</p>
                                <p className="text-xs text-muted-foreground">Active Workspace</p>
                            </div>
                        </DropdownMenuItem>
                        {isAdmin && (
                            <>
                                <DropdownMenuSeparator className="my-1 border-t border-gray-200" />
                                <DropdownMenuItem
                                    className="cursor-pointer py-2 transition hover:bg-gray-100 border-none focus:outline-none"
                                    onClick={() => setInviteOpen(true)}
                                >
                                    Invite people to {workspace.name}
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="my-1 border-t border-gray-200" />
                                <DropdownMenuItem
                                    className="cursor-pointer py-2 transition hover:bg-gray-100 border-none focus:outline-none"
                                    onClick={() => { setPreferencesOpen(true) }}
                                >
                                    Preferences
                                </DropdownMenuItem>
                            </>
                        )}
                    </DropdownMenuContent>
                    <div className="flex items-center gap-0.5">
                        <Hint label="Filter conversations" side="bottom">
                            <Button variant="transparent" size="iconSm">
                                <ListFilter className="size-5" />
                            </Button>
                        </Hint>
                    </div>
                    <div className="flex items-center gap-0.5">
                        <Hint label="New message" side="bottom">
                            <Button variant="transparent" size="iconSm">
                                <SquarePen className="size-5" />
                            </Button>
                        </Hint>
                    </div>
                </DropdownMenu>
            </div>
        </>
    )
} 