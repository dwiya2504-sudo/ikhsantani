import { Form, Head } from '@inertiajs/react';
import {
    AlertCircle,
    ArrowRight,
    CheckCircle2,
    Lock,
    Mail,
} from 'lucide-react';
import type { KeyboardEvent } from 'react';
import { useState } from 'react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type Props = {
    status?: string;
    canResetPassword: boolean;
};

const fieldClassName =
    'h-10 rounded-xl border-[#DDD6C8] bg-[#FCFBF8] text-sm text-[#141A17] shadow-xs transition-all duration-200 placeholder:text-[#969D98] focus-visible:border-[#0F3327] focus-visible:bg-white focus-visible:ring-[3px] focus-visible:ring-[#0F3327]/12 aria-invalid:border-red-500/80 aria-invalid:ring-red-500/15 dark:border-white/12 dark:bg-white/[0.035] dark:text-[#F5F2EB] dark:placeholder:text-[#6D7670] dark:focus-visible:border-[#D4B26E] dark:focus-visible:bg-white/[0.06] dark:focus-visible:ring-[#D4B26E]/18';

export default function Login({ status, canResetPassword }: Props) {
    const [capsLockActive, setCapsLockActive] = useState(false);

    const handlePasswordKeyState = (event: KeyboardEvent<HTMLInputElement>) => {
        if (typeof event.getModifierState === 'function') {
            setCapsLockActive(event.getModifierState('CapsLock'));
        }
    };

    return (
        <>
            <Head title="Log in" />

            {status && (
                <div
                    role="status"
                    className="mb-4 flex items-start gap-2.5 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-2.5 text-xs text-emerald-800 sm:text-sm dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-200"
                >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span className="leading-snug font-medium">{status}</span>
                </div>
            )}

            <Form
                {...store.form()}
                resetOnSuccess={['password']}
                className="flex flex-col gap-4"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-4">
                            {/* Email Field */}
                            <div className="grid gap-2">
                                <Label
                                    htmlFor="email"
                                    className="text-[13px] font-medium text-[#2A322E] dark:text-[#DFDBD0]"
                                >
                                    Email address
                                </Label>
                                <div className="group relative">
                                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#878E89] transition-colors group-focus-within:text-[#0F3327] dark:text-[#78817B] dark:group-focus-within:text-[#D4B26E]">
                                        <Mail className="size-4" />
                                    </span>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        placeholder="name@company.com"
                                        aria-invalid={Boolean(errors.email)}
                                        className={`pl-10 ${fieldClassName}`}
                                    />
                                </div>
                                <InputError message={errors.email} />
                            </div>

                            {/* Password Field */}
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between gap-2">
                                    <Label
                                        htmlFor="password"
                                        className="text-[13px] font-medium text-[#2A322E] dark:text-[#DFDBD0]"
                                    >
                                        Password
                                    </Label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request()}
                                            className="text-xs font-medium text-[#6C562C] no-underline transition-colors hover:text-[#0F3327] hover:underline dark:text-[#D4B26E] dark:hover:text-[#E8CE96]"
                                            tabIndex={5}
                                        >
                                            Forgot password?
                                        </TextLink>
                                    )}
                                </div>
                                <PasswordInput
                                    id="password"
                                    name="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="Enter your password"
                                    aria-invalid={Boolean(errors.password)}
                                    leadingIcon={<Lock className="size-4" />}
                                    onKeyUp={handlePasswordKeyState}
                                    onKeyDown={handlePasswordKeyState}
                                    onBlur={() => setCapsLockActive(false)}
                                    className={fieldClassName}
                                />
                                {capsLockActive && (
                                    <p className="flex items-center gap-1.5 text-xs font-medium text-amber-700 dark:text-amber-300">
                                        <AlertCircle className="size-3.5 shrink-0" />
                                        <span>Caps Lock is currently on</span>
                                    </p>
                                )}
                                <InputError message={errors.password} />
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center justify-between pt-0.5">
                                <div className="flex items-center gap-2.5">
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        tabIndex={3}
                                        className="size-[18px] cursor-pointer rounded-[5px] border-[#C7BFB0] bg-[#FCFBF8] transition-colors data-[state=checked]:border-[#0F3327] data-[state=checked]:bg-[#0F3327] data-[state=checked]:text-[#F7F4EE] dark:border-white/20 dark:bg-white/[0.04] dark:data-[state=checked]:border-[#D4B26E] dark:data-[state=checked]:bg-[#D4B26E] dark:data-[state=checked]:text-[#0B120F]"
                                    />
                                    <Label
                                        htmlFor="remember"
                                        className="cursor-pointer text-[13px] font-normal text-[#4E5752] dark:text-[#B3BBB6]"
                                    >
                                        Keep me signed in
                                    </Label>
                                </div>
                            </div>

                            {/* Primary Submit Action */}
                            <Button
                                type="submit"
                                className="group mt-1 h-10 w-full cursor-pointer rounded-xl border border-[#0F3327]/15 bg-gradient-to-b from-[#164234] to-[#0C281F] text-sm font-medium tracking-[0.01em] text-[#FAF7F0] shadow-[0_10px_24px_-8px_rgba(12,40,31,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-200 hover:from-[#1B4E3E] hover:to-[#0F3327] hover:shadow-[0_14px_28px_-8px_rgba(12,40,31,0.65),inset_0_1px_0_rgba(255,255,255,0.16)] active:scale-[0.99] dark:border-[#DFC180]/30 dark:from-[#E1C382] dark:to-[#C49F57] dark:text-[#0C1410] dark:shadow-[0_10px_26px_-8px_rgba(212,178,110,0.4),inset_0_1px_0_rgba(255,255,255,0.35)] dark:hover:from-[#E9CE93] dark:hover:to-[#CEAA63]"
                                tabIndex={4}
                                disabled={processing}
                                data-test="login-button"
                            >
                                {processing ? (
                                    <>
                                        <Spinner className="size-4" />
                                        <span>Signing in...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Sign in to workspace</span>
                                        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                    </>
                                )}
                            </Button>
                        </div>
                    </>
                )}
            </Form>
        </>
    );
}

Login.layout = {
    title: 'Welcome back',
    description: 'Sign in with your credentials to continue to your workspace.',
};
