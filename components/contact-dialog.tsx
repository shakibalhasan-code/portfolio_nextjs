"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactDialog() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Contact Form Submission')
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)
    window.location.href = `mailto:work.shakib.ah@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-blue-500 hover:bg-blue-600">Contact Me</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription className="text-gray-400">
            Fill out this form to get in touch with me.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3 bg-gray-800 border-gray-700 text-white"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3 bg-gray-800 border-gray-700 text-white"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Message
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="col-span-3 bg-gray-800 border-gray-700 text-white"
              required
            />
          </div>
          <Button type="submit" className="ml-auto bg-blue-500 hover:bg-blue-600">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
