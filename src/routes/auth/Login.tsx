import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { EyeOff, Eye } from 'lucide-react';
import { useState } from 'react';
import { useForm } from '@tanstack/react-form';

export const Route = createFileRoute('/auth/Login')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async () => {
      navigate({ to: '/'})
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
          >
            <form.Field
              name="email"
              validators={{
                onChange: ({ value }) =>
                  !value ? 'Email is required' : undefined,
              }}
            >
              {(field) => (
                <div className="mb-4">
                  <Label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                    Email
                  </Label>
                  <Input
                    id={field.name}
                    type="email"
                    placeholder="Enter your email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="mt-1 block w-full"
                  />
                  {field.state.meta.errors.length > 0  && (
                    <p className="mt-1 text-sm text-red-600">{field.state.meta.errors}</p>
                  )}
                </div>
              )}
            </form.Field>
            <form.Field
              name="password"
              validators={{
                onChange: ({ value }) =>
                  !value ? 'Password is required' : undefined,
              }}
            >
              {(field) => (
                <div className="mb-4">
                  <Label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
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
                      className="absolute right-3 text-gray-500"
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
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end font-bold">
          <p className="text-sm text-gray-600">
            <Link to="/auth/ForgotPassword" className="text-blue-600 hover:underline">
              Forgot your password?
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
