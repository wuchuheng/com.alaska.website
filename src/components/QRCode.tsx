import QR from 'qrcode';
import { useEffect, useRef } from 'react';

interface QRCodeProps {
  value: string;
  size?: number;
  className?: string;
}

export const QRCode = ({ value, size = 150, className = '' }: QRCodeProps) => {
  const qrCodeRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // 1. Input handling - Check if canvas reference exists
    if (!qrCodeRef.current) return;

    // 2. Core processing - Generate QR code
    QR.toCanvas(
      qrCodeRef.current,
      value,
      {
        width: size,
        margin: 1,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
      },
      (error) => {
        if (error) console.error('Error generating QR code:', error);
      }
    );
  }, [value, size]);

  // 3. Output handling - Return canvas element
  return <canvas ref={qrCodeRef} className={className} />;
};
