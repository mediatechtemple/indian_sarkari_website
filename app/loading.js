import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-32 h-32">
        <Image
          src="/images/loding2.png"
          alt="Logo"
          className="absolute inset-0 w-full h-full object-contain animate-slow-spin"
          width={196}
          height={196}
        />
        <div className="absolute inset-0 border-4 border-t-transparent border-blue-500 rounded-full animate-slow-spin"></div>
        <div className="absolute inset-2 border-4 border-t-transparent border-green-500 rounded-full animate-slow-spin-reverse"></div>
      </div>
    </div>
  );
}
