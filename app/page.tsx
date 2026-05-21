"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Phone,
  MapPin,
  ShieldCheck,
  Wrench,
  Home,
  Star,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: <Flame className="h-7 w-7" />,
    title: "Wood Heater Installations",
    text: "Clean, compliant installations for new homes, renovations, sheds, and replacement units.",
  },
  {
    icon: <Wrench className="h-7 w-7" />,
    title: "Servicing & Maintenance",
    text: "Keep your heater burning safely and efficiently with proper inspection, servicing, and maintenance.",
  },
  {
    icon: <ClipboardCheck className="h-7 w-7" />,
    title: "Compliance Checks",
    text: "Clear advice around clearances, flue height, flue position, and safe installation standards.",
  },
];

const why = [
  "Local service within 120km of Kilmore",
  "Reliable communication and clear quotes",
  "Built for homeowners, renovators, and landlords",
  "Neat workmanship and jobsite clean-up",
  "Safety-first approach to every heater",
  "Photos and practical advice before work starts",
];

const areas = [
  "Kilmore",
  "Wallan",
  "Broadford",
  "Seymour",
  "Beveridge",
  "Whittlesea",
  "Lancefield",
  "Romsey",
  "Wandong",
  "Craigieburn",
  "Sunbury",
  "Nagambie",
];

const buttonClass =
  "inline-flex items-center justify-center rounded-2xl bg-green-700 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-green-900/30 transition hover:bg-green-800";

const goldButtonClass =
  "inline-flex items-center justify-center rounded-2xl bg-yellow-500 px-6 py-4 text-sm font-bold text-neutral-950 shadow-lg shadow-yellow-900/20 transition hover:bg-yellow-400";

export default function VicWoodHeaterServicesWebsite() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Vic Wood Heater Installation & Services Logo"
              className="h-16 w-auto rounded-xl object-contain"
            />
            <div>
              <p className="text-lg font-bold tracking-tight">Vic Wood Heater Services</p>
              <p className="text-xs text-neutral-400">Installation • Servicing • Compliance</p>
            </div>
          </div>

          <a href="tel:0422772660" className="hidden sm:block">
            <button className={goldButtonClass}>
              <Phone className="mr-2 h-4 w-4" /> Call 0422 772 660
            </button>
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(21,128,61,0.38),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.22),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-green-700/20 px-4 py-2 text-sm text-yellow-300">
              <MapPin className="h-4 w-4" /> Servicing Kilmore & surrounding areas
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Wood heater installs done clean, safe & compliant.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Vic Wood Heater Services helps Victorian homeowners, renovators, and landlords install,
              service, and maintain solid fuel wood heaters with proper care, neat workmanship, and clear
              communication from start to finish.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="tel:0422772660">
                <button className={goldButtonClass}>
                  <Phone className="mr-2 h-5 w-5" /> Call for a quote
                </button>
              </a>
              <a
                href="https://facebook.com/VicWoodHeaterServices"
                target="_blank"
                rel="noreferrer"
              >
                <button className={buttonClass}>
                  <MessageCircle className="mr-2 h-5 w-5" /> there are more photos and 
                  Message on Facebook
                </button>
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-black text-yellow-500">120km</p>
                <p className="text-xs text-neutral-400">from Kilmore</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-black text-yellow-500">Safety</p>
                <p className="text-xs text-neutral-400">first approach</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-black text-yellow-500">Clean</p>
                <p className="text-xs text-neutral-400">workmanship</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-4 shadow-2xl shadow-black/40">
              <div className="flex min-h-[520px] flex-col justify-end rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(21,128,61,0.35),rgba(23,23,23,0.86)),url('/heater-photo.jpg')] bg-cover bg-center p-8">
                <div className="rounded-3xl border border-white/15 bg-black/55 p-6 backdrop-blur">
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="mt-3 text-xl font-bold">Professional finish. Real local service.</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-300">
                    Perfect for renovations, upgrades, cold Victorian winters, and homeowners wanting peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-neutral-900 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-500">Services</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Everything you need for a safer, better wood heater setup.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-white shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700/20 text-yellow-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7 text-neutral-400">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-500">Why choose us</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Built for homeowners who want the job done properly.
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-300">
              A wood heater is not just another appliance. It needs correct clearances, correct flue
              installation, suitable roof flashing, and practical advice before holes are cut or money is wasted.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {why.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" />
                  <p className="text-sm text-neutral-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-green-700/20 text-yellow-500">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black">What we check before quoting</h3>
                <p className="text-neutral-400">So the job runs smoother.</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Heater location and wall clearances",
                "Floor protection requirements",
                "Ceiling and roof penetration position",
                "Flue path and roof flashing requirements",
                "Access, roof pitch, and safety requirements",
                "Photos, measurements, and site conditions",
              ].map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl bg-white/[0.04] p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-sm font-black text-neutral-950">
                    {index + 1}
                  </div>
                  <p className="text-neutral-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-500">Service area</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Based near Kilmore. Travelling around Victoria.
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-300">
                We service homes, farms, rentals, sheds, and renovation projects within approximately 120km of Kilmore.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {areas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center font-semibold text-neutral-200"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-yellow-500/30 bg-gradient-to-br from-green-800 to-green-950 p-8 text-center shadow-2xl shadow-green-900/40 md:p-12">
          <Clock className="mx-auto h-12 w-12 text-yellow-400" />
          <h2 className="mt-5 text-4xl font-black tracking-tight">Ready to get your heater sorted?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-yellow-50">
            Call now or send photos of your heater location, roof area, and room layout for a faster quote.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="tel:0422772660">
              <button className={goldButtonClass}>
                <Phone className="mr-2 h-5 w-5" /> 0422 772 660
              </button>
            </a>
            <a
              href="https://facebook.com/VicWoodHeaterServices"
              target="_blank"
              rel="noreferrer"
            >
              <button className={buttonClass}>Facebook:https://facebook.com/VicWoodHeaterServices</button>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Vic Wood Heater Services. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-2">
              <Home className="h-4 w-4" /> Kilmore, VIC
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> 0422 772 660
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
