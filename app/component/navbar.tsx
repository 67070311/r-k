import Link from "next/link";
import {
  Car,
  ChevronDown,
  ChevronRight,
  Headphones,
  LogIn,
  Monitor,
} from "lucide-react";

const aboutItems = [
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "ภาพการทำงาน", href: "/gallery" },
  { label: "บทความ", href: "/article" },
];

const deviceItems = [
  { label: "GT06E", href: "/products/gt06e" },
  { label: "TS107 3G", href: "/products/ts107-3g" },
];

const trackingItems = [
  {
    label: "GPS ติดตามรถ Real Time",
    href: "/tracking-software/realtime",
  },
  {
    label: "GPS ติดตามรถ ไม่มีรายเดือน",
    href: "/tracking-software/no-monthly-fee",
  },
  {
    label: "GPS ติดตามรถ ตาม Function การใช้งาน",
    href: "/tracking-software/function",
  },
  {
    label: "GPS Tracking ติดตามรถยนต์ทั่วไป",
    href: "/tracking-software/general-car",
  },
  {
    label: "Tracking Server",
    href: "/tracking-software/server",
  },
];

const loginItems = [
  {
    title: "LOGIN SERVICE",
    desc: "ระบบ GPS ติดตามรถส่วนบุคคลและขนส่งสินค้าทั่วไป",
    href: "/login/service",
  },
  {
    title: "LOGIN TRANSPORT",
    desc: "ระบบ GPS ติดตามรถขนส่งที่ใช้เครื่องรูดบัตรใบขับขี่",
    href: "/login/transport",
  },
  {
    title: "GPS กันขโมย",
    desc: "ระบบ GPS ติดตามรถส่วนบุคคลจับโจรขโมยผ่านดาวเทียม",
    href: "/login/anti-theft",
  },
];

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 h-[82px] w-full bg-white shadow-[0_2px_14px_rgba(0,0,0,0.07)]">
      <div className="mx-auto grid h-full max-w-[1440px] grid-cols-[180px_1fr_180px] items-center px-16">
        <Link href="/" className="flex items-center">
          <img
            src="/navbar/logo.png"
            alt="R&K Logo"
            className="h-[34px] w-auto"
          />
        </Link>

        <div className="flex h-full items-center justify-center gap-9 whitespace-nowrap text-[15px] font-medium text-black">
          <Link href="/" className="transition hover:text-[#108C2E]">
            หน้าหลัก
          </Link>

          <div className="group relative flex h-full items-center">
            <button className="flex items-center gap-1.5 transition hover:text-[#108C2E] group-hover:text-[#108C2E]">
              <span>เกี่ยวกับเรา</span>
              <ChevronDown className="h-4 w-4 stroke-[2.3]" />
            </button>

            <div className="invisible absolute left-1/2 top-full w-[210px] -translate-x-1/2 rounded-[10px] bg-white px-5 py-4 opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
              {aboutItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-2 py-2.5 text-[15px] font-normal text-black transition hover:text-[#108C2E]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative flex h-full items-center">
            <button className="flex items-center gap-1.5 text-black transition hover:text-[#108C2E] group-hover:text-[#108C2E]">
              <span>สินค้าและบริการ</span>
              <ChevronDown className="h-4 w-4 stroke-[2.3]" />
            </button>

            <div className="invisible absolute left-1/2 top-full w-[285px] -translate-x-1/2 rounded-[14px] bg-white p-3 opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="group/device relative flex cursor-default items-center justify-between rounded-xl px-4 py-3 text-[15px] font-normal text-black transition hover:bg-[#F5FBF7] hover:text-[#108C2E]">
                <div className="flex items-center gap-3">
                  <Monitor className="h-5 w-5 stroke-[2.1]" />
                  <span>อุปกรณ์</span>
                </div>
                <ChevronRight className="h-4 w-4 stroke-[2.3]" />

                <div className="invisible absolute left-full top-0 ml-3 w-[190px] rounded-[14px] bg-white p-3 opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-150 group-hover/device:visible group-hover/device:opacity-100">
                  {deviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-4 py-3 text-[15px] font-normal text-black transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="group/tracking relative flex cursor-default items-center justify-between rounded-xl px-4 py-3 text-[15px] font-normal text-black transition hover:bg-[#F5FBF7] hover:text-[#108C2E]">
                <div className="flex items-center gap-3">
                  <Car className="h-5 w-5 stroke-[2.1]" />
                  <span>โปรแกรมติดตามรถ</span>
                </div>
                <ChevronRight className="h-4 w-4 stroke-[2.3]" />

                <div className="invisible absolute left-full top-0 ml-3 w-[380px] rounded-[16px] bg-white p-4 opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-150 group-hover/tracking:visible group-hover/tracking:opacity-100">
                  {trackingItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-4 py-3 text-[15px] font-normal text-black transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/after-sale"
                className="flex items-center rounded-xl px-4 py-3 text-[15px] font-normal text-black transition hover:bg-[#F5FBF7] hover:text-[#108C2E]"
              >
                <div className="flex items-center gap-3">
                  <Headphones className="h-5 w-5 stroke-[2.1]" />
                  <span>บริการหลังการขาย</span>
                </div>
              </Link>
            </div>
          </div>

          <Link href="/jobs" className="transition hover:text-[#108C2E]">
            สมัครงานกับเรา
          </Link>

          <Link href="/faq" className="transition hover:text-[#108C2E]">
            ถามตอบ
          </Link>

          <Link href="/contact" className="transition hover:text-[#108C2E]">
            ติดต่อเรา
          </Link>
        </div>

        <div className="group relative flex h-full items-center justify-end">
          <button className="flex items-center gap-1.5 rounded-full bg-[#ED002B] px-7 py-3.5 text-[15px] font-medium text-white shadow-[0_8px_20px_rgba(237,0,43,0.18)] transition hover:bg-[#d90027]">
            <span>Login</span>
            <ChevronDown className="h-4 w-4 stroke-[2.3]" />
          </button>

          <div className="invisible absolute right-0 top-full w-[420px] rounded-[16px] border border-black/5 bg-white p-4 opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.13)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
            <div className="space-y-2">
              {loginItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-4 text-left transition hover:border-[#108C2E]/25 hover:bg-[#F5FBF7]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5F5F5] text-[#108C2E]">
                    <LogIn className="h-5 w-5 stroke-[2.2]" />
                  </div>

                  <div>
                    <p className="text-[15px] font-medium text-black">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[13px] font-normal leading-[1.6] text-gray-500">
                      {item.desc}
                    </p>
                  </div>

                  <ChevronRight className="ml-auto mt-2 h-4 w-4 shrink-0 stroke-[2.2] text-gray-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
