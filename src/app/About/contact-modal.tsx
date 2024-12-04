import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Mail, ExternalLink, Github, Twitter } from 'lucide-react';


interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  personalInfo: {
    email: string;
    LinkedIn: string;
  };
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  personalInfo,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Let&apos;s Connect!</DialogTitle>
          <DialogDescription>
            I&apos;m always excited to discuss new opportunities and collaborations.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            onClick={() => window.open(`mailto:${personalInfo.email}`)}
            className="w-full"
          >
            <Mail className="mr-2 h-4 w-4" />
            Send Email
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open(personalInfo.LinkedIn)}
            className="w-full"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Connect on LinkedIn
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open('https://github.com/FavourB')}
            className="w-full"
          >
            <Github className="mr-2 h-4 w-4" />
            Follow on GitHub
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open('https://twitter.com/FavourB')}
            className="w-full"
          >
            <Twitter className="mr-2 h-4 w-4" />
            Follow on Twitter
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};