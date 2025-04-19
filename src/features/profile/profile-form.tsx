"use client"

import type React from "react"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"


export default function ProfileForm(){
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm">
                First name
              </label>
              <Input />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm">
                Last name
              </label>
              <Input />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm">
                Email address
              </label>
              <Input />
            </div>
            <div className="space-y-2">
              <label htmlFor="streetAddress" className="text-sm">
                Street address
              </label>
              <Input />
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <h3 className="font-medium">Password Changes</h3>
            <div className="space-y-2">
              <Input placeholder='Current passwod' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input placeholder='New passwod' />
              </div>
              <div className="space-y-2">
                <Input placeholder='Confirm new passwod'/>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              Save Changes
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
