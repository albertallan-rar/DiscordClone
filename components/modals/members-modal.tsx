"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useModal } from "@/hooks/use-modal-store";
import { ServerWithMembersWithProfiles } from "@/types";

interface MembersModalProps {}

export const MembersModal: React.FC<MembersModalProps> = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();

  const isModalOpen = isOpen && type === "members";
  const { server } = data as { server: ServerWithMembersWithProfiles };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">Gerenciar Membros</DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            {server?.members?.length} Membro{server?.members?.length === 1 ? "" : "s"}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="mt-8 max-h-[420px] pr-6">
          {server.members.map((member) => (
            <div key={member.id} className="flex items-center gap-x-2 mb-6">
              {member.profile.name}
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
