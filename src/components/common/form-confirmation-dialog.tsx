'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'
import { ChevronRightIcon, MailCheckIcon } from 'lucide-react'

interface FormConfirmationDialogProps {
  open: boolean;
  isLoading: boolean;
  closeFn: (open: boolean) => void;
}

export const FormConfirmationDialog = ({open, isLoading, closeFn }: FormConfirmationDialogProps) => {

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild><Button type="submit" className='w-full md:w-auto cursor-pointer' size={"lg"} disabled={isLoading}>Enviar <ChevronRightIcon /></Button></AlertDialogTrigger>
      <AlertDialogContent aria-describedby='message-success-description'>
        <span id='message-success-description' className='sr-only'>Confirmación de mensaje enviado correctamente - KSQ Pergamino</span>
        <AlertDialogHeader>
          <MailCheckIcon size={64} className='text-primary mx-auto mb-6' />
          <AlertDialogTitle className='text-center text-3xl mb-4'>¡Mensaje enviado!</AlertDialogTitle>
          <AlertDialogDescription className='text-center text-lg'>
            Tu mensaje ha sido enviado con éxito.<br/>
            Gracias por contactarnos, te responderemos tan pronto como lo veamos.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='w-full'>
          <AlertDialogAction asChild onClick={()=> closeFn(false)} className='mx-auto'><Button size={"lg"} className='w-full md:w-auto'>Aceptar</Button></AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}