import React from 'react'
import { AtSignIcon, PhoneIcon } from 'lucide-react'
export const ContactInfo = () => {
  return (
    <div className="bg-yellow-300 p-4 rounded-2xl shadow-md border-2 border-yellow-400 transform -rotate-2 hover:rotate-0 transition-transform">
      <div className="mb-4 flex items-center gap-3">
        <div className="bg-white p-2 rounded-full">
          <AtSignIcon size={20} className="text-yellow-600" />
        </div>
        <span className="font-medium text-yellow-800">hardikkubavat0110@gmail.com</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-white p-2 rounded-full">
          <PhoneIcon size={20} className="text-yellow-600" />
        </div>
        <span className="font-medium text-yellow-800">+91 8140900320</span>
      </div>
    </div>
  )
}
