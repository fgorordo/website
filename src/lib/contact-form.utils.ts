import { z } from 'zod';

export const contactFormValidationSchema = z.object({
    fullName: z.string().nonempty('Debes ingresar tu nombre.').max(50, {message: 'El nombre no puede contener más de 50 caracteres.'}),
    phone: z.string().optional(),
    email: z.string().email('Ingrese un email válido.'),
    message: z.string().nonempty('Por favor escriba su mensaje.'),
    suscriber: z.boolean()
});

export type ContactFormSchema = z.infer<typeof contactFormValidationSchema>;

export const contactFormDefaultValues:ContactFormSchema = {
    email: "",
    fullName: "",
    message: "",
    phone: "",
    suscriber: true,
} 