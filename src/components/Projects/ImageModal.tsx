import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  image: string | null;
  onClose: () => void;
}

export function ImageModal({ image, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!image) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl mx-auto">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-indigo-400 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        <div
          className="bg-white rounded-lg p-2"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image}
            alt="Project preview"
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
