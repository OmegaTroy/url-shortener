/* eslint-disable @next/next/no-img-element */
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { Home,LayoutDashboard,Settings } from 'lucide-react';
import Link from 'next/link';
import SingOut from './SingOut';

interface UserProps{
  user: {
    name: string,
    email: string,
    image: string
  }
}

function UserMenu({ user }: UserProps) {
  return (
    <DropdownMenu >
    <DropdownMenuTrigger>
    <img src={user.image} alt={user?.name} className="rounded-full border-2 border-color4 w-10 h-10" />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56" align="end" >
      <DropdownMenuLabel>
        <span className='text-neutral-900 dark:text-neutral-50'>{user?.name}</span>
        <p className='text-neutral-400 text-sm font-light dark:text-neutral-300'>{user?.email}</p>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Link href='/' className='relative w-full flex gap-2 cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors '>
          <Home className='h-4 w-4' />
          <span>Home</span>
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link href='/dashboard' className='relative w-full flex gap-2 cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors'>
          <LayoutDashboard className='h-4 w-4' />
          <span>Dashboard</span>
        </Link>
        </DropdownMenuItem>
      <DropdownMenuItem>
        <Link href='/dashboard/settings' className='relative w-full flex gap-2 cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors '>
        <Settings className='h-4 w-4' />
        <span>Settings</span>
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <SingOut />
        </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default UserMenu