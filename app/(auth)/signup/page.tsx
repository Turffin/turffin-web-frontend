"use client"

import React, { useState } from "react"
import { cn } from '@/lib/utils'
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
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { Loader2 } from "lucide-react"
import { signup } from "@/services/authService"
import { setToken } from "@/lib/auth"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password") as any], "Passwords must match").required("Confirm password is required"),
});

export default function SignupPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await signup(data.name, data.email, data.password);
      if (response.access_token) {
        const tokenStored = setToken(response.access_token);
        if (tokenStored) {
          toast.success('Signup successful');
          router.replace('/home');
        }
      }
    } catch (error) {
      console.error('Signup failed:', error);
      toast.error('Signup failed');
    }
  }
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className={cn("flex flex-col gap-6")}>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Create an account</CardTitle>
            <CardDescription>
              Sign up with your email address and a password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    {...register("name")}
                    className={cn("border", errors.name && "border-destructive")}
                  />
                  {errors?.name && <FieldDescription className="text-start text-destructive" aria-live="polite">{errors.name.message as string}</FieldDescription>}
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    {...register("email")}
                    className={cn("border", errors.email && "border-destructive")}
                  />
                  {errors?.email && <FieldDescription className="text-start text-destructive" aria-live="polite">{errors.email.message as string}</FieldDescription>}
                </Field>

                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    required
                    placeholder="*********"
                    {...register("password")}
                    className={cn("border", errors.password && "border-destructive")}
                  />
                  {errors?.password && <FieldDescription className="text-start text-destructive" aria-live="polite">{errors.password.message as string}</FieldDescription>}
                </Field>

                <Field>
                  <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                  <Input
                    id="confirmPassword"
                    type="password"
                    required
                    placeholder="*********"
                    {...register("confirmPassword")}
                    className={cn("border", errors.confirmPassword && "border-destructive")}
                  />
                  {errors?.confirmPassword && <FieldDescription className="text-start text-destructive" aria-live="polite">{errors.confirmPassword.message as string}</FieldDescription>}
                </Field>

                <Field>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <Loader2 className="animate-spin" /> : "Sign up"}
                  </Button>

                  <FieldDescription className="text-center">
                    Already have an account? <a href="/login">Log in</a>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>

        <FieldDescription className="px-6 text-center">
          By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </FieldDescription>
      </div>
    </main>
  )
}