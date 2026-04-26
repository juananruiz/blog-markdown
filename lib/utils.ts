import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    
    // Opciones para formatear la fecha
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC" // Force UTC for consistency
    })
  } catch (e) {
    return dateString
  }
}

export function toMachineDate(dateString: string): string {
  try {
    return new Date(dateString).toISOString().split('T')[0]
  } catch (e) {
    return dateString
  }
}

