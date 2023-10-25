import Image from "next/image";
import React from "react";
interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-center p-20">
      <div className="relative ">
        {/* <Image */}
        {/* 	width={250} */}
        {/* 	height={250} */}
        {/* 	alt="empty" */}
        {/* 	src="/code.png" */}
        {/* 	quality={100} */}
        {/* /> */}
      </div>
      <p className="text-muted-foreground text-center text-sm">{label}</p>
    </div>
  );
};
