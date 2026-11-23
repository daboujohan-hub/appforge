"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock3,
  CreditCard,
  Eye,
  FileText,
  Grip,
  Image,
  LayoutDashboard,
  Link2,
  List,
  Menu,
  MessageCircle,
  MoreHorizontal,
  MousePointer2,
  Package,
  Plus,
  Search,
  Settings2,
  Smartphone,
  Sparkles,
  Square,
  Store,
  Type,
  Upload,
  Users,
  WandSparkles,
} from "lucide-react";

const paletteItems = [
  { label: "Text", icon: Type },
  { label: "Image", icon: Image },
  { label: "Button", icon: Square },
  { label: "Product list", icon: List },
  { label: "Payments", icon: CreditCard },
  { label: "Contact form", icon: MessageCircle },
];

const layers = [
  { label: "Welcome banner", icon: Image },
  { label: "Popular this week", icon: Type },
  { label: "Product collection", icon: Package },
  { label: "Bottom navigation", icon: Menu },
];

export default function Home() {
  const [selectedLayer, setSelectedLayer] = useState("Welcome banner");
  const [activeTab, setActiveTab] = useState("Design");
  const [preview, setPreview] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<"blocks" | "properties" | null>(null);

  return (
    <main className="flex h-[100dvh] min-h-[560px] flex-col overflow-hidden bg-[#f5f6f8] text-[#20242b]">
      <header className="z-10 flex h-[60px] shrink-0 items-center justify-between border-b border-[#e8e9ed] bg-white px-3 sm:h-[68px] sm:px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5b55e7] text-white shadow-sm"><LayoutDashboard size={19} /></div>
          <span className="text-[17px] font-bold tracking-tight">appforge</span>
          <div className="mx-1 hidden h-6 w-px bg-[#e8e9ed] sm:mx-2 sm:block" />
          <button className="flex items-center gap-2 rounded-lg px-1.5 py-1.5 text-xs font-medium hover:bg-gray-50 sm:px-2 sm:text-sm"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#fff1e8] text-[#e77b3e]"><Store size={15} /></span><span className="hidden sm:inline">Kijani Market</span><ChevronDown size={14} className="text-gray-400" /></button>
          <ChevronRight size={15} className="hidden text-gray-300 sm:block" />
          <span className="hidden text-sm text-gray-500 md:inline">My shop app</span>
          <span className="ml-1 rounded-full bg-[#eef8f1] px-2 py-0.5 text-[11px] font-semibold text-[#32834d]">Draft</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="mr-1 hidden items-center gap-1.5 text-xs text-gray-400 lg:flex"><span className="h-1.5 w-1.5 rounded-full bg-[#48b875]" /> All changes saved</span>
          <button onClick={() => setPreview(!preview)} className="flex h-9 items-center gap-2 rounded-lg border border-[#e4e5e9] px-2.5 text-sm font-medium hover:bg-gray-50 sm:px-3"><Eye size={15} /><span className="hidden sm:inline">Preview</span></button>
          <button className="flex h-9 items-center gap-2 rounded-lg bg-[#5b55e7] px-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#4d47d2] sm:px-4"><Upload size={15} /><span className="hidden sm:inline">Publish</span></button>
          <button aria-label="More options" className="hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100 sm:block"><MoreHorizontal size={19} /></button>
          <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-[#f4d9c8] text-xs font-bold text-[#8b4d2d] sm:flex">AM</div>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        <aside className={`${mobilePanel === "blocks" ? "flex" : "hidden"} absolute inset-x-0 bottom-0 top-[60px] z-20 w-full flex-col overflow-y-auto border-r border-[#e8e9ed] bg-white sm:top-[68px] md:relative md:inset-auto md:z-auto md:flex md:w-[210px] md:shrink-0 lg:w-[248px]`}>
          <div className="flex items-center justify-between px-5 pb-3 pt-5"><div><p className="text-[11px] font-bold uppercase tracking-[.12em] text-gray-400">Your app</p><h2 className="mt-1 text-sm font-semibold">Home screen</h2></div><button aria-label="Add page" className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100"><Plus size={17} /></button></div>
          <button className="mx-3 flex items-center gap-2.5 rounded-lg bg-[#f1f0ff] px-3 py-2.5 text-left text-sm font-semibold text-[#514bd2]"><Smartphone size={16} /> Home <span className="ml-auto text-[11px] font-medium text-[#817ce0]">●</span></button>
          <button className="mx-3 mt-1 flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm text-gray-500 hover:bg-gray-50"><Package size={16} /> Products</button>
          <button className="mx-3 flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm text-gray-500 hover:bg-gray-50"><Users size={16} /> About us</button>
          <button className="mx-3 flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm text-gray-500 hover:bg-gray-50"><MessageCircle size={16} /> Contact</button>
          <div className="mx-5 my-5 border-t border-[#eff0f2]" />
          <div className="flex items-center justify-between px-5 pb-3"><p className="text-[11px] font-bold uppercase tracking-[.12em] text-gray-400">Add a block</p><Search size={15} className="text-gray-400" /></div>
          <div className="grid grid-cols-2 gap-2 px-3">
            {paletteItems.map(({ label, icon: Icon }) => <button key={label} draggable onDragStart={(event) => event.dataTransfer.setData("text/plain", label)} className="flex h-[68px] flex-col items-center justify-center gap-2 rounded-lg border border-[#ececf0] text-[11px] font-medium text-gray-600 transition hover:border-[#c9c6ff] hover:bg-[#faf9ff]"><Icon size={18} className="text-[#7772d9]" />{label}</button>)}
          </div>
          <div className="mx-5 my-5 border-t border-[#eff0f2]" />
          <div className="flex items-center justify-between px-5 pb-2"><p className="text-[11px] font-bold uppercase tracking-[.12em] text-gray-400">Layers</p><Grip size={15} className="text-gray-400" /></div>
          <div className="space-y-0.5 px-3">{layers.map(({ label, icon: Icon }) => <button key={label} onClick={() => setSelectedLayer(label)} className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-xs ${selectedLayer === label ? "bg-[#f1f0ff] font-semibold text-[#514bd2]" : "text-gray-500 hover:bg-gray-50"}`}><Icon size={14} />{label}<Grip size={13} className="ml-auto text-gray-300" /></button>)}</div>
          <div className="mt-auto border-t border-[#eff0f2] p-4"><button className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-xs text-gray-500 hover:bg-gray-50"><CircleHelp size={15} /> Help & tutorials <ArrowRight size={14} className="ml-auto" /></button></div>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <div className="flex h-[50px] shrink-0 items-center justify-between border-b border-[#e8e9ed] bg-white px-3 sm:h-[54px] sm:px-5">
            <div className="flex items-center gap-1 rounded-lg bg-[#f5f6f8] p-1"><button className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold shadow-sm">Design</button><button className="rounded-md px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-800">Content</button></div>
            <div className="flex items-center gap-3"><button className="flex items-center gap-1.5 text-xs font-medium text-gray-500"><Smartphone size={15} /> Mobile <ChevronDown size={13} /></button><div className="h-4 w-px bg-gray-200" /><button aria-label="Zoom out" className="text-gray-400 hover:text-gray-700">−</button><span className="text-xs text-gray-500">100%</span><button aria-label="Zoom in" className="text-gray-400 hover:text-gray-700">+</button><div className="h-4 w-px bg-gray-200" /><button aria-label="Undo" className="text-gray-400 hover:text-gray-700"><ArrowLeft size={15} /></button><button aria-label="Redo" className="text-gray-300"><ArrowRight size={15} /></button></div>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto bg-[#f1f2f5] p-3 sm:p-5 lg:p-8" onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); const block = event.dataTransfer.getData("text/plain"); if (block) setSelectedLayer(block); }}>
            <div className="absolute left-3 top-3 flex items-center gap-2 text-[11px] text-gray-400 sm:left-6 sm:top-5 sm:text-xs"><MousePointer2 size={14} /> Canvas <ChevronRight size={13} /> Home</div>
            <div className="relative h-[min(690px,calc(100dvh-150px))] min-h-[440px] w-[min(340px,calc(100vw-40px))] shrink-0 overflow-hidden rounded-[30px] border-[6px] border-[#25272b] bg-white shadow-[0_24px_70px_-25px_rgba(30,35,50,.35)] sm:h-[min(690px,calc(100dvh-190px))] sm:min-h-[560px] sm:w-[340px] sm:rounded-[34px] sm:border-[7px]">
              <div className="flex h-7 items-center justify-between bg-white px-5 text-[10px] font-semibold"><span>9:41</span><span className="flex items-center gap-1"><span>●●●</span><span>◖</span><span className="h-2.5 w-4 rounded-[3px] border border-gray-700" /></span></div>
              <div className="flex h-[52px] items-center justify-between px-4"><div><p className="text-[9px] text-gray-400">GOOD MORNING 👋</p><p className="text-[15px] font-bold tracking-tight">Kijani Market</p></div><button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f6f2]"><Bell size={17} /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#f08b5d]" /></button></div>
              <div onClick={() => setSelectedLayer("Welcome banner")} className={`mx-3 cursor-pointer overflow-hidden rounded-2xl ${selectedLayer === "Welcome banner" ? "ring-2 ring-[#716bea] ring-offset-2" : ""}`}>
                <div className="relative h-[174px] overflow-hidden bg-[#dce9d5]">
                  <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-[#c4d8b8]" /><div className="absolute -right-1 top-8 h-32 w-32 rounded-full bg-[#a9c69b]" />
                  <div className="absolute right-5 top-7 h-28 w-24 rotate-[-12deg] rounded-[45%_45%_35%_35%] bg-gradient-to-br from-[#f4c77e] to-[#d98b4e] shadow-lg"><div className="absolute left-3 top-3 h-5 w-5 rounded-full bg-[#f8e2b5]" /><div className="absolute bottom-3 left-4 h-10 w-16 rounded-full bg-[#f0d7a5]" /></div>
                  <div className="relative z-10 max-w-[190px] p-4 pt-5"><span className="rounded-full bg-white/70 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-[#55734d]">Fresh from the farm</span><h3 className="mt-3 text-[21px] font-extrabold leading-[1.12] text-[#263d2b]">Good food,<br />good living.</h3><p className="mt-1.5 text-[9px] text-[#526b55]">Locally grown, delivered to you.</p><button className="mt-3 rounded-full bg-[#355b3b] px-3 py-1.5 text-[9px] font-semibold text-white">Shop fresh <ArrowRight size={10} className="ml-1 inline" /></button></div>
                </div>
              </div>
              <div onClick={() => setSelectedLayer("Popular this week")} className={`mx-4 mt-5 cursor-pointer ${selectedLayer === "Popular this week" ? "rounded-lg ring-2 ring-[#716bea] ring-offset-2" : ""}`}><div className="flex items-center justify-between"><h3 className="text-[13px] font-bold">Popular this week</h3><button className="text-[9px] font-semibold text-[#55734d]">See all</button></div><div className="mt-2.5 grid grid-cols-3 gap-2"><div className="h-[76px] rounded-xl bg-[#f4e8d5] p-2"><div className="mx-auto mt-1 h-8 w-8 rounded-full bg-gradient-to-br from-[#f4c66e] to-[#d98b3e]" /><p className="mt-1 text-center text-[8px] font-semibold">Mangoes</p></div><div className="h-[76px] rounded-xl bg-[#edf1df] p-2"><div className="mx-auto mt-1 h-8 w-8 rounded-full bg-gradient-to-br from-[#a8c66b] to-[#5d8b45]" /><p className="mt-1 text-center text-[8px] font-semibold">Avocados</p></div><div className="h-[76px] rounded-xl bg-[#f5e5e2] p-2"><div className="mx-auto mt-1 h-8 w-8 rounded-full bg-gradient-to-br from-[#f18b78] to-[#c94e48]" /><p className="mt-1 text-center text-[8px] font-semibold">Tomatoes</p></div></div></div>
              <div onClick={() => setSelectedLayer("Product collection")} className={`mx-4 mt-5 cursor-pointer ${selectedLayer === "Product collection" ? "rounded-lg ring-2 ring-[#716bea] ring-offset-2" : ""}`}><div className="flex items-center justify-between"><h3 className="text-[13px] font-bold">Picked for you</h3><span className="text-[9px] text-gray-400">View all</span></div><div className="mt-2 flex gap-2"><div className="h-[72px] flex-1 rounded-xl bg-[#f7f4ed] p-2"><div className="h-8 w-full rounded-lg bg-[#e8d8b8]" /><p className="mt-1 text-[8px] font-semibold">Farm box · $12</p></div><div className="h-[72px] flex-1 rounded-xl bg-[#f7f4ed] p-2"><div className="h-8 w-full rounded-lg bg-[#dce8d2]" /><p className="mt-1 text-[8px] font-semibold">Green bundle · $8</p></div></div></div>
              <div onClick={() => setSelectedLayer("Bottom navigation")} className={`absolute bottom-0 flex h-[54px] w-full items-center justify-around border-t border-gray-100 bg-white ${selectedLayer === "Bottom navigation" ? "ring-2 ring-inset ring-[#716bea]" : ""}`}><div className="flex flex-col items-center gap-1 text-[#55734d]"><LayoutDashboard size={15} /><span className="text-[7px] font-semibold">Home</span></div><div className="flex flex-col items-center gap-1 text-gray-400"><Package size={15} /><span className="text-[7px]">Shop</span></div><div className="flex flex-col items-center gap-1 text-gray-400"><Clock3 size={15} /><span className="text-[7px]">Orders</span></div><div className="flex flex-col items-center gap-1 text-gray-400"><Users size={15} /><span className="text-[7px]">Account</span></div></div>
            </div>
            <div className="absolute bottom-3 left-3 hidden items-center gap-2 rounded-full border border-[#e5e6ea] bg-white px-3 py-2 text-[11px] text-gray-500 shadow-sm sm:flex sm:bottom-5 sm:left-6"><Sparkles size={14} className="text-[#7772d9]" /> Tip: drag blocks onto your screen</div>
          </div>
        </section>

        <aside className={`${mobilePanel === "properties" ? "flex" : "hidden"} absolute inset-x-0 bottom-0 top-[60px] z-20 flex-col overflow-hidden border-l border-[#e8e9ed] bg-white sm:top-[68px] md:relative md:inset-auto md:z-auto md:flex md:w-[250px] md:shrink-0 lg:w-[280px]`}>
          <div className="flex h-[54px] items-center justify-between border-b border-[#eff0f2] px-5"><div className="flex gap-5">{["Design", "Settings"].map((tab) => <button key={tab} onClick={() => setActiveTab(tab)} className={`h-[54px] border-b-2 text-xs font-semibold ${activeTab === tab ? "border-[#5b55e7] text-[#514bd2]" : "border-transparent text-gray-400"}`}>{tab}</button>)}</div><Settings2 size={16} className="text-gray-400" /></div>
          {activeTab === "Design" ? <div className="flex-1 overflow-y-auto p-5">
            <div className="mb-5"><p className="text-[10px] font-bold uppercase tracking-[.12em] text-gray-400">Selected block</p><div className="mt-2 flex items-center gap-2 rounded-lg border border-[#ececf0] p-2.5"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f1f0ff] text-[#6b65d8]"><Image size={16} /></div><div className="min-w-0 flex-1"><p className="truncate text-xs font-semibold">{selectedLayer}</p><p className="mt-0.5 text-[10px] text-gray-400">Section · Home screen</p></div><MoreHorizontal size={16} className="text-gray-400" /></div></div>
            <div className="border-t border-[#eff0f2] py-4"><div className="mb-3 flex items-center justify-between"><h3 className="text-xs font-semibold">Content</h3><ChevronDown size={14} className="text-gray-400" /></div><label className="mb-1.5 block text-[10px] font-medium text-gray-500">Heading</label><input defaultValue="Good food, good living." className="mb-3 h-9 w-full rounded-lg border border-[#e7e8ec] px-2.5 text-xs outline-none focus:border-[#8b86ed]" /><label className="mb-1.5 block text-[10px] font-medium text-gray-500">Description</label><textarea defaultValue="Locally grown, delivered to you." className="h-[66px] w-full resize-none rounded-lg border border-[#e7e8ec] p-2.5 text-xs outline-none focus:border-[#8b86ed]" /></div>
            <div className="border-t border-[#eff0f2] py-4"><div className="mb-3 flex items-center justify-between"><h3 className="text-xs font-semibold">Appearance</h3><ChevronDown size={14} className="text-gray-400" /></div><label className="mb-1.5 block text-[10px] font-medium text-gray-500">Background image</label><button className="flex h-[72px] w-full flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-[#d9dae0] bg-[#fafbfc] text-[10px] text-gray-500 hover:border-[#aaa5f2]"><Image size={17} className="text-gray-400" />Change image</button><div className="mt-3 flex items-center justify-between"><span className="text-[10px] font-medium text-gray-500">Overlay</span><span className="rounded-md bg-[#f4f5f7] px-2 py-1 text-[10px] text-gray-600">None <ChevronDown size={11} className="ml-1 inline" /></span></div></div>
            <div className="border-t border-[#eff0f2] py-4"><div className="mb-3 flex items-center justify-between"><h3 className="text-xs font-semibold">Layout</h3><ChevronDown size={14} className="text-gray-400" /></div><div className="flex items-center justify-between"><span className="text-[10px] font-medium text-gray-500">Corner radius</span><span className="text-[10px] text-gray-500">16 px</span></div><input type="range" defaultValue="16" className="mt-2 w-full accent-[#625ce0]" /><div className="mt-3 flex items-center justify-between"><span className="text-[10px] font-medium text-gray-500">Padding</span><span className="text-[10px] text-gray-500">16 px</span></div></div>
            <div className="border-t border-[#eff0f2] py-4"><div className="mb-3 flex items-center justify-between"><h3 className="text-xs font-semibold">Visibility</h3><ChevronDown size={14} className="text-gray-400" /></div><div className="flex items-center justify-between"><span className="text-[10px] text-gray-500">Show on this page</span><span className="flex h-[18px] w-8 items-center rounded-full bg-[#625ce0] px-0.5"><span className="ml-auto h-3.5 w-3.5 rounded-full bg-white shadow-sm" /></span></div></div>
          </div> : <div className="p-5"><p className="text-xs font-semibold">Page settings</p><p className="mt-2 text-xs leading-5 text-gray-500">Manage your screen name, navigation, and app-wide settings.</p><button className="mt-4 flex w-full items-center justify-between rounded-lg border border-[#ececf0] p-3 text-xs text-gray-600">Page name <span className="text-gray-400">Home</span></button><button className="mt-2 flex w-full items-center justify-between rounded-lg border border-[#ececf0] p-3 text-xs text-gray-600">Page URL <span className="text-gray-400">/home</span></button></div>}
          <div className="border-t border-[#eff0f2] p-4"><button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#f1f0ff] py-2.5 text-xs font-semibold text-[#514bd2] hover:bg-[#e9e8ff]"><WandSparkles size={14} /> Ask AI to improve</button></div>
        </aside>
      </div>
      <nav className="z-10 flex h-[58px] shrink-0 items-stretch border-t border-[#e8e9ed] bg-white md:hidden" aria-label="Editor panels"><button onClick={() => setMobilePanel(mobilePanel === "blocks" ? null : "blocks")} className={`flex flex-1 flex-col items-center justify-center gap-1 text-[10px] font-medium ${mobilePanel === "blocks" ? "text-[#514bd2]" : "text-gray-500"}`}><Package size={17} />Pages & blocks</button><button onClick={() => setMobilePanel(null)} className={`flex flex-1 flex-col items-center justify-center gap-1 text-[10px] font-medium ${mobilePanel === null ? "text-[#514bd2]" : "text-gray-500"}`}><Smartphone size={17} />Canvas</button><button onClick={() => setMobilePanel(mobilePanel === "properties" ? null : "properties")} className={`flex flex-1 flex-col items-center justify-center gap-1 text-[10px] font-medium ${mobilePanel === "properties" ? "text-[#514bd2]" : "text-gray-500"}`}><Settings2 size={17} />Properties</button></nav>
      {preview && <div className="fixed inset-0 z-30 flex items-center justify-center bg-[#171923]/50 p-6" onClick={() => setPreview(false)}><div className="rounded-2xl bg-white p-5 text-center shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#eef8f1] text-[#32834d]"><Check size={20} /></div><p className="text-sm font-semibold">Preview mode</p><p className="mt-1 text-xs text-gray-500">Your app is looking great on mobile.</p><button onClick={() => setPreview(false)} className="mt-4 rounded-lg bg-[#5b55e7] px-4 py-2 text-xs font-semibold text-white">Back to editor</button></div></div>}
    </main>
  );
}
