import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/\d/, 'Password must contain at least one number')
    .regex(/[!@#$%^&*]/, 'Password must contain at least one special character'),
  shopNames: z.array(z.string().min(1, 'Shop name cannot be empty'))
    .min(3, 'At least 3 shop names are required')
    .refine((shops) => new Set(shops).size === shops.length, {
      message: 'Shop names must be unique',
    }),
});
