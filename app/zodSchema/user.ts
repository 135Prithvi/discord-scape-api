import z from "zod";

export const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(3),
    username: z.string().min(5),
    role: z.enum(["user", "admin"]),
})

export type User = z.infer<typeof userSchema>