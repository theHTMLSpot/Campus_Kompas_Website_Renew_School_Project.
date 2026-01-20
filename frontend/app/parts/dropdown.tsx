"use client";
import { JSX, useEffect, useState } from "react";
import {
  FaEnvelope,
  FaStar,
  FaCalendar,
  FaUser,
  FaFolder,
  FaComments,
  FaBook,
  FaRegCircleQuestion,
} from "react-icons/fa6";
import Image from "next/image";
import { link } from "fs";

type DropdownProps = {
  option: number;
};

export default function Dropdown({ option = 1 }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [subjects, setSubjects] = useState<{ label: string }[]>([]);

  /* ---------- DATA SOURCES ---------- */

  const internalLinks = [
    { label: "Berichten", icon: <FaEnvelope />, href: "/berichten" },
    { label: "Mijn leerlingfiche", icon: <FaUser />, href: "/leerlingfiche" },
    { label: "Forum", icon: <FaComments />, href: "/forum" },
    { label: "Nieuwsberichten", icon: <FaStar />, href: "/nieuwsberichten" },
    {
      label: "Leerlingvolgsysteem",
      icon: <FaBook />,
      href: "/leerlingvolgsysteem",
    },
    { label: "Planner", icon: <FaCalendar />, href: "/planner" },
    { label: "Mijn documenten", icon: <FaFolder />, href: "/documenten" },
    {
      label: "Handleiding",
      icon: <FaRegCircleQuestion />,
      href: "/handleiding",
    },
  ];

  const apps = [
    {
      label: "Broodje Bestellen",
      icon: "/icons/broodje.png",
      href: "/broodjebestellen",
    },
    {
      label: "Appwel",
      icon: "/icons/appwel.png",
      href: "https://appwel.be",
    },
    {
      label: "diddit",
      icon: "/icons/diddit.png",
      href: "https://diddit.be",
    },
    {
      label: "e-ducate.me",
      icon: "/icons/educate.png",
      href: "https://e-ducate.me",
    },
    {
      label: "i-Learn",
      icon: "/icons/ilearn.png",
      href: "https://i-learn.be",
    },
    {
      label: "Lernova",
      icon: "/icons/lernova.png",
      href: "https://lernova.be",
    },
    {
      label: "Pelckmans Portaal",
      icon: "/icons/pelckmans.png",
      href: "https://www.pelckmansportaal.be/",
    },
    {
      label: "POLPO",
      icon: "/icons/polpo.png",
      href: "https://polpo.be",
    },
  ];

  /* ---------- BACKEND (mock) ---------- */

  useEffect(() => {
    if (option >= 3) {
      // later: fetch('/api/subjects')
      setSubjects([
        { label: "Wiskunde" },
        { label: "Nederlands" },
        { label: "Engels" },
        { label: "Wetenschappen" },
      ]);
    }
  }, [option]);

  /* ---------- CONTENT SELECTION ---------- */

  let content: JSX.Element[] = [];

  if (option === 1) {
    content = internalLinks.map((item) => (
      <MenuItem key={item.label} {...item} />
    ));
  } else if (option === 2) {
    content = apps.map((app) => <AppItem key={app.label} {...app} />);
  } else {
    content = subjects.map((s) => <MenuItem key={s.label} label={s.label} href="#" />);
  }

  /* ---------- RENDER ---------- */

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="p2 text-white font-medium hover:underline"
      >
        {option === 1 ? "Ga naar" : option === 2 ? "Links" : "Vakken"}
      </button>

      {isOpen && (
        <div
          className="absolute left-1/2 -translate-x-1/2 mt-3 w-[520px]
                     bg-white rounded-lg shadow-xl border z-50"
        >
          {/* Arrow */}
          <div
            className="absolute -top-2 left-1/2 -translate-x-1/2
                       w-4 h-4 bg-white rotate-45 border-l border-t"
          />

          <div className="grid grid-cols-2 gap-4 p-6 text-sm text-gray-800">
            {content}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function MenuItem({
  icon,
  label,
  href,
}: {
  icon?: JSX.Element;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-100 cursor-pointer"
    >
      {icon && <span className="text-lg text-gray-600">{icon}</span>}
      <span className="font-medium">{label}</span>
    </a>
  );
}

function AppItem({
  icon,
  label,
  href,
}: {
  icon: string;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100"
    >
      <Image src={icon} alt={label} width={28} height={28} />
      <span className="font-medium">{label}</span>
    </a>
  );
}
