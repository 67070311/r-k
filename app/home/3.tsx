"use client";

import { motion } from "framer-motion";
import { MapPinned, Route, ShieldCheck } from "lucide-react";

export default function Section3() {
  return (
    <section className="relative overflow-hidden bg-[#B9000B]">
      <img
        src="/home/3/bg1.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#8F0008] via-[#B9000B]/95 to-[#ED002B]/70" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-black/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-[520px] max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-16 lg:py-16">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative"
        >
          <div className="max-w-[560px] rounded-[28px] border border-white/15 bg-white/10 p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-8 lg:p-10">
            <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/15 px-4 py-2 text-[13px] font-semibold">
              R&K TECHNOLOGY GPS
            </div>

            <h2 className="text-[28px] font-bold leading-[1.35] sm:text-[34px] lg:text-[42px]">
              ผู้เชี่ยวชาญระบบ
              <br />
              GPS Tracking ทั่วประเทศ
            </h2>

            <p className="mt-5 text-[15px] font-medium leading-[1.9] text-white/90 sm:text-[16px]">
              บริษัท อาร์แอนด์เค เทคโนโลยี จีพีเอส จำกัด เริ่มก่อตั้งตั้งแต่ปี
              2547 จำหน่ายและติดตั้งระบบ GPS Tracking สำหรับรถทุกชนิด
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/12 p-4">
                <MapPinned className="mb-3 h-6 w-6" />
                <p className="text-[13px] font-semibold leading-6">
                  ติดตามตำแหน่ง Real Time
                </p>
              </div>

              <div className="rounded-2xl bg-white/12 p-4">
                <Route className="mb-3 h-6 w-6" />
                <p className="text-[13px] font-semibold leading-6">
                  ดูเส้นทางย้อนหลัง
                </p>
              </div>

              <div className="rounded-2xl bg-white/12 p-4">
                <ShieldCheck className="mb-3 h-6 w-6" />
                <p className="text-[13px] font-semibold leading-6">
                  รายงานการใช้งานรถ
                </p>
              </div>
            </div>

            <p className="mt-7 text-[16px] font-bold leading-[1.7] sm:text-[18px]">
              เราเลือกใช้ระบบแผนที่ที่มีความละเอียดที่สุดในประเทศไทย
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 42, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="absolute bottom-6 right-4 h-28 w-[70%] rounded-full bg-black/30 blur-2xl" />

          <img
            src="/home/3/car.png"
            alt="GPS Tracking Vehicles"
            className="relative z-10 w-full max-w-[520px] object-contain drop-shadow-[0_28px_40px_rgba(0,0,0,0.35)] sm:max-w-[650px] lg:max-w-[780px] lg:translate-x-10 xl:translate-x-20"
          />

          <div className="absolute right-4 top-6 hidden rounded-2xl border border-white/20 bg-white/15 px-5 py-4 text-white shadow-xl backdrop-blur-md md:block">
            <p className="text-[26px] font-bold">20+</p>
            <p className="text-[13px] font-medium text-white/85">
              ปีแห่งประสบการณ์
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
