import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sidebar } from "@/components/Sidebar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

const UserProfile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleSaveUsername = () => {
    console.log("Username saved:", username);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-muted/20">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Profile details</CardTitle>
          </CardHeader>
          <CardContent className="divide-y px-0">
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>PB</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">prajun Budhathoki</p>
                </div>
              </div>
              <Button variant="link" className="text-white">
                Update profile
              </Button>
            </div>
            <div className="px-6 py-4 border-b">
              <Label className="block text-sm font-medium">Username</Label>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Set username
                </p>
                <Dialog>
                  <DialogTrigger>
                    <Button
                      variant="link"
                      size="sm"
                      className="text-white"
                    >
                      +  Set username
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Set Username</DialogTitle>
                    </DialogHeader>
                    <div className="mt-2">
                      <Input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mb-4"
                      />
                    </div>
                    <DialogFooter>
                      <Button
                        variant="secondary"
                        onClick={() => setUsername("")}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleSaveUsername}
                      >
                        Save
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="px-6 py-4 border-b">
              <Label className="block text-sm font-medium">Email addresses</Label>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                Add email address
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      size="sm"
                      className="text-white"
                    >
                      + Add email address
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Email</DialogTitle>
                      <DialogDescription>You'll need to verify this email address before it can be added to your account.</DialogDescription>
                    </DialogHeader>
                    <div className="mt-2">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-4"
                      />
                    </div>
                    <DialogFooter>
                      <Button
                        variant="secondary"
                        onClick={() => setEmail("")}
                      >
                        Cancel
                      </Button>
                      <Button
                      >
                        Save
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="px-6 py-4 border-b">
              <Label className="block text-sm font-medium">Phone numbers</Label>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Add phone number
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      size="sm"
                      className="text-white"
                    >
                      + Add phone number
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Phone</DialogTitle>
                      <DialogDescription>A text message containing a verification code will be sent to this phone number. Message and data rates may apply.</DialogDescription>
                    </DialogHeader>
                    <div className="mt-2">
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mb-4"
                      />
                    </div>
                    <DialogFooter>
                      <Button
                        variant="secondary"
                        onClick={() => setPhone("")}
                      >
                        Cancel
                      </Button>
                      <Button
                      >
                        Save
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="px-6 py-4">
              <Label className="block text-sm font-medium">Connected accounts</Label>
              <div className="flex items-center gap-2 mt-2">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-4 h-4"
                />
                <span className="text-sm">
                  Google • prajunbudhathoki10@gmail.com
                </span>
              </div>
              <Button variant="link" size="sm" className="text-blue-600 mt-2">
                + Connect account
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default UserProfile;