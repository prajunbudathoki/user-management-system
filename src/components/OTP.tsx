import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './ui/input-otp'

type OTPProps = {
    InputOtp: number
    InputOTPSlot: number
}

const OTP = () => {
    return (
        <>
            <form>
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
            </form>
        </>
    )
}

export default OTP