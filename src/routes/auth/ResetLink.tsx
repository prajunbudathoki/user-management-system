import { createFileRoute } from '@tanstack/react-router';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const Route = createFileRoute('/auth/ResetLink')({
  component: RouteComponent,
});

function RouteComponent() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('OTP submitted')
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Reset Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <p className="mb-4 text-sm text-gray-400 text-center">
              Enter the OTP sent to your email to reset your password.
            </p>
            <div className="mb-6 flex justify-center">
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Button type="submit" className="w-full">
              Verify OTP
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-sm">
            Didn't receive the code?{' '}
            <a href="#" className="text-gray-300 hover:underline">
              Resend OTP
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}