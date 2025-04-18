import OTP from '@/components/OTP'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

const TwoAuthenticate = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <Card className='w-full max-w-md shadow-lg'>
                <CardHeader>
                    <CardTitle className='text-center text-2xl font-bold'>Two-step verification</CardTitle>
                    <CardDescription>
                        To continue, please enter the verification code generated below
                    </CardDescription>
                </CardHeader>
                <OTP />
                <Button type="submit" className="w-full mx-auto">
                    Continue
                </Button>
            </Card>
        </div>
    )
}

export default TwoAuthenticate