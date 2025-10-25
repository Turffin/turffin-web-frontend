'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import * as yup from 'yup'
import Link from 'next/link'
import { yupResolver } from '@hookform/resolvers/yup'
import { cn } from '@/lib/utils'

const schema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function LoginPage() {
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: any) => {
        // handle login logic here
    }

    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-xl">Welcome back</CardTitle>
                        <CardDescription>Login with your email address and password</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <Input id="email" type="email" placeholder="m@example.com" {...register("email")} className={cn("border", errors.email && "border-destructive")} />
                                    {errors?.email && <FieldDescription className="text-start text-destructive" aria-live="polite">{errors?.email?.message}</FieldDescription>}
                                </Field>
                                <Field>
                                    <div className="flex items-center">
                                        <FieldLabel htmlFor="password">Password</FieldLabel>
                                        <Link href="#" className="ml-auto text-sm underline-offset-4 hover:underline">Forgot your password?</Link>
                                    </div>
                                    <Input id="password" type="password" placeholder="*********" {...register("password")}  className={`${errors.password ? 'border-red-500' : 'transparent'} border`} />
                                    {errors.password && <FieldDescription className="text-start text-destructive" aria-live="polite">{errors.password.message}</FieldDescription>}
                                </Field>
                                <Field>
                                    <Button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</Button>
                                    <FieldDescription className="text-center">Don&apos;t have an account? <a href="/signup">Sign up</a></FieldDescription>
                                </Field>
                            </FieldGroup>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
