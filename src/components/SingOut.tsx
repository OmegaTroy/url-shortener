'use client'
import { signOut } from "next-auth/react"
import {LogOut} from 'lucide-react'

function SingOut() {
  return (
    <button className="relative w-full flex gap-2 cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors " onClick={() => {
      signOut()
    }}>
      <LogOut className="h-4 w-4" />
      <span>Log Out</span>
    </button>
  )
}

export default SingOut