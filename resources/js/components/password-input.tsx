import { Eye, EyeOff } from 'lucide-react';
import type { ComponentProps, ReactNode, Ref } from 'react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export default function PasswordInput({
    className,
    leadingIcon,
    ref,
    ...props
}: Omit<ComponentProps<'input'>, 'type'> & {
    ref?: Ref<HTMLInputElement>;
    leadingIcon?: ReactNode;
}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="group relative">
            {leadingIcon && (
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground transition-colors group-focus-within:text-foreground">
                    {leadingIcon}
                </span>
            )}
            <Input
                type={showPassword ? 'text' : 'password'}
                className={cn('pr-10', leadingIcon && 'pl-10', className)}
                ref={ref}
                {...props}
            />
            <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 flex items-center rounded-r-xl px-3.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                tabIndex={-1}
            >
                {showPassword ? (
                    <EyeOff className="size-4" />
                ) : (
                    <Eye className="size-4" />
                )}
            </button>
        </div>
    );
}
