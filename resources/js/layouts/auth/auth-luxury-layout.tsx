import { Link, usePage } from '@inertiajs/react';
import {
    ArrowLeft,
    Layers,
    Lock,
    Moon,
    ShieldCheck,
    Sparkles,
    Sun,
} from 'lucide-react';
import AppLogoIcon from '@/components/app-logo-icon';
import { useAppearance } from '@/hooks/use-appearance';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

const highlights = [
    {
        icon: ShieldCheck,
        title: 'Protected Sessions',
        description:
            'End-to-end encrypted authentication with strict rate-limiting.',
    },
    {
        icon: Layers,
        title: 'Unified Workspace',
        description:
            'Manage operations, insights, and account controls in one place.',
    },
    {
        icon: Sparkles,
        title: 'Refined Experience',
        description:
            'Built for speed, clarity, and effortless daily execution.',
    },
];

export default function AuthLuxuryLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    const { name } = usePage().props;
    const { resolvedAppearance, updateAppearance } = useAppearance();
    const appName = name || 'Workspace';
    const isDark = resolvedAppearance === 'dark';

    return (
        <div className="relative h-dvh w-full overflow-hidden bg-[#F7F4EE] text-[#141A17] antialiased transition-colors duration-300 dark:bg-[#090D0B] dark:text-[#F4F1EA]">
            {/* Ambient background glow for the form canvas */}
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 overflow-hidden"
            >
                <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-[#C8A96A]/15 blur-[110px] dark:bg-[#C8A96A]/10" />
                <div className="absolute -bottom-32 left-[20%] h-[380px] w-[380px] rounded-full bg-[#164A39]/10 blur-[120px] dark:bg-[#164A39]/20" />
            </div>

            <div className="relative mx-auto grid h-full w-full lg:grid-cols-12">
                {/* Left Editorial Showcase Panel (Desktop) */}
                <aside className="relative hidden h-full flex-col justify-between overflow-hidden border-r border-[#C8A96A]/15 bg-[#0B1B15] p-8 text-[#F6F3EC] lg:col-span-5 lg:flex xl:col-span-6 xl:p-11">
                    {/* Architectural grid & atmospheric light */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
                        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#1D5B45]/40 blur-[110px]" />
                        <div className="absolute right-[-60px] bottom-[-60px] h-96 w-96 rounded-full bg-[#C8A96A]/18 blur-[120px]" />
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07110D]/80 to-transparent" />
                    </div>

                    {/* Top Brand Header */}
                    <div className="relative z-10 flex items-center justify-between">
                        <Link
                            href={home()}
                            className="group inline-flex items-center gap-3.5 focus-visible:outline-none"
                        >
                            <div className="flex size-10 items-center justify-center rounded-xl border border-[#C8A96A]/35 bg-white/[0.06] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                                <AppLogoIcon className="size-5 fill-current text-[#E8D2A0]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-base font-semibold tracking-tight text-[#FAF7F0]">
                                    {appName}
                                </span>
                                <span className="text-[10px] font-medium tracking-[0.2em] text-[#C8A96A]/85 uppercase">
                                    Executive Suite
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Middle Editorial Copy & Pillars */}
                    <div className="relative z-10 my-auto max-w-lg space-y-6 py-4">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#C8A96A]/30 bg-[#C8A96A]/10 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-[#E6CE97] uppercase backdrop-blur-sm">
                            <span className="size-1.5 rounded-full bg-[#E6CE97]" />
                            Private Access Portal
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl leading-[1.15] font-semibold tracking-tight text-[#FAF7F0] xl:text-[32px]">
                                Crafted for clarity, built for modern
                                operations.
                            </h2>
                            <p className="text-sm leading-relaxed text-[#B6C2BC]">
                                Sign in to access your unified dashboard,
                                oversee workflows effortlessly, and stay aligned
                                with real-time precision.
                            </p>
                        </div>

                        <div className="grid gap-2.5">
                            {highlights.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.035] p-3 backdrop-blur-md transition-colors duration-200 hover:border-[#C8A96A]/25 hover:bg-white/[0.055]"
                                    >
                                        <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg border border-[#C8A96A]/25 bg-[#C8A96A]/10 text-[#E5C98E]">
                                            <Icon className="size-3.5" />
                                        </div>
                                        <div className="space-y-0.5">
                                            <p className="text-xs font-medium text-[#F5F2EB] xl:text-sm">
                                                {item.title}
                                            </p>
                                            <p className="text-xs leading-snug text-[#9BA9A2]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom Status & Signature */}
                    <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-[#95A39C]">
                        <div className="inline-flex items-center gap-2">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                            </span>
                            <span>All systems operational</span>
                        </div>
                        <span>
                            &copy; {new Date().getFullYear()} {appName}
                        </span>
                    </div>
                </aside>

                {/* Right Authentication Form Canvas */}
                <main className="relative flex h-full flex-col justify-between overflow-hidden px-4 py-4 sm:px-8 sm:py-5 lg:col-span-7 lg:px-10 xl:col-span-6">
                    {/* Top Utility Header */}
                    <header className="mx-auto flex w-full max-w-[420px] shrink-0 items-center justify-between lg:max-w-none">
                        <Link
                            href={home()}
                            className="inline-flex items-center gap-2.5 rounded-lg text-sm font-medium text-[#4E5752] transition-colors hover:text-[#111815] lg:gap-2 dark:text-[#A3ABA6] dark:hover:text-[#F6F3EC]"
                        >
                            <span className="flex size-8 items-center justify-center rounded-xl border border-[#DFD8CA] bg-white/90 shadow-xs lg:hidden dark:border-white/10 dark:bg-white/5">
                                <AppLogoIcon className="size-4 fill-current text-[#0F3327] dark:text-[#E5C98E]" />
                            </span>
                            <span className="font-semibold tracking-tight text-[#141A17] lg:hidden dark:text-[#F4F1EA]">
                                {appName}
                            </span>
                            <ArrowLeft className="hidden size-4 lg:inline-block" />
                            <span className="hidden lg:inline-block">
                                Back to home
                            </span>
                        </Link>

                        <button
                            type="button"
                            onClick={() =>
                                updateAppearance(isDark ? 'light' : 'dark')
                            }
                            aria-label={
                                isDark
                                    ? 'Switch to light mode'
                                    : 'Switch to dark mode'
                            }
                            className="inline-flex h-8 items-center gap-2 rounded-full border border-[#DFD8CA] bg-white/85 px-3 text-xs font-medium text-[#3F4743] shadow-xs backdrop-blur-md transition-all hover:border-[#C8A96A]/60 hover:text-[#111815] focus-visible:ring-[3px] focus-visible:ring-[#0F3327]/15 focus-visible:outline-none dark:border-white/10 dark:bg-white/[0.05] dark:text-[#CFCAC0] dark:hover:border-[#D4B26E]/40 dark:hover:text-[#F6F3EC] dark:focus-visible:ring-[#D4B26E]/20"
                        >
                            {isDark ? (
                                <>
                                    <Sun className="size-3.5 text-[#E5C98E]" />
                                    <span>Light</span>
                                </>
                            ) : (
                                <>
                                    <Moon className="size-3.5 text-[#0F3327]" />
                                    <span>Dark</span>
                                </>
                            )}
                        </button>
                    </header>

                    {/* Centered Elevated Card */}
                    <div className="mx-auto my-auto w-full max-w-[420px]">
                        <div className="relative overflow-hidden rounded-2xl border border-[#E5DFD2] bg-white/95 p-5 shadow-[0_24px_60px_-15px_rgba(15,23,20,0.09),0_4px_16px_-4px_rgba(15,23,20,0.04)] backdrop-blur-xl sm:p-7 dark:border-white/10 dark:bg-[#111715]/92 dark:shadow-[0_28px_70px_-15px_rgba(0,0,0,0.7)]">
                            {/* Subtle champagne-gold top hairline */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A96A]/75 to-transparent"
                            />

                            {/* Card Header */}
                            <div className="mb-5 space-y-2.5">
                                <div className="inline-flex items-center gap-2 rounded-full border border-[#E6DFD2] bg-[#FAF7F1] px-2.5 py-0.5 text-[10px] font-medium tracking-[0.14em] text-[#7A6234] uppercase dark:border-[#C8A96A]/25 dark:bg-[#C8A96A]/10 dark:text-[#DFC180]">
                                    <span className="size-1.5 rounded-full bg-[#B5924C] dark:bg-[#DFC180]" />
                                    Account Access
                                </div>

                                <div className="space-y-1">
                                    <h1 className="text-xl font-semibold tracking-tight text-[#111815] sm:text-2xl dark:text-[#F6F3EC]">
                                        {title}
                                    </h1>
                                    {description && (
                                        <p className="text-xs leading-relaxed text-[#626A65] sm:text-sm dark:text-[#98A19B]">
                                            {description}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {children}
                        </div>
                    </div>

                    {/* Subtle Footer Security Note */}
                    <footer className="mx-auto flex w-full max-w-[420px] shrink-0 items-center justify-center gap-2 text-center text-xs text-[#737B75] dark:text-[#7D8680]">
                        <Lock className="size-3.5 shrink-0 text-[#9B7E46] dark:text-[#C8A96A]/80" />
                        <span>
                            Protected by encrypted session authentication
                        </span>
                    </footer>
                </main>
            </div>
        </div>
    );
}
