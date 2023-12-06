'use client';

import type { NextPage } from 'next';
import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';

import trpc from '@/services/trpc/client';
import { authCredentialsSchema } from '@/services/validations';
import type { AuthCredentialsSchema } from '@/services/validations/types';

import { cn } from '@/lib/utils';

import Icons from '@/components/icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SignUpPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AuthCredentialsSchema>({
    resolver: zodResolver(authCredentialsSchema)
  });
  const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({});

  const onSubmit = ({ email, password }: AuthCredentialsSchema) => {
    mutate({ email, password });
  };

  return (
    <div className="container relative flex flex-col items-center justify-center pt-20 lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Icons.logo className="h-20 w-20" />

          <h1 className="text-2xl font-bold">Create an account</h1>

          <Link
            className={buttonVariants({
              variant: 'link',
              className: 'gap-1.5'
            })}
            href="/sign-in"
          >
            Already have an account? Sign-in
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <div className="grid gap-1 py-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  className={cn({
                    'focus-visible:ring-red-500': errors.email
                  })}
                  placeholder="pidchashymaryan@gmail.com"
                  {...register('email')}
                />
              </div>

              <div className="grid gap-1 py-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  className={cn({
                    'focus-visible:ring-red-500': errors.password
                  })}
                  placeholder="Password"
                  type="password"
                  {...register('password')}
                />
              </div>

              <Button>Sign Up</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
