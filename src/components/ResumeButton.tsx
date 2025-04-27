import React from 'react'
import { DownloadIcon } from 'lucide-react'
export const ResumeButton = () => {
  return (
    <a
      href="https://drive.google.com/file/d/11eZ--GdKn6PfNppK-XWvEMTZT8P5AqoL/view?usp=sharing" // Replace with actual resume download link
      download="hardikresume.pdf"
      className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-3 px-5 rounded-full shadow-lg transform hover:scale-110 transition-transform border-2 border-yellow-500"
    >
      <DownloadIcon size={20} />
      <span>Download Resume</span>
    </a>
  )
}
