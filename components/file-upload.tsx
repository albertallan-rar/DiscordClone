"use client";
import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";

import "@uploadthing/react/styles.css";
import { X } from "lucide-react";

interface FileUploadProps {
  endpoint: "messageFile" | "serverImage";
  value: string;
  onChange: (url?: string) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ endpoint, onChange, value }) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative w-[16vw] h-[10vh]  2xl:w-[5vw] 2xl:h-[10vh] lg:w-[7vw] lg:h-[9vh] ">
        <Image src={value} fill alt="Upload" className="rounded-full" />
        <button
          onClick={() => onChange("")}
          className="bg-orange-400 absolute text-white p-1 rounded-full right-0 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};
