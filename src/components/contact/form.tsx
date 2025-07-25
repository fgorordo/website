'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { FormConfirmationDialog, RequiredField } from '../common';
import { contactFormDefaultValues, ContactFormSchema, contactFormValidationSchema } from '@/lib/contact-form.utils';
import { sleep } from '@/lib/sleep';

export const ContactForm = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false);

    const form = useForm<ContactFormSchema>({
        resolver: zodResolver(contactFormValidationSchema),
        defaultValues: contactFormDefaultValues
    });

    const showConfirmation = async () => {
        setIsConfirmationOpen(true);
        await sleep(5000)
        setIsConfirmationOpen(false)
    }


    const onSubmit = async (values: ContactFormSchema) => {
        setIsLoading(true);
        // const mailText = `Name: ${values.fullName}\n  Email: ${values.email}\nMessage: ${values.message}`;
        // const response = await sendMail({
        //     email: values.email,
        //     subject: 'New Contact Us Form',
        //     text: mailText,
        // });

        // if (response?.messageId) {
        //     setIsLoading(false);
        //     await showConfirmation()
        //     console.log(values);
        //     form.reset()
        // } else {
        //     console.error('Failed to send application')
        //     setIsLoading(false);
        // }
        console.log(values);
        await sleep(3000);
        setIsLoading(false);
        form.reset()
        await showConfirmation()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <div className='grid gap-8 grid-cols-1 lg:grid-cols-2'>

                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre<RequiredField /></FormLabel>
                                <FormControl>
                                    <Input placeholder={isLoading ? `${field.value}` : "Ingrese su nombre"} {...field} disabled={isLoading} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className='mb-auto'>
                                <FormLabel>Teléfono</FormLabel>
                                <FormControl>
                                    <Input placeholder={isLoading ? `${field.value?.length && field.value.length > 0 ? field.value : "Ingrese su número de teléfono"}` : "Ingrese su número de teléfono"} {...field} disabled={isLoading} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email<RequiredField /></FormLabel>
                            <FormControl>
                                <Input placeholder={isLoading ? `${field.value}` : "Ingrese su email"} {...field} disabled={isLoading} />
                            </FormControl>
                            <FormDescription>
                                Por favor, ingrese un email válido ya que nos pondremos en contacto al mail indicado.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />



                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className='max-w-full'>
                            <FormLabel>Mensaje<RequiredField /></FormLabel>
                            <FormControl>
                                <Textarea className='h-[120px]' placeholder={isLoading ? `${field.value}` : "Escriba su mensaje aqui..."} {...field} disabled={isLoading}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="suscriber"
                    render={({ field }) => (
                        <FormItem className='flex items-center'>
                            <FormControl>
                                <Checkbox onCheckedChange={field.onChange} defaultChecked={form.formState.defaultValues?.suscriber} />
                            </FormControl>
                            <FormLabel className='text-xs text-muted-foreground font-normal'>Deseo recibir novedades, consejos útiles y promociones exclusivas. {`${"(Opcional)"}`}</FormLabel>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='w-full flex md:justify-between md:items-center flex-col md:flex-row gap-6'>
                    <p className='text-muted-foreground text-xs'>Los campos marcados con <RequiredField /> son obligatorios.</p>
                    <FormConfirmationDialog isLoading={isLoading} open={isConfirmationOpen} closeFn={setIsConfirmationOpen} />
                </div>
            </form>
        </Form>
    );
};