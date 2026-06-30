"use client";

import { motion } from "framer-motion";
import { MapPinned, Route, ShieldCheck } from "lucide-react";

export default function Section3() {
  return (
    <section className="relative overflow-hidden bg-[#B9000B]">
      {/* background เดิม */}
      <img
        src="/home/3/bg1.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* overlay เบา ๆ ให้ตัวหนังสืออ่านง่าย */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8F0008]/80 via-[#B9000B]/45 to-[#ED002B]/20" />

      <div className="relative z-10 mx-auto grid min-h-[460px] max-w-[1440px] grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-10">
        {/* Text Card */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-[540px] rounded-[26px] border border-white/18 bg-white/10 p-6 text-white shadow-[0_22px_60px_rgba(0,0,0,0.22)] backdrop-blur-[3px] sm:p-8"
        >
          <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-2 text-[12px] font-semibold">
            R&amp;K TECHNOLOGY GPS
          </div>

          <h2 className="text-[26px] font-bold leading-[1.35] sm:text-[30px] md:text-[34px] lg:text-[38px]">
            ผู้เชี่ยวชาญระบบ
            <br />
            GPS Tracking ทั่วประเทศ
          </h2>

          <p className="mt-5 text-[14px] font-medium leading-[1.85] text-white/95 sm:text-[15px]">
            บริษัท อาร์แอนด์เค เทคโนโลยี จีพีเอส จำกัด เริ่มก่อตั้งตั้งแต่ปี
            2547 จำหน่ายและติดตั้งระบบ GPS Tracking สำหรับรถทุกชนิด
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/12 p-4">
              <MapPinned className="mb-3 h-5 w-5" />
              <p className="text-[12px] font-semibold leading-6">
                ติดตามตำแหน่ง Real Time
              </p>
            </div>

            <div className="rounded-2xl bg-white/12 p-4">
              <Route className="mb-3 h-5 w-5" />
              <p className="text-[12px] font-semibold leading-6">
                ดูเส้นทางย้อนหลัง
              </p>
            </div>

            <div className="rounded-2xl bg-white/12 p-4">
              <ShieldCheck className="mb-3 h-5 w-5" />
              <p className="text-[12px] font-semibold leading-6">
                รายงานการใช้งานรถ
              </p>
            </div>
          </div>

          <p className="mt-6 text-[15px] font-bold leading-[1.7] sm:text-[16px]">
            เราเลือกใช้ระบบแผนที่ที่มีความละเอียดที่สุดในประเทศไทย
          </p>
        </motion.div>

        {/* Car */}
        <motion.div
          initial={{ opacity: 0, x: 36, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="absolute bottom-6 right-6 h-24 w-[78%] rounded-full bg-black/30 blur-2xl" />

          <div className="absolute right-3 top-4 hidden h-[210px] w-[250px] rounded-[24px] border border-white/20 bg-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-[2px] lg:block" />

          <img
            src="/home/3/car.png"
            alt="GPS Tracking Vehicles"
            className="relative z-10 w-full max-w-[500px] object-contain drop-shadow-[0_30px_35px_rgba(0,0,0,0.38)] sm:max-w-[620px] lg:max-w-[700px] lg:translate-x-8 xl:max-w-[760px] xl:translate-x-14"
          />
        </motion.div>
      </div>
    </section>
  );
}
