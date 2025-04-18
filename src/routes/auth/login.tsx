import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { Button, buttonVariants } from '@/components/ui/button';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { EyeOff, Eye } from 'lucide-react';
import { useState } from 'react';
import { useForm } from '@tanstack/react-form';

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [usePhone, setUsePhone] = useState(false);

  const form = useForm({
    defaultValues: {
      emailOrPhone: '',
      password: '',
    },
    onSubmit: async () => {
      navigate({ to: '/' });
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Create your account</CardTitle>
          <CardDescription className="text-center">
            Welcome back! Please fill in the details to get started.
          </CardDescription>
          <div className="flex gap-4 justify-center items-center mt-4">
            <Button className={buttonVariants({ variant: 'outline' })}>
              <img src="https://img.clerk.com/static/apple.svg?width=80" />
            </Button>
            <Button className={buttonVariants({ variant: 'outline' })}>
              <img src="https://img.clerk.com/static/discord.svg?width=80" />
            </Button>
            <Button className={buttonVariants({ variant: 'outline' })}>
              <img src="https://img.clerk.com/static/facebook.svg?width=80" />
            </Button>
            <Button className={buttonVariants({ variant: 'outline' })}>
              <img src="https://img.clerk.com/static/github.svg?width=80" />
            </Button>
            <Button className={buttonVariants({ variant: 'outline' })}>
              <img src="https://img.clerk.com/static/google.svg?width=80" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <form.Field
              name="emailOrPhone"
              validators={{
                onChange: ({ value }) =>
                  !value
                    ? usePhone
                      ? 'Phone number is required'
                      : 'Email address is required'
                    : undefined,
              }}
            >
              {(field) => (
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <Label htmlFor={field.name} className="block text-sm font-extralight">
                      {usePhone ? 'Phone Number' : 'Email Address or Username'}
                    </Label>
                    <button
                      type="button"
                      onClick={() => setUsePhone((prev) => !prev)}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      {usePhone ? 'Use Email' : 'Use Phone'}
                    </button>
                  </div>
                  <Input
                    id={field.name}
                    type={usePhone ? 'tel' : 'email'}
                    placeholder={usePhone ? 'Enter your phone number' : 'Enter your email'}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="mt-1 block w-full"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="mt-1 text-sm text-red-600">{field.state.meta.errors}</p>
                  )}
                </div>
              )}
            </form.Field>
            <form.Field
              name="password"
              validators={{
                onChange: ({ value }) =>
                  !value ? 'Password Field is required' : undefined,
              }}
            >
              {(field) => (
                <div className="mb-4">
                  <Label htmlFor={field.name} className="block text-sm font-extralight">
                    Password
                  </Label>
                  <div className="relative flex items-center">
                    <Input
                      id={field.name}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="mt-1 block w-full pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3"
                    >
                      {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                    </button>
                  </div>
                  {field.state.meta.errors.length > 0 && (
                    <p className="mt-1 text-sm text-red-600">{field.state.meta.errors[0]}</p>
                  )}
                </div>
              )}
            </form.Field>
            <Button type="submit" className="w-full mt-2">
              Continue ➡
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/auth/signup" className="text-gray-300 hover:underline">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}